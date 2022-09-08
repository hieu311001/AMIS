<template>
<div>
    <div class="content-main">
        <div class="main-header">
            <div class="header-left">Nhân viên</div>
            <div class="header-right">
                <BaseButton class="m-button ToolbarEmployee" text="Thêm mới nhân viên" @click="handleOpenForm" />
            </div>
        </div>
        <div class="main-body">
            <div class="main-body__filter">
                <div class="body-deleteAll">
                    <button class="btn-deleteAll">
                        <div class="btn-deleteAll__text">
                            Thực hiện hàng loạt
                        </div>
                        <div class="btn-deleteAll__icon icon icon-department__arrow"></div>
                    </button>
                    <div class="list-option" v-if="deleteAll">
                        <div class="option-deleteAll">Xóa</div>
                    </div>
                </div>
                <div class="body-filter">
                    <div class="ms-input filter-input">
                        <div class="ms-input filter-input">
                            <input id="input-search" type="text" @change="handleSearchChange" placeholder="Tìm kiếm theo tên, mã nhân viên" class="input-search filter-input__search">
                            <div class="input-search__icon"></div>
                        </div>
                    </div>
                    <div class="btn-refresh">
                        <div class="icon-refresh icon" @click="refresh"></div>
                    </div>
                </div>
            </div>
            <div class="main-body__table" id="EmployeeTable">
                <table class="employee-table">
                    <thead>
                        <tr class="table-tr">
                            <th class="table-th space-left"></th>
                            <th class="table-th checkbox">
                                <input type="checkbox" class="input__checkbox" id="checkboxAll" @click="handleCheckboxAll">
                            </th>
                            <th class="table-th">MÃ NHÂN VIÊN</th>
                            <th class="table-th">TÊN NHÂN VIÊN</th>
                            <th class="table-th">GIỚI TÍNH</th>
                            <th class="table-th align-center">NGÀY SINH</th>
                            <th class="table-th">SỐ CMND</th>
                            <th class="table-th">CHỨC DANH</th>
                            <th class="table-th">TÊN ĐƠN VỊ</th>
                            <th class="table-th">SỐ TÀI KHOẢN</th>
                            <th class="table-th">TÊN NGÂN HÀNG</th>
                            <th class="table-th">CHI NHÁNH TK NGÂN HÀNG</th>
                            <th class="table-th task">CHỨC NĂNG</th>
                            <th class="table-th space-right"></th>
                        </tr>
                    </thead>
                    <tbody v-show="showResult">
                        <tr v-for="emp in employees" :key="emp.EmployeeID" class="table-tr selectedRow" @dblclick="handleEdit(emp.EmployeeID)">
                            <td class="table-td space-left"></td>
                            <td class="table-td checkbox" @dblclick.stop="handle">
                                <input type="checkbox" name="selectedRecord" class="input__checkbox" @click="handleCheckbox" @click.stop="">
                            </td>
                            <td class="table-td">{{ emp.EmployeeCode }}</td>
                            <td class="table-td">{{ emp.EmployeeName }}</td>
                            <td class="table-td">{{ formatGender(emp.Gender) }}</td>
                            <td class="table-td align-center">{{ formatDate(emp.DateOfBirth) }}</td>
                            <td class="table-td">{{ emp.IdentityNumber }}</td>
                            <td class="table-td">{{ emp.PositionName }}</td>
                            <td class="table-td">{{ emp.DepartmentName }}</td>
                            <td class="table-td">{{ emp.BankAccount }}</td>
                            <td class="table-td">{{ emp.BankName }}</td>
                            <td class="table-td">{{ emp.BankBranch }}</td>
                            <td class="table-td task" @dblclick.stop="handle">
                                <div>
                                    <button class="table-btn__edit" @click="handleEdit(emp.EmployeeID)">Sửa</button>
                                    <button class="table-btn__arrow">
                                        <div class="btn-arrow__icon" @click="handleOpenTask(emp.EmployeeID, emp.EmployeeCode)"></div>
                                    </button>
                                </div>
                            </td>
                            <td class="table-td space-right"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="main-body__paging" v-show="showResult">
                <div class="paging-left">Tổng số: <strong>{{ totalEmployee }}</strong> bản ghi</div>
                <div class="paging-right">
                    <div class="record-in-page">
                        <div class="paging-input">
                            <input type="text" class="paging-input__input" ref="pagingInput" disabled />
                        </div>
                        <div class="paging-input__icon" @click="handleClickArrow">
                            <transition>
                                <div class="icon icon-paging__arrow" ref="pagingArrow"></div>
                            </transition>
                        </div>
                    </div>
                    <div class="page-number">
                        <div class="page-number__number">
                            <el-pagination :page-size="pageSize" :pager-count="5" :current-page="pageNumber" @update:current-page="handleChangePage" layout="prev, pager, next" :total="totalPage" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-unresult" v-show="!showResult">
                <div class="nodata">
                    <img src="@/assets/icon/bg_report_nodata.76e50bd8.svg" class="nodata-img" />
                    <br />
                    <span>Không có dữ liệu</span>
                </div>
            </div>
        </div>
    </div>
    <div class="task-combobox" ref="taskCombobox" v-show="showOption">
        <div class="task-btn__clone" @click="handleClone">Nhân bản</div>
        <div class="task-btn__delete" @click="handleDelete">Xóa</div>
        <div class="task-btn__stop">Ngừng sử dụng</div>
    </div>

    <div class="paging-list" v-show="paging" ref="pagingCombobox">
        <div class="paging-list__list paging-list_10" @click="handlePagingList" value="10">10 bản ghi trên 1 trang</div>
        <div class="paging-list__list paging-list_20 paging-selected" @click="handlePagingList" value="20">20 bản ghi trên 1 trang</div>
        <div class="paging-list__list paging-list_30" @click="handlePagingList" value="30">30 bản ghi trên 1 trang</div>
        <div class="paging-list__list paging-list_50" @click="handlePagingList" value="50">50 bản ghi trên 1 trang</div>
        <div class="paging-list__list paging-list_100" @click="handlePagingList" value="100">100 bản ghi trên 1 trang</div>
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
</div>
</template>

