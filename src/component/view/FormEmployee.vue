<template>
<div class="form-detail" id="EmployeeDetail" v-show="showForm">
    <div class="popup-add">
        <div class="popup-content">
            <div class="popup-header">
                <div class="popup-title">
                    <div class="popup-title__title">Thông tin nhân viên</div>
                    <div class="popup-title__checkbox">
                        <input type="checkbox" class="input__checkbox">
                        <span class="checkbox-text">Là khách hàng</span>
                    </div>
                    <div class="popup-title__checkbox">
                        <input type="checkbox" class="input__checkbox">
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
                                    <BaseInput Class="popup-input" inputClass="m-input" id="employeeCode" Required="true" type="text"/>
                                </div>
                                <div class="popup-name">
                                    <label for="" class="m-label">Tên <span class="required">*</span></label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="employeeName" Required="true" type="text"/>
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
                                    <BaseCombobox id="departmentName" class="combobox" Required="true" value="" url="https://localhost:7050/api/v1/Departments" propValue="DepartmentID" propText="DepartmentName" />
                                </div>
                            </div>
                            <div class="popup-left__3">
                                <div class="popup-position">
                                    <label for="" class="m-label">Chức danh </label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="positionName" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div class="popup-top__right">
                            <div class="popup-right__1">
                                <div class="popup-birthday">
                                    <label for="" class="m-label">Ngày sinh</label>
                                    <el-date-picker
                                        v-model="dateOfBirth"
                                        type="date"
                                        placeholder="DD/MM/YYYY"
                                        :size="size"
                                        format="DD/MM/YYYY"
                                        class="element-date"
                                        id="dateOfBirth"
                                    />
                                </div>
                                <div class="popup-gender">
                                    <label for="" class="m-label">Giới tính</label>
                                    <div class="popup-input popup-input__gender">
                                        <div>
                                            <input type="radio" class="input__radio" value="1" v-model="gender" checked>
                                            <label for="">Nam</label>
                                        </div>
                                        <div>
                                            <input type="radio" class="input__radio" value="0" v-model="gender">
                                            <label for="">Nữ</label>
                                        </div>
                                        <div>
                                            <input type="radio" class="input__radio" value="2" v-model="gender">
                                            <label for="">Khác</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup-right__2">
                                <div class="popup-identityCode">
                                    <label for="" class="m-label">Số CMND</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="identityNumber" type="text"/>
                                </div>
                                <div class="popup-identityDate">
                                    <label for="" class="m-label">Ngày cấp</label>
                                    <el-date-picker
                                        v-model="identityDate"
                                        type="date"
                                        placeholder="DD/MM/YYYY"
                                        :size="size"
                                        format="DD/MM/YYYY"
                                        class="element-date"
                                        id="identityDate"
                                    />
                                </div>
                            </div>
                            <div class="popup-right__3">
                                <div class="popup-identityIssue">
                                    <label for="" class="m-label">Nơi cấp</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="identityPlace" type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="popup-content__bottom">
                        <div class="popup-address">
                            <label for="" class="m-label">Địa chỉ</label>
                            <BaseInput Class="popup-input" inputClass="m-input" id="address" type="text"/>
                        </div>
                        <div class="popup-bottom__flex">
                            <div class="popup-bottom__1">
                                <div class="popup-phoneNumber">
                                    <label for="" class="m-label">ĐT di động</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="phoneNumber" type="text"/>
                                </div>
                                <div class="popup-bankNumber">
                                    <label for="" class="m-label">Tài khoản ngân hàng</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="bankAccount" type="text"/>
                                </div>
                            </div>
                            <div class="popup-bottom__2">
                                <div class="popup-fixedNumber">
                                    <label for="" class="m-label">ĐT cố định</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="hotLine" type="text"/>
                                </div>
                                <div class="popup-bankName">
                                    <label for="" class="m-label">Tên ngân hàng</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="bankName" type="text"/>
                                </div>
                            </div>
                            <div class="popup-bottom__3">
                                <div class="popup-email">
                                    <label for="" class="m-label">Email</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="email" DataType="Email" type="text"/>
                                </div>
                                <div class="popup-bankBranch">
                                    <label for="" class="m-label">Chi nhánh</label>
                                    <BaseInput Class="popup-input" inputClass="m-input" id="bankBranch" type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <div class="popup-br"></div>
                        <div class="popup-footer__btn">
                            <div class="popup-btn__left">
                                <div class="popup-btn__cancel">
                                    <BaseButton text="Hủy" class="ms-button w-600" @click="cancelForm" />
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
import { getEmployeeMaxCode } from '@/utils/loadEmployees';
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
                employeeName: "employeeName",
                departmentName: "departmentName",
            },
            error: {
                code: 1,            //Mã không được để trống
                name: 2,            //Tên không được để trống
                department: 3,      //Đơn vị không được để trống
                date: 4,            //Thời gian vượt qua thời điểm hiện tại
                email: 5,           //Email không đúng định dạng"
                unique: 6           //Mã nhân viên đã tồn tại trong hệ thống
            },
            errorMsg: {
                code:       "Mã không được để trống",
                name:       "Tên không được để trống",
                department: "Đơn vị không được để trống",
                date:       "Thời gian vượt qua thời điểm hiện tại",
                email:      "Email không đúng định dạng",
                unique:     "Mã nhân viên đã tồn tại trong hệ thống",
            },
            CurrentFormMode: 1,
            showForm: false,
            employeeID: "",
            popup: 0,
            showOverForm: false,
            gender: "",
            toast: 0,
            dateOfBirth: "",
            identityDate: "",
        }
    },
    methods: {
        /**
         * 1. Validate dữ liệu trước khi gửi lên server
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

                    // Mã nhân viên không được để trống
                    if (val.id == this.required.employeeCode || required.id == this.required.employeeCode) {
                        val.setAttribute("title", this.errorMsg.code);
                        error.push(this.error.code);
                    } 
                    // Tên nhân viên không được để trống
                    else if (val.id == this.required.employeeName || required.id == this.required.employeeName) {
                        val.setAttribute("title", this.errorMsg.name);
                        error.push(this.error.name);
                    } 
                    // Đơn vị không được để trống
                    else if (val.id == this.required.departmentName || required.id == this.required.departmentName) {
                        val.setAttribute("title", this.errorMsg.department);
                        error.push(this.error.department)
                    }

                } else {
                    val.setAttribute("title", "");
                    val.classList.remove("m-input__error");
                }
            })
            // Validate trường Date
            me.querySelectorAll('.el-input').forEach((date) => {
                let val = date.querySelector(".el-input__wrapper"),
                    input = val.querySelector("input").value,
                    today = new Date();

                // Ngày không được quá ngày hiện tại
                if (input != "" && new Date(this.formatDate(input)) > today) {
                    isValid = false;

                    val.classList.add("m-input__error");
                    val.setAttribute("title", this.errorMsg.date);
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
                    val.setAttribute("title", this.errorMsg.email);
                    error.push(this.error.email);
                } else {
                    val.setAttribute("title", "");
                    val.classList.remove("m-input__error");
                }
            })

            // Nếu có lỗi thì gửi tín hiệu để hiển thị popup cảnh báo
            if (error.length > 0) {
                this.popup = 3;
                this.showOverForm = true;
                this.emitter.emit("openPopupError", error);
            }

            return isValid;
        },
        /**
         * 2. Lấy dữ liệu của employee đã nhập từ form
         * Created by VMHieu 06/08/2022
         */
        getDataForm() {
            let me = this.$el;

            // Lấy giá trị trường date
            let dateOfBirth = me.querySelector("#dateOfBirth").value,
                identityDate = me.querySelector("#identityDate").value;

            // Khởi tạo đối tượng employee
            let employee = {
                "EmployeeCode": me.querySelector("#employeeCode").value,
                "EmployeeName": me.querySelector("#employeeName").value,
                "DepartmentID": me.querySelector("#departmentName").value,
                "PositionName": me.querySelector("#positionName").value,
                "DateOfBirth": dateOfBirth != "" ? this.formatDate(dateOfBirth) : null,
                "IdentityNumber": me.querySelector("#identityNumber").value,
                "IdentityDate": identityDate != "" ? this.formatDate(identityDate) : null,
                "IdentityPlace": me.querySelector("#identityPlace").value,
                "Address": me.querySelector("#address").value,
                "PhoneNumber": me.querySelector("#phoneNumber").value,
                "HotLine": me.querySelector("#hotLine").value,
                "BankAccount": me.querySelector("#bankAccount").value,
                "BankName": me.querySelector("#bankName").value,
                "BankBranch": me.querySelector("#bankBranch").value,
                "Email": me.querySelector("#email").value,
                "Gender": parseInt(this.gender),
            }

            return employee;
        },
        /**
         * 3.1 Cất dữ liệu
         * Created by VMHieu 07/08/2022
         */
        async handleStore() {
            let isValid = this.validateForm(),
                employee,
                response,
                status,
                error = [];

            if (isValid) {
                employee = this.getDataForm();

                // Thực hiện xử lý dữ liệu khi ở form Add
                if (this.CurrentFormMode == this.FormMode.Add) {
                    response = await addEmployee(employee);
                    
                    if (response.status == 201) {
                        // ResetForm sau đó đóng form
                        this.resetForm();
                        this.cancelForm();
                        this.$emit("resetTable");
                        this.emitter.emit("addSuccess");
                    } else if (response.status == 400){
                        // Hiển thị lỗi mã trùng:
                        if (response.data.errorMsg.includes("Mã nhân viên đã tồn tại trong hệ thống")) {
                            error.push(this.error.unique);
                            // Nếu có lỗi thì gửi tín hiệu để hiển thị popup cảnh báo
                            if (error.length > 0) {
                                this.popup = 3;
                                this.showOverForm = true;
                                this.emitter.emit("openPopupError", error);
                            }
                        }
                    }
                    else {
                        this.emitter.emit("addFail");
                    }
                } 
                // Thực hiện xử lý dữ liệu khi ở form Edit
                else if (this.CurrentFormMode == this.FormMode.Edit) {
                    status = await editEmployee(employee, this.employeeID);

                    if (status == 200) {
                        // ResetForm sau đó đóng form
                        this.resetForm();
                        this.cancelForm();
                        this.$emit("resetTable");
                        this.emitter.emit("editSuccess");
                    } else {
                        this.emitter.emit("addFail");
                    }
                }
            }
        },
        /**
         * 3.2 Cất và thêm dữ liệu
         * Created by VMHieu 07/08/2022
         */
        async handleSave() {
            let isValid = this.validateForm(),
                employee,
                response,
                error = [],
                status;

            if (isValid) {
                employee = this.getDataForm();
                // Thực hiện xử lý dữ liệu khi ở form Add
                if (this.CurrentFormMode == this.FormMode.Add) {
                    response = await addEmployee(employee);

                    if (response.status == 201) {
                        // ResetForm và giữ nguyên Form
                        this.resetForm();
                        this.$emit("resetTable");
                        this.emitter.emit("addSuccess", "Save");
                    } else if (response.status == 400){
                        // Hiển thị lỗi mã trùng:
                        if (response.data.errorMsg.includes("Mã nhân viên đã tồn tại trong hệ thống")) {
                            error.push(this.error.unique);
                            // Nếu có lỗi thì gửi tín hiệu để hiển thị popup cảnh báo
                            if (error.length > 0) {
                                this.popup = 3;
                                this.showOverForm = true;
                                this.emitter.emit("openPopupError", error);
                            }
                        }
                    } else {
                        this.emitter.emit("addFail", "Save");
                    }
                } 
                // Thực hiện xử lý dữ liệu khi ở form Edit
                else if (this.CurrentFormMode == this.FormMode.Edit) {
                    status = await editEmployee(employee, this.employeeID);

                    if (status == 200) {
                        // ResetForm và giữ nguyên Form
                        this.resetForm();
                        this.$emit("resetTable");
                        this.emitter.emit("editSuccess");
                    } else {
                        this.emitter.emit("addFail");
                    }

                    this.CurrentFormMode == this.FormMode.Add;
                }
            }
        },
        /**
         * Hủy Form 
         * Created by VMHieu 04/08/2022
         */
         cancelForm() {
            this.$emit("handleCloseForm");
            this.emitter.emit("closeForm");
            this.resetForm();
        },
        /**
         * Đóng Form 
         * Created by VMHieu 04/08/2022
         */
        closeForm() {
            // Xét sự thay đổi của form để in ra thông báo cất dữ liệu hay không
            if (this.CurrentFormMode == this.FormMode.Add) {
                this.$el.querySelectorAll("input").forEach((input) => {
                    if ((input.value != "" && input.getAttribute("type") == "text")) {
                        this.emitter.emit("openPopupWarning");
                        this.popup = 4;
                        this.showOverForm = true;
                    } 
                })
                if (this.popup == 0) {
                    this.$emit("handleCloseForm");
                    this.emitter.emit("closeForm");
                    this.resetForm();
                }
            } else if (this.CurrentFormMode == this.FormMode.Edit) {
                this.$emit("handleCloseForm");
                this.emitter.emit("closeForm");
                this.resetForm();
            }
        },
        /**
         * Reset form khi add xong
         * Created by VMHieu 07/08/2022
         */
        async resetForm() {
            let me = this.$el;
            let code = await getEmployeeMaxCode();

            // Đặt lại giá trị của các ô input
            me.querySelectorAll("input").forEach((input) => {
                input.value = "";
                input.classList.remove("m-input__error");
            })

            me.querySelector("#employeeCode").value = code['data'];
            me.querySelector("#employeeCode").focus();

            this.showOverForm = false;
            this.popup = 0;

            // Đặt lại các trường input binding 2 chiều
            this.dateOfBirth = "";
            this.identityDate = "";
            this.gender = "1";
        },
        /**
         * Format date
         * @param {dữ liệu date nhận được} date 
         * CreatedBy VMHieu 06/08/2022
         */
        formatDate(date) {
            try {
                if (date) {
                    let formatDate = date.split('/');
                    let newDay = formatDate[0],
                        newMonth = formatDate[1],
                        newYear = formatDate[2];

                    return `${newYear}-${newMonth}-${newDay}`;
                }
            } catch (error) {
                console.log(error);
            }

            return "";
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
            this.emitter.on("openAddForm",async () => {
                this.showForm = true;
                this.CurrentFormMode = this.FormMode.Add;
            

                // Call api lấy mã code lớn nhất binding vào ô Mã nhân viên
                try {
                    let code = await getEmployeeMaxCode();

                    let employeeCode = this.$el.querySelector("#employeeCode");
                    employeeCode.value = code['data'];
                    employeeCode.focus();
                } catch (ex) {
                    console.log(ex);
                }
            })
            /**
             * Bắt sự kiện ấn nút mở form sửa
             */
            this.emitter.on("openEditForm", async (employeeData) => {
                let me = this.$el;
                this.showForm = true;
                
                // Đổi sang mode sửa
                this.CurrentFormMode = this.FormMode.Edit;
                // Lưu id của nhân viên cần sửa
                this.employeeID = employeeData.EmployeeID;

                // Binding dữ liệu ra các ô input
                if (employeeData.DateOfBirth) {
                    this.dateOfBirth = employeeData.DateOfBirth;
                }
                if (employeeData.IdentityDate) {
                    this.identityDate = employeeData.IdentityDate;
                }

                me.querySelector("#employeeCode").value = employeeData.EmployeeCode;
                me.querySelector("#employeeName").value = employeeData.EmployeeName;
                me.querySelector("#positionName").value = employeeData.PositionName;
                me.querySelector("#identityNumber").value = employeeData.IdentityNumber;
                me.querySelector("#identityPlace").value = employeeData.IdentityPlace;
                me.querySelector("#address").value = employeeData.Address;
                me.querySelector("#phoneNumber").value = employeeData.PhoneNumber;
                me.querySelector("#email").value = employeeData.Email;
                me.querySelector("#bankBranch").value = employeeData.BankBranch;
                me.querySelector("#bankName").value = employeeData.BankName;
                me.querySelector("#bankAccount").value = employeeData.BankAccount;
                me.querySelector("#hotLine").value = employeeData.HotLine;
                
                if (employeeData.DepartmentID) {
                    let department = await getDepartment(employeeData.DepartmentID);

                    me.querySelector("#departmentName input").value = department.DepartmentName;
                    me.querySelector("#departmentName").value = employeeData.DepartmentID;
                }

                this.gender = employeeData.Gender.toString();
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
             * CreatBy VMHieu 07/08/2022
             */
            this.emitter.on("cancelPopup", () => {
                this.popup = 0;
                this.showOverForm = false;
            })
            /**
             * Lắng nghe sự kiện từ popup
             * CreatBy VMHieu 17/08/2022
             */
            this.emitter.on("closePopup", () => {
                this.popup = 0;
                this.showOverForm = false;
                this.showForm = false;
                this.resetForm();
            })
            /**
             * Lắng nghe sự kiện từ popup
             * CreatBy VMHieu 17/08/2022
             */
            this.emitter.on("storePopup", () => {
                this.popup = 0;
                this.handleStore();
            })
        }, 1);
    },
    updated() {
        
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
