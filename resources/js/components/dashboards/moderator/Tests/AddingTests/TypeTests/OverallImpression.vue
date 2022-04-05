<template>
    <div class="overall-impression-block flex flex-col space-y-4">
        <div class="first-click-block__instruction">
            <h2 class="font-medium text-base">Инструкция</h2>
            <vs-input primary
                      v-model="textInstruction"
                      placeholder="Что нужно сделать в тесте ..."
                      class="w-full mt-2">
            </vs-input>
        </div>
        <div class="first-click-block__files">
            <file-loader :typeFileLoader="typeFL.Single"></file-loader>
        </div>
        <div class="first-click-block__questions">
            <h2 class="font-medium text-base mb-2">Вопросы</h2>
            <section-questions :questions="questions"
                               @add-question-block="addQuestionBlock"
                               @remove-question-block="removeQuestionBlock">
            </section-questions>
        </div>
    </div>
</template>

<script>
import typeFileLoader from "../../../../../../enums";
import SectionQuestions from "../Questions/SectionQuestions";
import FileLoader from "../../FileLoader/FileLoader";

export default {
    name: "OverallImpression",
    components: {FileLoader, SectionQuestions},
    data: () => ({
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
