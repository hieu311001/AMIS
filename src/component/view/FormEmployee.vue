<template>
<div class="form-detail" id="EmployeeDetail" v-show="showForm">
    <div class="popup-add">
        <div class="popup-content">
            <div class="popup-header">
                <div class="popup-title">
                    <div class="popup-title__title">Thông tin nhân viên</div>
                    <div class="popup-title__checkbox">
                        <input type="checkbox">
                        <span class="checkbox-text">Là khách hàng</span>
                    </div>
                    <div class="popup-title__checkbox">
                        <input type="checkbox">
                        <span class="checkbox-text">Là nhà cung cấp</span>
                    </div>
                </div>
                <div class="popup-close toolbar-form">
                    <div class="popup-close__help icon icon-help" style="margin-right: 6px;"></div>
                    <div class="popup-close__close icon icon-close" @click="closeForm"></div>
                </div>
            </div>
            <div class="popup-main">
                <div class="popup-main__content">
                    <div class="popup-content__top">
                        <div class="popup-top__left">
                            <div class="popup-left__1">
                                <div class="popup-code" ref="popupCode">
                                    <label for="" class="m-label">Mã <span class="required">*</span></label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="employeeCode" Required="true" />
                                </div>
                                <div class="popup-name">
                                    <label for="" class="m-label">Tên <span class="required">*</span></label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="fullName" Required="true" />
                                </div>
                            </div>
                            <div class="popup-left__2">
                                <div class="popup-department">
                                    <label for="" class="m-label">Đơn vị <span class="required">*</span></label>
                                    <!-- <BaseInput Class="popup-input popup-input__icon" inputClass="m-input" id="departmentName" Required="true">
                                        <div class="icon-department">
                                            <div class="icon icon-department__arrow"></div>
                                        </div>
                                    </BaseInput> -->
                                    <BaseCombobox id="departmentName" class="combobox" Required="true" value="" url="https://cukcuk.manhnv.net/api/v1/Departments" propValue="DepartmentId" propText="DepartmentName" />
                                </div>
                            </div>
                            <div class="popup-left__3">
                                <div class="popup-position">
                                    <label for="" class="m-label">Chức danh </label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="positionName" />
                                </div>
                            </div>
                        </div>
                        <div class="popup-top__right">
                            <div class="popup-right__1">
                                <div class="popup-birthday">
                                    <label for="" class="m-label">Ngày sinh</label>
                                    <BaseInput Class="popup-input popup-input__icon" type="text" inputClass="m-input m-input-date" placeholder="DD/MM/YYYY" id="dateOfBirth" DataType="Date">
                                        <div class="icon-department">
                                            <div class="icon icon-date"></div>
                                        </div>
                                    </BaseInput>
                                </div>
                                <div class="popup-gender">
                                    <label for="" class="m-label">Giới tính</label>
                                    <div class="popup-input popup-input__gender">
                                        <div>
                                            <input type="radio" value="1" v-model="gender">
                                            <label for="">Nam</label>
                                        </div>
                                        <div>
                                            <input type="radio" value="0" v-model="gender">
                                            <label for="">Nữ</label>
                                        </div>
                                        <div>
                                            <input type="radio" value="2" v-model="gender">
                                            <label for="">Khác</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup-right__2">
                                <div class="popup-identityCode">
                                    <label for="" class="m-label">Số CMND</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="identityNumber" />
                                </div>
                                <div class="popup-identityDate">
                                    <label for="" class="m-label">Ngày cấp</label>
                                    <BaseInput Class="popup-input popup-input__icon" type="date" inputClass="m-input m-input-date" placeholder="DD/MM/YYYY" id="identityDate" DataType="Date">
                                        <div class="icon-department">
                                            <div class="icon icon-date"></div>
                                        </div>
                                    </BaseInput>
                                </div>
                            </div>
                            <div class="popup-right__3">
                                <div class="popup-identityIssue">
                                    <label for="" class="m-label">Nơi cấp</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="identityPlace" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="popup-content__bottom">
                        <div class="popup-address">
                            <label for="" class="m-label">Địa chỉ</label>
                            <BaseInput Class="popup-input" inputClass="m-input" id="address" />
                        </div>
                        <div class="popup-bottom__flex">
                            <div class="popup-bottom__1">
                                <div class="popup-phoneNumber">
                                    <label for="" class="m-label">ĐT di động</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="phoneNumber" />
                                </div>
                                <div class="popup-bankNumber">
                                    <label for="" class="m-label">Tài khoản ngân hàng</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" />
                                </div>
                            </div>
                            <div class="popup-bottom__2">
                                <div class="popup-fixedNumber">
                                    <label for="" class="m-label">ĐT cố định</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="phoneNumber" />
                                </div>
                                <div class="popup-bankName">
                                    <label for="" class="m-label">Tên ngân hàng</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" />
                                </div>
                            </div>
                            <div class="popup-bottom__3">
                                <div class="popup-email">
                                    <label for="" class="m-label">Email</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="email" DataType="Email" />
                                </div>
                                <div class="popup-bankBranch">
                                    <label for="" class="m-label">Chi nhánh</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <div class="popup-br"></div>
                        <div class="popup-footer__btn">
                            <div class="popup-btn__left">
                                <div class="popup-btn__cancel">
                                    <BaseButton text="Hủy" class="ms-button w-600" @click="closeForm" />
                                </div>
                            </div>
                            <div class="popup-btn__right">
                                <div class="popup-btn__store" style="padding: 0 0.75rem;">
                                    <BaseButton text="Cất" class="ms-button w-600" @click="handleStore" />
                                </div>
                                <div class="popup-btn__save">
                                    <BaseButton text="Cất và thêm" class="m-button w-600" @click="handleSave" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <transition name="fade-popup">
        <PopupMessage :showPopup="popup" />
    </transition>
    <div id="overForm" v-if="showOverForm"></div>
