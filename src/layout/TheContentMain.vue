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
                <BaseInput 
                Class="ms-input filter-input"
                inputClass="input-search filter-input__search" 
                placeholder="Tìm kiếm theo tên, mã nhân viên" 
                >
                    <div class="input-search__icon"></div>
                </BaseInput>
            </div>
            <div class="btn-refresh">
                <div class="icon-refresh icon"></div>
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
                        <td class="task">
                            <div>
                                <button class="table-btn__edit" @click="handleEdit(emp.EmployeeId)">Sửa</button>
                                <button class="table-btn__arrow">
                                    <div class="btn-arrow__icon"></div>
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

<FormEmployee :showForm="isShowForm" @handleCloseForm="handleCloseForm" @resetTable="resetTable"/>
<div id="over" v-show="showOver"></div>
<div class="loader" v-show="showLoader"></div>
</template>

<script>
import BaseButton from '../base/Button/BaseButton.vue';
import BaseInput from "../base/Input/BaseInput.vue";
import FormEmployee from '../view/FormEmployee.vue';
import {
    loadEmployees
} from '@/utils/loadEmployees';
import {
    getEmployee
} from '../utils/getEmployee';

export default {
    name: "TheContentMain",
    props: {

    },
    data() {
        return {
            employees: [],
            isShowForm: false,
            showOver: true,
            showLoader: true,

            totalEmployee: 120,
            dataForm: [],
        };
    },
    components: {
        BaseButton,
        BaseInput,
        FormEmployee
    },
    methods: {
        /**
         * Lấy toàn bộ bản ghi Employee
         * Created by VMHIEU 04/08/2022
         */
        async loadEmployees() {
            let list = await loadEmployees();
            setTimeout(() => {
                this.showOver = false;
                this.showLoader = false;
            }, 2000);
            if (list != 404) {
                this.employees = list;
                this.showLoader = false;
                this.showOver = false;
            }
        },
        /**
         * Mở Form Thông Tin Nhân Viên
         * Created by VMHIEU 04/08/2022
         */
        handleOpenForm() {
            this.showOver = true;
            this.isShowForm = true;
        },
        /**
         * Đóng Form Thông Tin Nhân Viên
         * Created by VMHIEU 04/08/2022
         */
        handleCloseForm() {
            this.isShowForm = false;
            this.showOver = false;
        },
        /**
         * Mở Form Edit nhân viên
         * Created by VMHIEU 07/08/2022
         */
        async handleEdit(id) {
            this.isShowForm = true;
            this.showOver = true;
            
            let dataForm = await getEmployee(id);
            this.emitter.emit("openEditForm", dataForm);
        },
        resetTable(){
            this.loadEmployees();
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
        }

    },
    created() {
        // Thực hiện lấy dữ liệu Employee
        this.loadEmployees();
    },
    mouted() {
        
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
</style>
