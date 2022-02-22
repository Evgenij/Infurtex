<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "DashboardLayout",
    }
</script>


<style lang="scss">
    @import '../../../sass/variables';

    .content{
        width: 1040px;
        margin: 0 auto;

        &__header{
            z-index: 1000;
            @include default-shadow;
        }
    }
</style>
