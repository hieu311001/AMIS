<template>
    <div class="content-top">
        <div class="top-left">
            <div class="top-left__logo icon"></div>
            <div class="top-left__combobox">
                <div class="combobox-text">CÔNG TY CỔ PHẦN MISA</div>
                <div class="combobox_arrow "></div>
            </div>
            <div class="top-left__btn">
                <div class="btn-dot"></div>
                <div class="btn-text">DC-01</div>
            </div>
        </div>
        <div class="top-right">
            <div class="top-right__download">
                <div class="icon icon-download"></div>
            </div>
            <div class="top-right__input">
                <BaseInput 
                Class="ms-input"
                inputClass="input-search" 
                placeholder="Nhập từ khóa tìm kiếm" 
                >
                    <div class="input-search__icon"></div>
                </BaseInput>
            </div>
            <div class="top-right__extend top-icon">
                <div class="icon icon-top icon-extend"></div>
            </div>
            <div class="top-right__setting top-icon">
                <div class="icon icon-top icon-setting"></div>
            </div>
            <div class="top-right__chat top-icon">
                <div class="icon icon-top icon-chat"></div>
            </div>
            <div class="top-right__help top-icon">
                <div class="icon icon-top icon-help"></div>
                <div class="icon-text"></div>
            </div>
            <div class="top-right__notify top-icon">
                <div class="icon icon-top icon-notify"></div>
            </div>
            <div class="top-right__account">
                <div class="account-avatar"></div>
                <div class="account-name">Vũ Minh Hiếu</div>
                <div class="account-arrow"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from "../base/Input/BaseInput.vue";

export default {
    name: 'ContentArea',
    props: {

    },
    components: {
        BaseInput
    }
}
</script>

<style scoped>
/* Content-top */
.content-top {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.top-left {
    display: flex;
    align-items: center;
}

.top-left__logo {
    background: url('../assets/Sprites.5c668001.png') no-repeat -843px -30px;
    margin: 0 10px;
    cursor: pointer;
}

.top-left__combobox {
    padding-left: 10px;
    display: flex;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
}

.combobox-text{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width:1366px) {
    .combobox-text{
        max-width: 200px;
    }
}


@media (max-width:1300px) {
    .combobox-text{
        max-width: 140px;
    }
}


.combobox_arrow {
    background: url('../assets/Sprites.5c668001.png') no-repeat -80px -360px;
    width: 14px;
    height: 14px;
    min-width: 14px;
    min-height: 14px;
    margin: 0 10px;
    transform: rotate(90deg);
}

.top-left__btn {
    display: flex;
    align-items: center;
    margin: 0 10px 0 15px;
    padding: 0 12px;
    border: 1px solid #ebedf0;
    border-radius: 40px;
    height: 30px;
}

.btn-dot {
    width: 6px;
    height: 6px;
    background-color: #4ea344;
    border-radius: 50%;
}

.btn-text {
    padding-left: 7px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all .2s ease;
    color: #111;
}

.top-right {
    display: flex;
    align-items: center;
}

.top-right__download {
    margin-right: 15px;
    padding-right: 10px;
    cursor: pointer;
}

.top-right__input {
    background: #fff;
    color: #111;
    margin-right: 20px;
    width: 200px;
    box-sizing: border-box;
}

.input-search input {
    width: 200px;
}

.top-icon {
    position: relative;
    height: 48px;
    width: 44px;
    display: flex;
    align-items: center;
}

.icon-top{
    cursor: pointer;
    margin: 0 10px;
}

.top-right__account{
    margin-right: 20px;
    padding: 0 16px;
    display: flex;
    align-items: center;
}

.account-avatar{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 6px;
    border-radius: 15px;
    border: 1px solid #e2e2e2;
}

.account-name{
    margin-right: 8px;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 0;
}

.account-arrow{
    background: url('../assets/Sprites.5c668001.png') no-repeat -1076px -32px;
    width: 14px;
    height: 14px;
    cursor: pointer;
}

</style>