<template>
    <BaseToastMessage id="iconSuccess" v-show="showToast == 1">
        <div>Thêm dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconSuccess" v-show="showToast == 6">
        <div>Sửa dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconSuccess" v-show="showToast == 2">
        <div>Xóa dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconSuccess" v-show="showToast == 3">
        <div>Tải dữ liệu thành công</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconFail" v-show="showToast == 4">
        <div>Tải dữ liệu thất bại</div>
    </BaseToastMessage>
    <BaseToastMessage id="iconFail" v-show="showToast == 5">
        <div>Thao tác thất bại</div>
    </BaseToastMessage>
</template>
<script>
import BaseToastMessage from '@/base/ToastMessage/BaseToastMessage.vue';

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