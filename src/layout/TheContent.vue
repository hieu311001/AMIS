<template>
<div class="content-area">
    <TheContentTop />
    <TheContentMain />
</div>
</template>

<script>
import TheContentMain from './TheContentMain.vue';
import TheContentTop from './TheContentTop.vue';

export default {
    name: 'ContentArea',
    props: {

    },
    components: {
        TheContentMain,
        TheContentTop
    }
}
</script>

<style scoped>
.content-area {
    flex: 1;
    min-height: 0;
    min-width: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
}
</style>
