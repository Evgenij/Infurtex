<template>
    <list-tests :tests="tests"></list-tests>
</template>

<script>
    import ListTests from "../../../components/Tests/ListTests";
    import tests from "../../../mocks/tests";

    export default {
        name: "moderator-tests",
        components: {ListTests},
        data:() => ({
            notifications: [
                {
                    count: 0
                },
                {
                    count: 2
                }
            ],
            tests: tests
        }),

    }
</script>

<style lang="scss">
    @import '../../../../sass/variables';

    .root{
        background: $background;
    }

    .content{
        width: 1040px;

        &__header{
            z-index: 1000;
            @include default-shadow;
        }
    }
</style>
