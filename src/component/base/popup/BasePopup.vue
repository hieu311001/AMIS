<template>
<div class="popup">
    <div class="popup-container">
        <div class="popup-top">
            <div class="popup-icon" :id="iconId"></div>
            <div class="popup-text" >
                <slot name="slotText"></slot>
            </div>
        </div>
        <div class="popup-br"></div>
        <div class="popup-btn">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "BasePopup",
    props: {
        message: {
            type: String,
            default: ""
        },
        iconId: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>
.popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 444px;
    border-radius: 4px;
    background-color: #fff;
    z-index: 10001;
}

.popup-container {
    padding: 32px;
}

.popup-top {
    display: flex;
    align-items: center;
}

.popup-icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.popup-text{
    overflow: auto;
    max-height: 400px;
    margin-bottom: 24px;
    padding-left: 16px;
    padding-top: 12px;
}

.popup-br{
    height: 1px;
    background: #b8bcc3;
    margin-bottom: 20px; 
}

.popup-btn{
    position: relative;
    height: 36px;
}
</style>
