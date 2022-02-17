<template>
    <div class="flex flex-col">
        <test v-for="(test, index) in tests"
              :name="test.name" :type="test.type" :time="test.time"
              :cost="test.cost" :owner-name="test.nameOwner" :owner-type="test.typeOwner"
              :date="test.date" :state="test.state" :key="index"></test>
    </div>
</template>

<script>
    import Test from "./Test";
    import tests_respondents from '../../../mocks/tests_respondents'

    export default {
        name: "respondent-tests",
        components: {Test},
        data: ()=> ({
            tests: tests_respondents
        }),
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
</style>
