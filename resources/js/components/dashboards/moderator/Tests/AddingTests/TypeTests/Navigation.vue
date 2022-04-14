<template>
    <div class="navigation-block flex flex-col space-y-4">
        <header class="flex items-center justify-center text-lg font-medium border-b border-slate-100 pb-4">
            <div class="p-2 px-3 rounded-lg flex items-center justify-center bg-green-500 mr-2">
                <i class="bx bxs-directions text-white text-sm"></i>
            </div>
            Тест навигации
        </header>
        <div class="first-click-block__instruction">
            <h2 class="font-medium text-base">Инструкция</h2>
            <vs-input primary
                      v-model="textInstruction"
                      placeholder="Что нужно сделать в тесте ..."
                      class="w-full mt-2">
            </vs-input>
        </div>
        <div class="navigation-block__screens">
            <header class="flex justify-between items-center mb-2">
                <h2 class="font-medium text-base">Экраны</h2>
                <vs-button flat success @click="">
                    <i class="bx bx-plus left"></i>
                    Добавить экран
                </vs-button>
            </header>
            <navigation-screen></navigation-screen>
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
import FileLoader from "../../FileLoader/FileLoader";
import SectionQuestions from "../Questions/SectionQuestions";
import typeFileLoader from "../../../../../../enums";
import NavigationScreen from "../NavigationScreen";

export default {
    name: "Navigation",
    components: {NavigationScreen, FileLoader, SectionQuestions},
    data: () => ({
        textInstruction: '',
        questions: [],
        typeFL: typeFileLoader.typeFileLoader,
        navigationListData: [1,2,3,4]
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