</div>
</template>

<script>
import BaseInput from '@/component/base/Input/BaseInput.vue';
import BaseCombobox from '@/component/base/Combobox/BaseCombobox.vue';
import BaseButton from '@/component/base/Button/BaseButton.vue';
import PopupMessage from './PopupMessage.vue';
import {
    addEmployee,
    editEmployee
} from '@/utils/saveEmployee';
import {
    getDepartment
} from '@/utils/getDepartment';
// import {
//     getPosition
// } from '../utils/getPosition';

export default {
    props: {

    },
    components: {
        BaseInput,
        BaseCombobox,
        BaseButton,
        PopupMessage,
    },
    data() {
        return {
            FormMode: {
                Add: 1,
                Edit: 2
            },
            required: {
                employeeCode: "employeeCode",
                fullName: "fullName",
                departmentName: "departmentName",
            },
            error: {
                code: "Mã không được để trống",
                name: "Tên không được để trống",
                department: "Đơn vị không được để trống",
                date: "Thời gian vượt qua thời điểm hiện tại",
                email: "Email không đúng định dạng",
            },
            CurrentFormMode: 1,
            showForm: false,
            employeeId: "",
            popup: 0,
            showOverForm: false,
            gender: "",
            toast: 0,
        }
    },
    methods: {
        /**
         * Đóng Form 
         * Created by VMHieu 04/08/2022
         */
        closeForm() {
            this.$emit("handleCloseForm");
            this.emitter.emit("closeForm");
            this.resetForm();
        },
        /**
         * Reset form khi add xong
         * Created by VMHieu 07/08/2022
         */
        resetForm() {
            let me = this.$el;

            me.querySelectorAll("input").forEach((input) => {
                input.value = "";
                input.classList.remove("m-input__error");
            })

            var checkbox = document.getElementsByName("gender");
            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked === true) {
                    checkbox[i].checked = false;
                }
            }
        },
        /**
         * Validate dữ liệu trước khi gửi lên server
         * Created by VMHieu 07/08/2022
         */
        validateForm() {
            let me = this.$el,
                isValid = true,
                error = [];

            // Validate trường Required
            me.querySelectorAll('[Required]').forEach((required) => {
                let val = required.querySelector("input");

                if (!val.value) {
                    isValid = false;

                    val.classList.add("m-input__error");

                    if (val.id == this.required.employeeCode || required.id == this.required.employeeCode) {
                        val.setAttribute("title", this.error.code);
                        error.push(this.error.code);
                    } else if (val.id == this.required.fullName || required.id == this.required.fullName) {
                        val.setAttribute("title", this.error.name);
                        error.push(this.error.name);
                    } else if (val.id == this.required.departmentName || required.id == this.required.departmentName) {
                        val.setAttribute("title", this.error.department);
                        error.push(this.error.department)
                    }

                } else {
                    val.setAttribute("title", "");
                    val.classList.remove("m-input__error");
                }
            })
            // Validate trường Date
            me.querySelectorAll('[DataType = "Date"]').forEach((date) => {
                let val = date.querySelector("input"),
                    today = new Date(),
                    time = new Date(val.value);

                if (time > today && val.value) {
                    isValid = false;

                    val.classList.add("m-input__error");
                    val.setAttribute("title", this.error.date);
                    error.push(this.error.date);
                } else {
                    val.setAttribute("title", "");
                    val.classList.remove("m-input__error");
                }
            })
            // Validate email
            me.querySelectorAll('[DataType="Email"]').forEach((email) => {
                let val = email.querySelector("input");

                if (!val.value
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) && val.value.replace(/\s/g, '').length > 0) {
                    isValid = false;

                    val.classList.add("m-input__error");
                    val.setAttribute("title", this.error.email);
                    error.push(this.error.email);
                } else {
                    val.setAttribute("title", "");
                    val.classList.remove("m-input__error");
                }
            })

            if (error.length > 0) {
                this.popup = 3;
                this.showOverForm = true;
                this.emitter.emit("openPopupError", error);
            }

            return isValid;
        },
        /**
         * Lấy dữ liệu của employee đã nhập từ form
         * Created by VMHieu 06/08/2022
         */
        getDataForm() {
            let me = this.$el;

            let dateOfBirth = me.querySelector("#dateOfBirth").value,
                identityDate = me.querySelector("#identityDate").value;

            console.log(dateOfBirth)

            let employee = {
                "EmployeeCode": me.querySelector("#employeeCode").value,
                "FullName": me.querySelector("#fullName").value,
                "DepartmentId": me.querySelector("#departmentName").value,
                "PositionID": me.querySelector("#positionName").value,
                "DateOfBirth": new Date(dateOfBirth),
                "IdentityNumber": me.querySelector("#identityNumber").value,
                "IdentityDate": new Date(identityDate),
                "IdentityPlace": me.querySelector("#identityPlace").value,
                "Address": me.querySelector("#address").value,
                "PhoneNumber": me.querySelector("#phoneNumber").value,
                "Email": me.querySelector("#email").value,
                "Gender": this.gender,
            }

            console.log(employee);

            return employee;
        },
        /**
         * Cất dữ liệu
         * Created by VMHieu 07/08/2022
         */
        async handleStore() {
            let isValid = this.validateForm(),
                employee,
                status;

            if (isValid) {
                employee = this.getDataForm();
                if (this.CurrentFormMode == this.FormMode.Add) {
                    status = await addEmployee(employee);

                    if (status == 201) {
                        this.resetForm();
                        this.closeForm();
                        this.$emit("resetTable");
                        this.emitter.emit("addSuccess");
                    } else {
                        this.emitter.emit("addFail");
                    }
                } else if (this.CurrentFormMode == this.FormMode.Edit) {
                    status = await editEmployee(employee, this.employeeId);

                    if (status == 200) {
                        this.resetForm();
                        this.closeForm();
                        this.$emit("resetTable");
                        this.emitter.emit("editSuccess");
                    } else {
                        this.emitter.emit("addFail");
                    }
                }
            }
        },
        /**
         * Cất và thêm dữ liệu
         * Created by VMHieu 07/08/2022
         */
        async handleSave() {
            let isValid = this.validateForm(),
                employee,
                status;

            if (isValid) {
                employee = this.getDataForm();
                if (this.CurrentFormMode == this.FormMode.Add) {
                    status = await addEmployee(employee);

                    if (status == 201) {
                        this.resetForm();
                        this.$emit("resetTable");
                        this.emitter.emit("addSuccess");
                    } else {
                        this.emitter.emit("addFail");
                    }
                } else if (this.CurrentFormMode == this.FormMode.Edit) {
                    status = await editEmployee(employee, this.employeeId);

                    if (status == 200) {
                        this.resetForm();
                        this.$emit("resetTable");
                        this.emitter.emit("editSuccess");
                    } else {
                        this.emitter.emit("addFail");
                    }
                }
            }
        },
        /**
         * Format date
         * @param {dữ liệu date nhận được} date 
         * CreatedBy VMHieu 06/08/2022
         */
        formatDate(date) {
            try {
                if (date) {
                    date = new Date(date);
                    let newDate = ("0" + date.getDate()).slice(-2),
                        newMonth = ("0" + (date.getMonth() + 1)).slice(-2),
                        newYear = date.getFullYear();

                    return `${newDate}/${newMonth}/${newYear}`;
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Mở toastMessage
         * CreatedBy VMHieu 11/08/2022
         */
        openToast(id) {
            this.toast = id;
            setTimeout(() => {
                this.toast = 0;
            }, 1000);
        }
    },
    mounted() {
        // Mặc định form là thêm mới
        this.CurrentFormMode = this.FormMode.Add;

        setTimeout(() => {
            this.emitter.on("openAddForm", () => {
                this.showForm = true;
                this.CurrentFormMode = this.FormMode.Add;
            })
            /**
             * Bắt sự kiện ấn nút mở form sửa
             */
            this.emitter.on("openEditForm", async (employeeData) => {
                let me = this.$el,
                    dateOfBirth,
                    identityDate;
                this.showForm = true;
                // Đổi sang mode sửa
                this.CurrentFormMode = this.FormMode.Edit;
                // Lưu id của nhân viên cần sửa
                this.employeeId = employeeData.EmployeeId;

                console.log(employeeData)

                // Binding dữ liệu ra các ô input
                if (employeeData.DateOfBirth) {
                    dateOfBirth = this.formatDate(employeeData.DateOfBirth);
                    me.querySelector("#dateOfBirth").value = dateOfBirth;
                }

                if (employeeData.IdentityDate) {
                    identityDate = this.formatDate(employeeData.IdentityDate);
                    me.querySelector("#identityDate").value = identityDate;
                }

                me.querySelector("#employeeCode").value = employeeData.EmployeeCode;
                me.querySelector("#fullName").value = employeeData.FullName;
                me.querySelector("#positionName").value = employeeData.PositionName;
                me.querySelector("#identityNumber").value = employeeData.IdentityNumber;
                me.querySelector("#identityPlace").value = employeeData.IdentityPlace;
                me.querySelector("#address").value = employeeData.Address;
                me.querySelector("#phoneNumber").value = employeeData.PhoneNumber;
                me.querySelector("#email").value = employeeData.Email;

                this.gender = employeeData.Gender;

                if (employeeData.DepartmentId) {
                    let department = await getDepartment(employeeData.DepartmentId);

                    me.querySelector("#departmentName input").value = department.DepartmentName;
                    me.querySelector("#departmentName").value = employeeData.DepartmentId;
                }

                // if (employeeData.PositionId) {
                //     let position = await getPosition(employeeData.PositionId);

                //     me.querySelector("#positionName input").value = position.PositionName;
                // }
            })
            /**
             * Lắng nghe sự kiện ấn nút đóng form
             * CreatBy VMHieu 07/08/2022
             */
            this.emitter.on("closeForm", () => {
                this.showForm = false;
            })
            /**
             * Lắng nghe sự kiện mở form để binding ô đơn vị
             * CreatBy VMHieu 07/08/2022
             */
            this.emitter.on("getValue", val => {
                    let me = this.$el;

                    me.querySelector("#departmentName").value = val[0];
                }),
                /**
                 * Lắng nghe sự kiện từ popup
                 */
                this.emitter.on("cancelPopup", () => {
                    this.popup = 0;
                    this.showOverForm = false;
                })
        }, 1);
    },
    updated() {
        console.log(this.gender)
    }
}
</script>

<style scoped>
.form-detail {
    position: fixed;
    background-color: #fff;
    z-index: 9999;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    max-height: 95vh;
    min-width: 900px;
    resize: both;
    border-radius: 4px;
    transition: all 1s;
}

.popup-content,
.popup-add {
    height: 100%;
}

.form-detail .required {
    color: #ff0000;
}

.m-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 4px;
}

.popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.popup-title {
    display: flex;
    align-items: center;
    padding: 20px 12px 20px 32px;
    width: 100%;
}

.popup-title__title {
    font-size: 24px;
    color: #111;
    font-weight: 700;
}

.popup-title__checkbox {
    padding: 0 1.5rem;
    justify-content: flex-start;
    position: relative;
    display: flex;
    align-items: center;
}

.checkbox-text {
    padding-left: 10px;
}

.popup-close {
    display: flex;
    padding: 12px;
}

.popup-main {
    transition: all .23s ease .1s;
    flex-direction: column;
    display: flex;
    overflow: auto;
    overflow-y: visible;
    padding: 0 32px 20px 32px;
    height: calc(100% - 73px);
}

.popup-content__top {
    padding-bottom: 24px;
    display: flex;
}

.popup-top__left {
    padding-right: 26px;
    width: 50%;
}

.popup-top__right {
    width: 50%;
}

.popup-left__1,
.popup-right__1,
.popup-right__2 {
    display: flex;
}

.popup-code,
.popup-birthday {
    width: 40% !important;
    padding-right: 6px;
}

.popup-name,
.popup-gender {
    width: 60% !important;
}

.popup-identityCode {
    width: 60% !important;
    padding-right: 6px;
}

.popup-identityDate {
    width: 40% !important;
}

