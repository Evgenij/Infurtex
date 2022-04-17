<template>
    <section class="first-click-block flex flex-col space-y-4">
        <header class="flex items-center justify-center text-lg font-medium border-b border-slate-100 pb-4">
            <div class="p-2 px-3 rounded-lg flex items-center justify-center bg-yellow-500 mr-2
                shadow-lg shadow-yellow-500/50">
                <i class="bx bxs-pointer text-white text-sm"></i>
            </div>
            Тест первого клика
        </header>
        <div class="first-click-block__instruction">
            <h2 class="font-medium text-base">Инструкция</h2>
            <vs-input primary
                      v-model="textInstruction"
                      placeholder="Что нужно сделать в тесте ..."
                      class="w-full mt-2">
            </vs-input>
        </div>
        <div class="first-click-block__files">
            <h2 class="font-medium text-base mb-2">Дизайн</h2>
            <file-loader :typeFileLoader="typeFL.Single"></file-loader>
        </div>
        <div class="first-click-block__questions">
            <h2 class="font-medium text-base mb-2">Вопросы</h2>
            <section-questions :questions="questions"
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

export default {
    name: "FirstClick",
    components: {FileLoader, SectionQuestions},
    data: ()=>({
        textInstruction: '',
        questions: [],
        typeFL: typeFileLoader.typeFileLoader
    }),
    methods: {
        addQuestionBlock(newQuestion){
            this.questions.push(newQuestion)
        },
        removeQuestionBlock(idRemovingQuestion){
            //console.log(idRemovingQuestion)
            this.questions = this.questions.filter(el => el.id !== idRemovingQuestion)
            //console.log(this.questions)
        }
    }
}
</script>

<style scoped>

</style>
