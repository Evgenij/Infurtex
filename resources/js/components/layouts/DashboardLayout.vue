<template>
    <router-view></router-view>
</template>

<script>
    import store from "../../store/store";

	export default {
        name: "DashboardLayout",
		mounted() {
			store.dispatch("getData")
		}
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
