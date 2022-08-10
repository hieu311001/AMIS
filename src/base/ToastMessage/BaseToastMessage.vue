<template>
<div class="toast-container">
    <div class="toast">
        <div class="toast-icon" :id="id"></div>
        <div class="toast-content">
            <slot></slot>
        </div>
        <div class="toast-close"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "BaseToastMessage",
    props: {
        id: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>
.toast-container{
    position: fixed;
    top: 25%;
    right:0;
    z-index: 10000;
}

.toast {
    display: flex;
    align-items: center;
    height: 48px;
    width: 250px;
    border-radius: 4px;
    color: #000000;
    box-shadow: rgba(0, 0, 0, 1.6) 0px 3px 6px;
    margin: 0 4px 4px 0;
    border: none;
    padding-left: 16px;
    background-color: #FFF;
}

.toast-icon{
    color: #ffffff;
    border-radius: 50px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content:center;
    align-items: center;
}

.toast-content{
    width: 178px;
    padding-left: 12px;
    font-size: 13px;
    font-weight: 600;
}

.toast-close {
    background: url(../../assets/Sprites.5c668001.png) no-repeat -1856px -146px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>
