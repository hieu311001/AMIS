<template>
<div class="toast-message">
    <BaseToastMessage id="iconSuccess" v-if="showToast == 1">
        <div>Thêm dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconSuccess" v-if="showToast == 6">
        <div>Sửa dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconSuccess" v-if="showToast == 2">
        <div>Xóa dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconSuccess" v-if="showToast == 3">
        <div>Tải dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconFail" v-if="showToast == 4">
        <div>Tải dữ liệu thất bại</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconFail" v-if="showToast == 5">
        <div>Thao tác thất bại</div>
    </BaseToastMessage>
</div>
</template>

<script>
import BaseToastMessage from '@/component/base/ToastMessage/BaseToastMessage.vue';

export default {
    name: "ToastMessage",
    components: {
        BaseToastMessage,
    },
    props: {
        showToast: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        setTimeout(() => {
            this.emitter.on("loadSuccessToast", () => {

            })
        }, 1);
    }
}
</script>
<style scoped>
.toast-message {
    transition: all 0.5s;
}
</style>
