<template>
<div class="layout--main">
    <TheMenu />
    <TheContent />
</div>
</template>

<script>
import TheContent from "@/component/layout/TheContent.vue";
import TheMenu from "@/component/layout/TheMenu.vue";

export default {
    name: "App",
    components: {
        TheMenu,
        TheContent
    },
};
</script>

<style scoped>
.layout--main {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;
    font-size: 13px;
    min-width: 1024px;
    min-height: 768px;
}
</style>

<style>
@import url(./css/main.css);
</style>
