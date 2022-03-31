<template>
    <section class="col-span-2">
        <component :is="setTypeTest"/>
    </section>
</template>

<script>
import type from '../../../../../enums'
import CheckboxQuestion from "./Questions/TypeQuestions/CheckboxQuestion";

export default {
    name: "SectionTestType",
    data: ()=>({
        testType: type.typeTest
    }),
    props: {
        typeTest: {
            type: Number
        }
    },
    computed: {
        setTypeTest(){
            let nameTypeTestComponent = ''
            if(this.typeTest === type.typeTest.FirstClick) {
                nameTypeTestComponent = 'FirstClick'
            } else if (this.typeTest === type.typeTest.Like){
                //nameTypeTestComponent = 'FirstClick'
            }
            return () => import(`./TypeTests/${nameTypeTestComponent}`)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
