<template>
    <list-tests :tests="this.tests"></list-tests>
</template>

<script>
    import ListTests from "./ListTests";
    import tests from "../../../../mocks/tests";

    export default {
        name: "moderator-tests",
        components: {
            ListTests
        },
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
    @import '../../../../../sass/variables';

</style>