.popup-top__left>div {
    padding-bottom: 12px;
}

.popup-top__right>div {
    padding-bottom: 12px;
}

.popup-input__gender {
    padding-top: 5px;
    padding-bottom: 6px;
    padding-left: 10px;
    display: flex;
}

.popup-input__gender div {
    display: flex;
    align-items: center;
    padding-right: 20px;
}

.popup-input__gender div label {
    margin-left: 8px;
}

.popup-gender>label {
    padding-left: 10px;
}

.popup-bottom__flex {
    display: flex;
}

.popup-bottom__1,
.popup-bottom__2,
.popup-bottom__3 {
    width: 25% !important;
    padding-right: 6px;
}

.popup-address,
.popup-bottom__1>div,
.popup-bottom__2>div,
.popup-bottom__3>div {
    padding-bottom: 12px;
}

.popup-br {
    width: 100%;
    border-top: 1px solid #e0e0e0;
    margin: 32px 0 20px 0;
    position: relative;
}

.popup-footer__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.popup-btn__right {
    display: flex;
}

.popup-input__icon {
    display: flex;
    position: relative;
}

input::-webkit-calendar-picker-indicator {
    z-index: 10;
    font-size: 30px;
    opacity: 0;
}

.icon-department {
    pointer-events: none;
    position: absolute;
    width: 32px;
    height: 100%;
    top: 0px;
    right: 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    outline: none;
}

.fade-popup-enter-active,
.fade-popup-leave-active {
    transition: opacity 1s;
}

.fade-popup-enter-to,
.fade-popup-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>
