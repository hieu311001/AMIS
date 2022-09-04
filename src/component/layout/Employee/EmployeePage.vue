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
            <table class="employee-table">
                <thead>
                    <tr>
                        <th class="space-left"></th>
                        <th class="checkbox">
                            <input type="checkbox" class="input__checkbox">
                        </th>
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
                    <tr v-for="emp in employees" :key="emp.EmployeeID" class="selectedRow" @dblclick="handleEdit(emp.EmployeeID)">
                        <td class="space-left"></td>
                        <td class="checkbox"  @dblclick.stop="handle">
                            <input type="checkbox" class="input__checkbox" @click="handleCheckbox">
                        </td>
                        <td>{{ emp.EmployeeCode }}</td>
                        <td>{{ emp.EmployeeName }}</td>
                        <td>{{ formatGender(emp.Gender) }}</td>
                        <td class="align-center">{{ formatDate(emp.DateOfBirth) }}</td>
                        <td>{{ emp.IdentityNumber }}</td>
                        <td>{{ emp.PositionName }}</td>
                        <td>{{ emp.DepartmentName }}</td>
                        <td>{{ emp.BankAccount }}</td>
                        <td>{{ emp.BankName }}</td>
                        <td>{{ emp.BankBranch }}</td>
                        <td class="task" @dblclick.stop="handle">
                            <div>
                                <button class="table-btn__edit" @click="handleEdit(emp.EmployeeID)">Sửa</button>
                                <button class="table-btn__arrow">
                                    <div class="btn-arrow__icon" @click="handleOpenTask(emp.EmployeeID, emp.EmployeeCode)"></div>
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
                    <div class="paging-input">
                        <input type="text" class="paging-input__input" ref="pagingInput" disabled/>
                    </div>
                    <div class="paging-input__icon" @click="handleClickArrow">
                        <transition>
                            <div class="icon icon-paging__arrow" ref="pagingArrow"></div>
                        </transition>
                    </div>
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

<div class="paging-list" v-show="paging" ref="pagingCombobox">
    <div class="paging-list__list paging-list_10" @click="handlePagingList">10 bản ghi trên 1 trang</div>
    <div class="paging-list__list paging-list_20 paging-selected" @click="handlePagingList">20 bản ghi trên 1 trang</div>
    <div class="paging-list__list paging-list_30" @click="handlePagingList">30 bản ghi trên 1 trang</div>
    <div class="paging-list__list paging-list_50" @click="handlePagingList" >50 bản ghi trên 1 trang</div>
    <div class="paging-list__list paging-list_100" @click="handlePagingList">100 bản ghi trên 1 trang</div>
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
            paging: false,
        };
    },
    components: {
        BaseButton,
        BaseInput,
        FormEmployee,
        PopupMessage,
        ToastMessage,
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
            if (list != 400) {
                this.employees = list;
                this.totalEmployee = list.length;
                this.showLoader = false;
                this.showOver = false;
            } else {
                this.openToast(4);
            }

            return list;
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
            try {
                this.showOver = true;

                let dataForm = await getEmployee(id);
                this.emitter.emit("openEditForm", dataForm);
            } catch (e) {
                console.error(e);
            }
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
         * Format ngày tháng
         * Created by VMHIEU 04/08/2022
         */
        formatGender(gender) {
            let value = "Nữ";

            try {
                if (gender) {
                    switch (gender) {
                        case 0:
                            value = "Nữ";
                            break;
                        case 1: 
                            value = "Nam";
                            break;
                        case 2: 
                            value = "Khác";
                            break;
                    }
                }
            } catch (error) {
                console.log(error);
            }

            return value;
        },
        /**
         * Refresh lại dữ liệu
         * CreatedBy VMHieu 08/08/2022
         */
        refresh() {
            this.showOver = true;
            this.showLoader = true;
            this.loadEmployees();
            this.openToast(3);
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
            }, 3000);
        },
        /**
         * Sự kiện ấn nút mũi tên phân trang
         */
        handleClickArrow(event) {
            this.$refs.pagingArrow.classList.toggle("up");
            this.paging = !this.paging;

            let pagingCombobox = this.$refs.pagingCombobox;
            console.log(event.clientX, event.clientY);
            pagingCombobox.style.left = (event.clientX - 184) + 'px';
            pagingCombobox.style.top = (event.clientY - 185) + 'px';
        },
        /**
         * Click chọn số bản ghi / trang
         */
        handlePagingList(event) {
            let menu = document.querySelectorAll(".paging-list__list"),
                item = event.currentTarget;

            if (menu) {
                menu.forEach(function (items) {
                    items.classList.remove("paging-selected");
                })

                item.classList.add('paging-selected');
                document.querySelector(".paging-input__input").value = item.innerHTML;
            }

            this.paging = false;
        }
    },
    created() {
        // Thực hiện lấy dữ liệu Employee
        try{
            let status  = this.loadEmployees();
            if(status != 404) {
                this.openToast(3);
            }
        } 
        catch (ex) {
            console.log(ex);
        }
        
        // Hiệu ứng tối màn hình và loader
        this.showOver = true;
        this.showLoader = true;
    },
    mounted() {
        setTimeout(() => {
            // Mặc định hiển thị ô paging-selected ở ô input chọn số bản ghi/trang
            let val = document.querySelector('.paging-input__input'),
                selected = document.querySelector('.paging-selected');

            val.value = selected.innerHTML;
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

.page-index,
.page-prev,
.page-next {
    cursor: pointer;
}

.input-paging {
    box-sizing: border-box;
    height: 30px;
    padding: 0;
}

.record-in-page {
    display: flex;
    min-height: 32px;
    min-width: 200px;
    border: 1px solid #babec5;
    border-radius: 2px;
    background-color: #fff;
    overflow: hidden;
    margin: 0 16px;
    position: relative;
    box-sizing: border-box;
}

.paging-input {
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
    width: calc(100% - 32px);
    align-items: center;
    padding: 0 0 0 10px;

}

.paging-input__input {
    border: none;
    font-size: 13px;
    padding-right: unset;
    text-overflow: ellipsis;
    background-color: transparent;
    display: flex;
    flex-grow: 1;
}

.paging-input__icon {
    width: 32px;
    height: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
}

.paging-input__icon:hover{
    background-color: #e0e0e0;
}

.up {
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
}

.down {
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
}

.paging-list{
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    z-index: 1000;
}

.paging-list__list {
    flex: 1;
    padding: 0 14px 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    min-width: 176px;
    min-height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.paging-list__list:hover{
    color: #35bf22;
    background-color: #ebedf0;
}

.paging-selected{
    background-color: #2ca01c !important;
    color: #fff !important;
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
    transition: all .3s ;
}

.form-leave-active,
.over-leave-active,
.popup-leave-active {
    transition: all 0s ;
}

.toast-enter-active,
.toast-leave-active {
    transition: all .8s ;
}
</style>
