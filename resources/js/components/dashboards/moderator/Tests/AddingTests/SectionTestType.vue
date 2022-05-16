<template>
    <section class="col-span-2">
        <div class="buttons flex justify-between mb-4">
            <vs-button flat dark @click="resetTypeTest">
                <i class="bx bx-left-arrow-alt left"></i>
                 назад</vs-button>
            <vs-button class="w-max" primary @click="next">
                продолжить
                <i class="bx bx-chevrons-right text-lg right"></i>
            </vs-button>
        </div>
        <component :is="setTypeTest" @add-question-block="addQuestionBlock" :dataTest="dataTest"/>
    </section>
</template>

<script>
import type from '../../../../../enums'

export default {
    name: "SectionTestType",
    data: ()=>({
        testType: type.typeTest
    }),
    props: {
        dataTest: {
            type: Object
        }
    },
    methods:{
        resetTypeTest() {
            this.$emit('reset-type-test')
        },
        next() {
            this.$emit('next-step')
        },
		addQuestionBlock(newQuestion) {
			this.$parent.$emit('add-question-block', newQuestion)
		}
    },
    computed: {
        setTypeTest(){
            let nameTypeTestComponent = ''
            if(this.dataTest.type === type.typeTest.FirstClick) {
                nameTypeTestComponent = 'FirstClick'
            } else if (this.dataTest.type === type.typeTest.OverallImpression){
                nameTypeTestComponent = 'OverallImpression'
            } else if (this.dataTest.type === type.typeTest.Like){
                nameTypeTestComponent = 'Like'
            } else if (this.dataTest.type === type.typeTest.Navigation){
                nameTypeTestComponent = 'Navigation'
            } else if (this.dataTest.type === type.typeTest.FiveSeconds){
                nameTypeTestComponent = 'FiveSeconds'
            }
            return () => import(`./TypeTests/${nameTypeTestComponent}`)
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
