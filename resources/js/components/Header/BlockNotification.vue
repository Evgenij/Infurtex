<template>
    <div class="block-notification rounded-full text-white font-medium ml-2 leading-none"
         :class="{'bg-red-500': color === 'red', 'bg-teal-500': color === 'primary'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "block-notification",
        props: {
            color: String
        }
    }
</script>

<style lang="scss" scoped>
    .block-notification{
        padding: 4px 6px;
        font-size: 12px;
    }
</style>
