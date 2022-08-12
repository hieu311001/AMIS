<template>
<div class="content-area">
    <TheHeader />
    <router-view></router-view>
</div>
</template>

<script>
// import EmployeePage from './Employee/EmployeePage.vue';
import TheHeader from './TheHeader.vue';

export default {
    name: 'ContentArea',
    props: {

    },
    components: {
        // EmployeePage,
        TheHeader,
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
