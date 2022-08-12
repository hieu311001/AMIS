<template>
<div class="content-main">
    <div class="main-header">
        <div class="header-left">Nhân viên</div>
        <div class="header-right">
            <BaseButton class="m-button ToolbarEmployee" text="Thêm mới nhân viên" @click="handleOpenForm" />
        </div>
    </div>
    <div class="main-body">
        <div class="main-body__filter">
            <div class="ms-input filter-input">
                <BaseInput Class="ms-input filter-input" inputClass="input-search filter-input__search" placeholder="Tìm kiếm theo tên, mã nhân viên">
                    <div class="input-search__icon"></div>
                </BaseInput>
            </div>
            <div class="btn-refresh">
                <div class="icon-refresh icon" @click="refresh"></div>
            </div>
        </div>
        <div class="main-body__table" id="EmployeeTable">
            <table>
                <thead>
                    <tr>
                        <th class="space-left"></th>
                        <th class="checkbox"><input type="checkbox" class="th-checkbox"></th>
                        <th>MÃ NHÂN VIÊN</th>
                        <th>TÊN NHÂN VIÊN</th>
                        <th>GIỚI TÍNH</th>
                        <th class="align-center">NGÀY SINH</th>
                        <th>SỐ CMND</th>
                        <th>CHỨC DANH</th>
                        <th>TÊN ĐƠN VỊ</th>
                        <th>SỐ TÀI KHOẢN</th>
                        <th>TÊN NGÂN HÀNG</th>
                        <th>CHI NHÁNH TK NGÂN HÀNG</th>
                        <th class="task">CHỨC NĂNG</th>
                        <th class="space-right"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="emp in employees" :key="emp.EmployeeId" class="selectedRow" @dblclick="handleEdit(emp.EmployeeId)">
                        <td class="space-left"></td>
                        <td class="checkbox"><input type="checkbox" class="td-checkbox"></td>
                        <td>{{ emp.EmployeeCode }}</td>
                        <td>{{ emp.FullName }}</td>
                        <td>{{ emp.GenderName || "Khác" }}</td>
                        <td class="align-center">{{ formatDate(emp.DateOfBirth) }}</td>
                        <td>{{ emp.IdentityNumber }}</td>
                        <td>{{ emp.PositionName }}</td>
                        <td>{{ emp.DepartmentName }}</td>
                        <td>Chưa có</td>
                        <td>Chưa có</td>
                        <td>Chưa có</td>
                        <td class="task" @dblclick.stop="handle">
                            <div>
                                <button class="table-btn__edit" @click="handleEdit(emp.EmployeeId)">Sửa</button>
                                <button class="table-btn__arrow">
                                    <div class="btn-arrow__icon" @click="handleOpenTask(emp.EmployeeId, emp.EmployeeCode)"></div>
                                </button>
                            </div>
                        </td>
                        <td class="space-right"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="main-body__paging">
            <div class="paging-left">Tổng số: <strong>{{ totalEmployee }}</strong> bản ghi</div>
            <div class="paging-right">
                <div class="record-in-page">
                    <input type="text" class="input-paging" />
                </div>
                <div class="page-number">
                    <div class="page-prev" style="margin-right:13px">Trước</div>
                    <div class="page-number__number">
                        <div class="page-index">1</div>
                        <div class="page-index">2</div>
                        <div class="page-index">3</div>
                        <div class="page-index">4</div>
                    </div>
                    <div class="page-next" style="margin-left:13px">Sau</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="task-combobox" ref="taskCombobox" v-show="showOption">
    <div class="task-btn__clone">Nhân bản</div>
    <div class="task-btn__delete" @click="handleDelete">Xóa</div>
    <div class="task-btn__stop">Ngừng sử dụng</div>
</div>

<transition name="toast">
    <ToastMessage :showToast="toast" />
</transition>
<transition name="form">
    <FormEmployee @handleCloseForm="handleCloseForm" @resetTable="resetTable" @resetTableSave="resetTableSave" />
</transition>

<div id="over" v-show="showOver"></div>

<transition name="popup">
    <PopupMessage :showPopup="popup" />
