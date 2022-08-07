<template>
    <button :class="str">{{ text }}</button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        text: String,
        str: String
    }
}
</script>

<style scoped>

</style>
