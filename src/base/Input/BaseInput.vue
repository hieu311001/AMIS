<template>
<div :class="Class">
    <input :id="id" :type="type" :value="modalValue" :placeholder="placeholder" :class="inputClass" :ref="inputRef">
    <slot></slot>
</div>
</template>

<script>

export default {
    name: 'BaseInput',
    props: {
        id: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        modalValue: {
            type: [String, Number],
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        inputClass: {
            type: String,
            default: ""
        },
        Class: {
            type: String,
            default: ""
        },
        inputRef: {
            type: String,
            default: ""
        }
    }
}


</script>

<style scoped>
/* .ms-input {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
}

input {
    height: 30px;
    padding: 0 12px 0 10px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #ebedf0 !important;
    outline: none;
}

input:hover{
    outline: 1px solid #e2e2e2;
}

input:focus{
    border: 1px solid #ebedf0 !important;
}

input::placeholder{
    font-style: italic;
    font-size: 11px;
}

#icon{
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    position: absolute;
    left: auto;
    top: 6px;
    right: 12px;
    cursor: pointer;
    background: url(../assets/Sprites.5c668001.png) no-repeat ;
} */

</style>
