<template>
    <BaseToastMessage id="iconSuccess" v-if="showToast == 1">
        <div>{{message}}</div>
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
            message:"Thêm thành công"
        }
    }
}
</script>