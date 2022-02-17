<template>
    <div class="block-notification">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "block-notification"
    }
</script>

<style lang="scss" scoped>
    @import './resources/sass/variables';

    .block-notification{
        padding: 3px 8px;
        margin-left: 10px;
        background: $primary;
        color: white;
        border-radius: 4px;
    }
</style>
