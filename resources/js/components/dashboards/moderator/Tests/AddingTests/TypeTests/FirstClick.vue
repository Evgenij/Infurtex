<template>
    <section class="first-click-block flex flex-col space-y-4">
        <header class="flex items-center justify-center text-lg font-medium border-b border-slate-100 pb-4">
            <div class="p-2 px-3 rounded-lg flex items-center justify-center bg-yellow-500 mr-3
                shadow-lg shadow-yellow-500/50">
                <i class="bx bxs-pointer text-white text-sm"></i>
            </div>
            Тест первого клика
        </header>
        <div class="first-click-block__instruction">
            <h2 class="font-medium text-base">Инструкция</h2>
            <vs-input primary
                      v-model="dataTest.instruction"
                      placeholder="Что нужно сделать в тесте ..."
                      class="w-full mt-2">
            </vs-input>
        </div>
        <div class="first-click-block__files">
            <h2 class="font-medium text-base mb-2">Дизайн</h2>
			<single-file-loader></single-file-loader>
<!--            <file-loader :typeFileLoader="typeFL.Single"></file-loader>-->
        </div>
        <div class="first-click-block__questions">
            <h2 class="font-medium text-base mb-2">Вопросы</h2>
            <section-questions :questions="dataTest.questions"
							   @add-question-block="addQuestionBlock"
                               @remove-question-block="removeQuestionBlock">
            </section-questions>
        </div>
    </section>
</template>

<script>
import SectionQuestions from "../Questions/SectionQuestions";
import FileLoader from "../../FileLoader/FileLoader";
import typeFileLoader from "../../../../../../enums"
import SingleFileLoader from "../../FileLoader/TypesFileLoader/SingleFileLoader";

export default {
    name: "FirstClick",
    components: {SingleFileLoader, FileLoader, SectionQuestions},
    data: ()=>({
        textInstruction: '',
        typeFL: typeFileLoader.typeFileLoader
    }),
	props: {
    	dataTest: Object
	},
    methods: {
        addQuestionBlock(newQuestion){
            this.dataTest.questions.push(newQuestion)
        },
        removeQuestionBlock(idRemovingQuestion){
            //console.log(idRemovingQuestion)
			this.dataTest.questions = this.dataTest.questions.filter(el => el.id !== idRemovingQuestion)
            //console.log(this.questions)
        }
    },
	watch: {
		textInstruction(){
			this.$parent.$emit('changeInstruction', this.textInstruction)
		}
	}
}
</script>

<style scoped>

</style>
