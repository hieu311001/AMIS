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
    <template v-slot:slotText>{{ msg }}</template>
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
            }
        }
    },
    methods: {
        // Phát sự kiện ấn nút close
        handleClose() {
            this.emitter.emit("closePopup", this.PopupMode.Close);
        }, 
        // Phát sự kiện ấn nút cancel
        handleCancel(){
            this.emitter.emit("cancelPopup", this.PopupMode.Cancel)
        },
        // Phát sự kiện ấn nut save
        handleSave() {
            this.emitter.emit("closePopup", this.PopupMode.Save);
        },
        // Phát sự kiện ấn nut cất
        handleStore() {
            this.emitter.emit("storePopup", this.PopupMode.Store);
        }
    },
    mounted() {
        setTimeout(() => {
            // Bắt sự kiện ấn nút xóa
            this.emitter.on("openPopupDelete", (code) => {
                this.msg = `Bạn có thực sự muốn xóa Nhân viên <${code}> không?`;
            })
            // Bắt sự kiện ấn nút validate form 
            this.emitter.on("openPopupError", (data) => {
                this.msg = data[0];
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
</style>