</transition>

<div class="loader" v-show="showLoader"></div>
</template>

<script>
import BaseButton from '@/component/base/Button/BaseButton.vue';
import BaseInput from "@/component/base/Input/BaseInput.vue";
import FormEmployee from '@/component/view/FormEmployee.vue';
import PopupMessage from '@/component/view/PopupMessage.vue';
import ToastMessage from '@/component/view/ToastMessage.vue';
import {
    loadEmployees
} from '@/utils/loadEmployees';
import {
    getEmployee
} from '@/utils/getEmployee';
import {
    deleteEmployee
} from '@/utils/saveEmployee';

export default {
    name: "TheContentMain",
    props: {

    },
    data() {
        return {
            employees: [],
            isShowForm: false,
            showOver: false,
            showLoader: false,

            totalEmployee: 120,
            dataForm: [],
            showOption: false,
            employeeId: "",
            employeeCode: "",
            popup: 0,
            toast: 0,
        };
    },
    components: {
        BaseButton,
        BaseInput,
        FormEmployee,
        PopupMessage,
        ToastMessage
    },
    methods: {
        /**
         * Lấy toàn bộ bản ghi Employee
         * Created by VMHIEU 04/08/2022
         */
        async loadEmployees() {
            let list = await loadEmployees();
            // setTimeout(() => {
            //     this.showOver = false;
            //     this.showLoader = false;
            // }, 1000);
            // Thực hiện nếu lấy dữ liệu thành công
            if (list != 404) {
                this.employees = list;
                this.totalEmployee = list.length;
                this.showLoader = false;
                this.showOver = false;

                this.openToast(3);
            } else {
                this.openToast(4);
            }
        },
        /**
         * Mở Form Thông Tin Nhân Viên
         * Created by VMHIEU 04/08/2022
         */
        handleOpenForm() {
            this.showOver = true;

            this.emitter.emit("openAddForm");
        },
        /**
         * Đóng Form Thông Tin Nhân Viên
         * Created by VMHIEU 04/08/2022
         */
        handleCloseForm() {
            this.showOver = false;

            this.emitter.emit("closeForm");
        },
        /**
         * Mở Form Edit nhân viên
         * Created by VMHIEU 07/08/2022
         */
        async handleEdit(id) {
            this.showOver = true;

            let dataForm = await getEmployee(id);
            this.emitter.emit("openEditForm", dataForm);
        },
        /**
         * Load lại table khi ấn vào nút cất 
         */
        async resetTable() {
            let list = await loadEmployees();

            this.employees = list;

        },
        /**
         * Format ngày tháng
         * Created by VMHIEU 04/08/2022
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
         * Refresh lại dữ liệu
         * CreatedBy VMHieu 08/08/2022
         */
        refresh() {
            this.showOver = true;
            this.showLoader = true;
            this.loadEmployees();
        },
        /**
         * Mở bảng option
         * CreatedBy VMHieu 08/08/2022
         */
        handleOpenTask(id, code) {
            // Toggle form option
            this.showOption = !this.showOption;

            // Lưu id của nhân viên được chọn
            this.employeeId = id;
            this.employeeCode = code;

            let taskOption = this.$refs.taskCombobox;

            taskOption.style.left = (event.clientX + 10) + 'px';
            taskOption.style.top = (event.clientY + 12) + 'px';
        },
        /**
         * Click vào nút xóa
         * CreatedBy VMHieu 08/08/2022
         */
        async handleDelete() {
            this.emitter.emit("openPopupDelete", this.employeeCode);
            this.popup = 1;
            this.showOver = true;
            this.showOption = false;
        },
        /**
         * Mở toastMessage
         * CreatedBy VMHieu 11/08/2022
         */
        openToast(id) {
            setTimeout(() => {
                this.toast = id;
            }, 500);
            setTimeout(() => {
                this.toast = 0;
            }, 2000);
        }
    },
    created() {
        // Thực hiện lấy dữ liệu Employee
        this.loadEmployees();

        // Hiệu ứng tối màn hình và loader
        this.showOver = true;
        this.showLoader = true;
    },
    mounted() {
        setTimeout(() => {
            /**
             * Bắt sự kiện nhấn nút trong popup
             * CreatedBy VMHieu 10/08/2022
             */
            this.emitter.on("closePopup", async (val) => {
                    if (val == 3) {
                        let status = await deleteEmployee(this.employeeId);

                        if (status == 200) {
                            // Bật hiệu ứng tối màn hình và loader
                            this.showOver = true;
                            this.showLoader = true;
                            // Load lại table
                            this.loadEmployees();
                            this.showOption = false;
                            // Hiện toast trong 2s
                            this.openToast(2);
                        } else {
                            console.log("Fail");
                        }
                    } else if (val == 1) {
                        this.showOver = false;
                    }
                    this.popup = 0;
                }),
            /**
             * Bắt sự kiện ấn nút close toastMessage
             * CreatedBy VMHieu 11/08/2022
             */
            this.emitter.on("closeToastMessage", () => {
                this.toast = 0;
            }),
            /**
             * Bắt sự kiện thêm nhân viên thành công
             * CreatedBy VMHieu 11/08/2022
             */
            this.emitter.on("addSuccess", () => {
                this.openToast(1);
            }),
            /**
             * Bắt sự kiện sửa nhân viên thành công
             * CreatedBy VMHieu 11/08/2022
             */
            this.emitter.on("editSuccess", () => {
                this.openToast(6);
            }),
            /**
             * Bắt sự kiện thêm/sửa nhân viên thất bại
             * CreatedBy VMHieu 11/08/2022
             */
            this.emitter.on("addFail", () => {
                this.openToast(5);
            })
        }, 1);
    }
}
</script>

