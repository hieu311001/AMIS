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
                                    <BaseInput Class="popup-input popup-input__icon" inputClass="m-input" id="departmentName" Required="true">
                                        <div class="icon-department">
                                            <div class="icon icon-department__arrow"></div>
                                        </div>
                                    </BaseInput>
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
                                    <BaseInput Class="popup-input popup-input__icon" inputClass="m-input m-input-date" placeholder="DD/MM/YYYY" id="dateOfBirth" DataType="Date">
                                        <div class="icon-department">
                                            <div class="icon icon-date"></div>
                                        </div>
                                    </BaseInput>
                                </div>
                                <div class="popup-gender">
                                    <label for="" class="m-label">Giới tính</label>
                                    <div class="popup-input popup-input__gender">
                                        <div>
                                            <input type="radio" value="1" name="gender">
                                            <label for="">Nam</label>
                                        </div>
                                        <div>
                                            <input type="radio" value="0" name="gender">
                                            <label for="">Nữ</label>
                                        </div>
                                        <div>
                                            <input type="radio" value="2" name="gender">
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
                                    <BaseInput Class="popup-input popup-input__icon" inputClass="m-input m-input-date" placeholder="DD/MM/YYYY" id="identityDate" DataType="Date">
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
                                    <button class="ms-button" @click="closeForm">
                                        <div>Hủy</div>
                                    </button>
                                </div>
                            </div>
                            <div class="popup-btn__right">
                                <div class="popup-btn__store" style="padding: 0 0.75rem;">
                                    <button class="ms-button" @click="handleStore">
                                        <div>Cất</div>
                                    </button>
                                </div>
                                <div class="popup-btn__save">
                                    <button class="m-button" @click="handleSave">
                                        <div>Cất và thêm</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BaseInput from '@/base/Input/BaseInput.vue';
import {
    addEmployee
} from '../utils/saveEmployee';

export default {
    props: {
        showForm: {
            type: Boolean,
            default: false
        }
    },
    components: {
        BaseInput
    },
    data() {
        return {
            FormMode: {
                Add: 1,
                Save: 2
            },
            CurrentFormMode: 1,
        }
    },
    methods: {
        /**
         * Đóng Form 
         * Created by VMHieu 04/08/2022
         */
        closeForm() {
            this.$emit("handleCloseForm");
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
                isValid = true;

            // Validate trường Required
            me.querySelectorAll('[Required]').forEach((required) => {
                let val = required.querySelector("input");

                if (!val.value) {
                    isValid = false;

                    val.classList.add("m-input__error");
                    val.setAttribute("title", "Không được để trống");
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
                    val.setAttribute("title", "Thời gian vượt quá thời điểm hiện tại");
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
                    ) && val.value) {
                    isValid = false;

                    val.classList.add("m-input__error");
                    val.setAttribute("title", "Email không đúng định dạng");
                } else {
                    val.setAttribute("title", "");
                    val.classList.remove("m-input__error");
                }
            })

            return isValid;
        },
        /**
         * Lấy dữ liệu của employee đã nhập từ form
         * Created by VMHieu 06/08/2022
         */
        getDataForm() {
            let me = this.$el;

            let employee = {
                "EmployeeCode": me.querySelector("#employeeCode").value,
                "FullName": me.querySelector("#fullName").value,
                "DepartmentName": me.querySelector("#departmentName").value,
                "PositionName": me.querySelector("#positionName").value,
                "DateOfBirth": me.querySelector("#dateOfBirth").value,
                "IdentityNumber": me.querySelector("#identityNumber").value,
                "IdentityDate": me.querySelector("#identityDate").value,
                "IdentityPlace": me.querySelector("#identityPlace").value,
                "Address": me.querySelector("#address").value,
                "PhoneNumber": me.querySelector("#phoneNumber").value
            }

            var checkbox = document.getElementsByName("gender");
            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked === true) {
                    employee["Gender"] = checkbox[i].value
                }
            }

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
                status = await addEmployee(employee);

                if(status == 201) {
                    this.resetForm();
                    this.closeForm();
                    this.$emit("resetTable");
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
                status = await addEmployee(employee);

                if(status == 201) {
                    this.resetForm();
                    this.$emit("resetTable");
                }
            }
        }
    },
    mounted() {
        // Mặc định form là thêm mới
        this.CurrentFormMode = this.FormMode.Add;

        this.emitter.on("openEditForm", (employeeData) => {
            console.log(employeeData, 123);
        })
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

.icon-department {
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
</style>
