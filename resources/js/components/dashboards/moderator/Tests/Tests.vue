<template>
    <list-tests :tests="getTests"></list-tests>
</template>

<script>
    import ListTests from "./ListTests";
    import tests from "../../../../mocks/tests";
    import {mapGetters, mapActions} from 'vuex'

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
		computed: mapGetters(['getTests']),
		methods: mapActions(['fetchTests']),
		mounted() {
			this.fetchTests()
		}
	}
</script>

<style lang="scss">
    @import '../../../../../sass/variables';

</style>