<script>
import BaseButton from '@/component/base/Button/BaseButton.vue';
// import BaseInput from "@/component/base/Input/BaseInput.vue";
import FormEmployee from '@/component/view/FormEmployee.vue';
import PopupMessage from '@/component/view/PopupMessage.vue';
import ToastMessage from '@/component/view/ToastMessage.vue';
import {
    loadEmployees,
    filterEmployees
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
            employees: [],           // Đối tượng employee
            isShowForm: false,       // Ẩn hiện form
            showOver: false,         // Hiệu ứng tối màn hình
            showLoader: false,       // Hiệu ứng loading

            totalEmployee: 120,      // Tống số bản ghi
            dataForm: [],               
            showOption: false,
            employeeId: "",
            employeeCode: "",
            popup: 0,
            toast: 0,
            paging: false,
            pageNumber: 1,
            pageSize: "20",
            searchKeywords: "",
            totalPage: "",
            showResult: true,
            deleteAll: true,
        };
    },
    components: {
        BaseButton,
        //BaseInput,
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
            // Thực hiện nếu lấy dữ liệu thành công
            if (list == 400 || list == 0) {
                this.openToast(4);
            } else {
                this.employees = list;
                this.totalEmployee = list.length;
            }
            this.showLoader = false;
            this.showOver = false;

            return list;
        },
        /**
         * Lấy toàn bộ bản ghi Employee thực hiện tìm kiếm và phân trang
         * Created by VMHIEU 04/08/2022
         */
        async filterEmployees() {
            try{
                let list = await filterEmployees(this.searchKeywords, this.pageSize, this.pageNumber);

                // Thực hiện nếu lấy dữ liệu thành công
                if (list == 400 || list == 0) {
                    this.openToast(4);
                    this.showResult = false;
                } else {
                    this.openToast(3);
                    this.employees = list["Data"];
                    this.totalEmployee = list["TotalCount"];
                    this.totalPage = Math.round(this.totalEmployee * 10 / parseInt(this.pageSize));

                    if(this.totalEmployee == 0) {
                        this.showResult = false;
                    } else {
                        this.showResult = true;
                    }
                }

                return list;
            } catch (ex) {
                console.error(ex);
            }
        },
        /**
         * Mở Form Thông Tin Nhân Viên
         * Created by VMHIEU 04/08/2022
         */
        handleOpenForm() {
            this.showOver = true;

            this.emitter.emit("openAddForm");
            this.showOption = false;
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

                // Lấy id của nhân viên cần sửa gửi xuống component Form
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
            try{
                let list = this.filterEmployees();

                this.employees = list;
            } catch(ex) {
                console.log(ex);
            }         
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
         * Format giới tính
         * Created by VMHIEU 04/08/2022
         */
        formatGender(gender) {
            let value = "";

            try {
                if (gender != null) {
                    value = "Nữ";
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
            // Hiển thị hiệu ứng loading và tối màn hình
            this.showOver = true;
            this.showLoader = true;

            // Đặt lại các điều kiện phân trang và tìm kiếm
            this.searchKeywords = "";
            this.pageNumber = 1;
            this.pageSize = "20";

            // Đặt lại ô input search về rỗng
            this.$el.querySelector("#input-search").value = "";

            // Đặt lại pageSize về mặc định là 2022
            this.$el.querySelectorAll(".paging-list__list").forEach((item) => {
                item.classList.remove('paging-selected');
                if (item.getAttribute("value") == "20") {
                    item.classList.add('paging-selected');
                    this.$el.querySelector(".paging-input__input").value = item.innerHTML;
                }
            })

            // Load lại trang và đưa ra thông báo
            this.filterEmployees();

            // Ẩn hiệu ứng loading và tối màn hình
            setTimeout(() => {
                this.showOver = false;
                this.showLoader = false;
            }, 500);        
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

            // Lấy tọa độ nút ấn để hiển thị combobox
            let taskOption = this.$refs.taskCombobox;

            taskOption.style.left = (event.clientX + 10) + 'px';
            taskOption.style.top = (event.clientY + 12) + 'px';
        },
        /**
         * Click vào nút xóa
         * CreatedBy VMHieu 08/08/2022
         */
        handleDelete() {
            this.emitter.emit("openPopupDelete", this.employeeCode);
            this.popup = 1;

            this.showOver = true;
            this.showOption = false;
        },
        /**
         * Mở form nhân bản 
         * CreatedBy VMHieu 08/09/2022
         */
        async handleClone() {
            try {
                this.showOver = true;
                this.showOption = false;

                // Lấy id của nhân viên cần sửa gửi xuống component Form
                let dataForm = await getEmployee(this.employeeId);
                this.emitter.emit("openCloneForm", dataForm);
            } catch (e) {
                console.error(e);
            }
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

            // Lấy tọa độ nút ấn để hiển thị combobox
            let pagingCombobox = this.$refs.pagingCombobox;

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

                // Style cho số bản ghi được chọn
                item.classList.add('paging-selected');
                this.$el.querySelector(".paging-input__input").value = item.innerHTML;

                this.pageSize = item.getAttribute("value");

                // Tải lại trang khi thay đổi số bản ghi
                this.filterEmployees();
            }

            this.paging = false;
        },
        /**
         * Lấy page-number khi thay đổi page
         */
        handleChangePage(val) {
            this.pageNumber = val;
            this.filterEmployees();
        },
        /**
         * Lấy keyword để search
         */
        handleSearchChange(event) {
            let item = event.currentTarget;

            this.searchKeywords = item.value;
            this.filterEmployees();
        },
        /**
         * Sự kiện chọn tất cả bản ghi qua ô checkboxAll
         * CreatedBy VMHieu 08/09/2022
         */ 
         handleCheckboxAll(event) {
            // Xét tbody của bảng:
            let tbody = event.target.closest("table").childNodes[1];

            // Xét tất cả các checkbox trừ checkAll:
            let records = tbody.querySelectorAll("[name='selectedRecord']");

            // Chọn tất cả các bản ghi, hiển thị nút xóa hàng loạt
            if (event.target.checked) {
                records.forEach((record) => {
                    record.checked = event.target.checked;
                    record.closest("tr").classList.add("selected-row");
                })
            }
            // Bỏ chọn tất cả các bản ghi, ẩn nút xóa hàng loạt
            else {
                records.forEach((record) => {
                    record.checked = event.target.checked;
                    record.closest("tr").classList.remove("selected-row");
                })
            }

            records.forEach((record) => {
                // Tick / Untick checkbox theo checkAll:
                record.checked = event.target.checked;

                // Đánh dấu bản ghi nếu checkAll == true:
                if (event.target.checked) {
                    record.closest("tr").classList.add("selected-row");
                }

                // Bỏ đánh dấu bản ghi nếu checkAll == false:
                else {
                    record.closest("tr").classList.remove("selected-row");
                }
            })
        },
        /**
         * Sự kiện chọn 1 bản ghi qua ô checkbox 
         * CreatedBy VMHieu 08/09/2022
         */
        handleCheckbox(event) {
            // Ngăn sự kiện lan lên parent:
            event.stopPropagation();

            // Xét bảng hiện tại:
            let table = event.target.closest("table");

            // Xét tất cả các checkbox:
            let records = table.querySelectorAll("[name='selectedRecord']");

            if (event.target.checked) {
                // Đánh dấu bản ghi:
                event.target.closest("tr").classList.add("selected-row");

                // Đặt checkAll bằng true:
                table.querySelector("#checkboxAll").checked = true;

                // Bỏ checkAll nếu có một checkbox chưa check:
                for (var record of records) {
                    if (!record.checked) {
                        table.querySelector("#checkboxAll").checked = false;
                        break;
                    }
                }
            }
            else {
                // Bỏ đánh dấu bản ghi:
                event.target.closest("tr").classList.remove("selected-row");

                // Đặt checkAll bằng false:
                table.querySelector("#checkboxAll").checked = false;
            }
        }
    },
    created(){
        // Bật hiệu ứng loading và tối màn hình
        this.showLoader = true;
        this.showOver = true;
        setTimeout(() => {
            this.showOver = false;
            this.showLoader = false;
        }, 1500);
    },
    mounted() {
        setTimeout(() => {
            // Thực hiện lấy dữ liệu Employee
            try {
                this.filterEmployees();
            } catch (ex) {
                console.log(ex);
            }

            // Mặc định hiển thị ô paging-selected ở ô input chọn số bản ghi/trang
            let val = this.$el.querySelector('.paging-input__input'),
                selected = this.$el.querySelector('.paging-selected');

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
    justify-content: space-between;
    background-color: #fff;
    padding: 16px;
    padding-bottom: 32px;
}

.body-deleteAll{

}

.body-filter {
    display: flex;
    align-items: center;
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
    max-height: calc(100vh - 260px);
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

.paging-input__icon:hover {
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

.paging-list {
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

.paging-list__list:hover {
    color: #35bf22;
    background-color: #ebedf0;
}

.paging-selected {
    background-color: #2ca01c !important;
    color: #fff !important;
}

.btn-deleteAll{
    display: flex;
    align-items: center;
    border: 2px solid #3b3c3f;
    border-radius: 30px;
    height: 36px;
    padding: 6px 16px;
    cursor: pointer;
    background-color: #fff;
    position: relative;
}

.btn-deleteAll:hover, .btn-deleteAll:active{
    background-color: #ebedf0;
}

.btn-deleteAll__text{
    font-weight: 600;
    position: relative;
    color: inherit;
    display: inline-block;
    transition: all .25s ease;
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
    padding-right: 4px;
}

.option-deleteAll{
    height: 36px;
    position: absolute;
    border: 1px solid #fff;
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
    transition: all .3s;
}

.form-leave-active,
.over-leave-active,
.popup-leave-active {
    transition: all 0s;
}

.toast-enter-active,
.toast-leave-active {
    transition: all .8s;
}
</style>
