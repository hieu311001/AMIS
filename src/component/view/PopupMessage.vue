<template>
<BasePopup iconId="iconWarning" v-if="showPopup == 1">
    <template v-slot:slotText>{{ msg }}</template>
    <div class="btn btn-warning">
        <BaseButton text="Không" class="ms-button w-600" @click="handleClose"/>
        <BaseButton text="Đồng Ý" class="m-button w-600" @click="handleSave"/>
    </div>
</BasePopup>

<BasePopup iconId="iconWarning" v-if="showPopup == 2">
    <template v-slot:slotText>{{ msg }}</template>
    <div class="btn btn-required">
        <BaseButton text="Đồng Ý" class="m-button w-600"  @click="handleClose"/>
    </div>
</BasePopup>

<BasePopup iconId="iconError" v-if="showPopup == 3">
    <template v-slot:slotText>
        <div class="error-validate" v-if="empCode">Mã nhân viên không được để trống</div>
        <div class="error-validate" v-if="empName">Tên nhân viên không được để trống</div>
        <div class="error-validate" v-if="department">Đơn vị không được để trống</div>
        <div class="error-validate" v-if="empDate">Thời gian vượt quá thời điểm hiện tại</div>
        <div class="error-validate" v-if="empEmail">Email không đúng định dạng</div>
        <div class="error-validate" v-if="empUnique">Mã nhân viên đã tồn tại trong hệ thống</div>
    </template>
    <div class="btn btn-error">
        <BaseButton text="Đồng Ý" class="m-button w-600"  @click="handleCancel"/>
    </div>
</BasePopup>

<BasePopup iconId="iconQuestion" v-if="showPopup == 4">
    <template v-slot:slotText>{{ msg }}</template>
    <div class="btn btn-question">
        <BaseButton text="Hủy" class="ms-button w-600"  @click="handleCancel"/>
        <div class="btn-right">
            <BaseButton text="Không" class="ms-button w-600"  @click="handleClose"/>
            <BaseButton text="Có" class="m-button w-600" style="margin-left: 8px"  @click="handleStore"/>
        </div>
    </div>
</BasePopup>
</template>

<script>
import BasePopup from '@/component/base/popup/BasePopup.vue';
import BaseButton from '@/component/base/Button/BaseButton.vue';
export default {
    name: 'PopupMessage',
    components: {
        BasePopup,
        BaseButton,
    },
    props: {
        showPopup: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            msg: "",
            PopupMode: {
                Close: 1,
                Cancel: 2,
                Save: 3, 
                Store: 4,
            },
            empCode: false, // Mã nhân viên
            empName: false, // Tên nhân viên
            department: false, // Đơn vị
            empDate: false, // Ngày tháng
            empEmail: false, // Email
            empUnique: false, // Check trùng mã nhân viên
        }
    },
    methods: {
        // Reset lại trạng thái của validate error
        resetValidateError(){
            this.empCode = false;
            this.empName = false;
            this.department = false;
            this.empDate = false;
            this.empEmail = false;
            this.empUnique = false;
        },
        // Phát sự kiện ấn nút close
        handleClose() {
            this.emitter.emit("closePopup", this.PopupMode.Close);
            this.resetValidateError();
        }, 
        // Phát sự kiện ấn nút cancel
        handleCancel(){
            this.emitter.emit("cancelPopup", this.PopupMode.Cancel)
            this.resetValidateError();
        },
        // Phát sự kiện ấn nut save
        handleSave() {
            this.emitter.emit("closePopup", this.PopupMode.Save);
            this.resetValidateError();
        },
        // Phát sự kiện ấn nut cất
        handleStore() {
            this.emitter.emit("storePopup", this.PopupMode.Store);
            this.resetValidateError();
        }
    },
    mounted() {
        setTimeout(() => {
            // Bắt sự kiện ấn nút xóa
            this.emitter.on("openPopupDelete", (code) => {
                this.msg = `Bạn có thực sự muốn xóa Nhân viên <${code}> không?`;
            })
            // Bắt sự kiện ấn nút xóa nhiều
            this.emitter.on("openMultipleDelete", () => {
                this.msg = `Bạn có thực sự muốn xóa những nhân viên đã chọn hay không?`;
            })
            // Bắt sự kiện ấn nút validate form 
            this.emitter.on("openPopupError", (data) => {
                for(let i = 0; i < data.length; i++){
                    switch(data[i]){
                        case 1:
                            this.empCode = true;
                            break;
                        case 2:
                            this.empName = true;
                            break;
                        case 3: 
                            this.department = true; 
                            break;
                        case 4: 
                            this.empDate = true; 
                            break;
                        case 5: 
                            this.empEmail = true; 
                            break;
                        case 6: 
                            this.empUnique = true; 
                            break;
                    }
                }
            })
            // Bắt sự kiện ấn nút close form 
            this.emitter.on("openPopupWarning", () => {
                this.msg = "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?";
            })
        }, 1);
    }
}
</script>

<style scoped>
.btn {
    display: flex;
}

.btn-error {
    justify-content: center;
}

.btn-warning,
.btn-question {
    justify-content: space-between;
}

.btn-required {
    justify-content: flex-end;
}

.error-validate{
    padding: 4px 0;
}
</style>