<style scoped>
/* Content-main */
.content-main {
    padding: 0 0 0 20px;
    background-color: #eceef1;
    height: 100%;
}

.main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 30px 16px 0;
    background: #eceef1;
    transition: top .25s;
}

.header-left {
    font-size: 24px;
    font-weight: 700;
    color: #111;
}

.main-body {
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    flex: 1;
    min-height: 0;
    padding-right: 30px;
}

.main-body__filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    padding: 16px;
}

.filter-input {
    width: 240px;
    margin-right: 10px;
}

.filter-input__search {
    border-color: #babec5 !important;
}

.filter-input__search:hover {
    border-color: #e2e2e2;
}

.filter-input__search:focus {
    border-color: #2ca01c !important;
}

.btn-refresh {
    padding: 0 6px;
    cursor: pointer;
}

.main-body__table {
    width: 100%;
    overflow: auto;
    max-height: calc(100vh - 240px);
}

#EmployeeTable::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #F5F5F5;
}

#EmployeeTable::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #bbbbbb;
}

#EmployeeTable::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
}

/* Content-pagging */
.main-body__paging {
    height: 32px;
    padding: 12px 42px 12px 12px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    bottom: 0;
    z-index: 5;
}

.record-in-page {
    margin: 0 16px;
}

.paging-right {
    display: flex;
    align-items: center;
}

.page-number {
    display: flex;
    align-items: center;
}

.page-number__number {
    display: flex;
}

.page-index {
    padding: 6.5px;
}

.input-paging {
    box-sizing: border-box;
    height: 30px;
    padding: 0;
}

.form-enter-from,
.toast-enter-from,
.over-enter-from,
.popup-enter-from {
    opacity: 0;
}

.form-leave-from,
.toast-leave-from,
.over-leave-from,
.popup-leave-from {
    opacity: 1;
}

.form-enter-to,
.toast-enter-to,
.over-enter-to,
.popup-enter-to {
    opacity: 1;
}

.form-leave-to,
.toast-leave-to,
.over-leave-to,
.popup-leave-to {
    opacity: 0;
}

.form-enter-active,
.over-enter-active,
.popup-enter-active {
    transition: all .2s ease;
}

.form-leave-active,
.over-leave-active,
.popup-leave-active {
    transition: all 0s ease;
}

.toast-enter-active,
.toast-leave-active {
    transition: all .8s ease;
}
</style>
