<template>
    <div class="question mt-2 flex flex-col pt-4">
        <vs-input primary
                  v-model="text"
                  placeholder="Текст вопроса"
                  label="Вопрос" class="w-full mr-3">
        </vs-input>
        <div class="answers flex flex-col space-y-1">
            <header class="answers__title text-sm font-medium py-1 pl-1 pt-3">Ответы</header>
            <main class="answers__list flex flex-col space-y-2">
                <answer-block v-for="(answer,index) in answers"
                              :id="++index" :value="answer.value"
                              @remove="removeAnswer" :key="index"></answer-block>
            </main>
            <footer class="answers__add-button">
                <vs-button transparent success>Добавить вариант</vs-button>
            </footer>
        </div>
    </div>
</template>

<script>
import AnswerBlock from "../AnswerBlock";
export default {
    name: "CheckboxQuestion",
    components: {AnswerBlock},
    data: ()=>({
        text: '',
        answers: [
            { value: 'вариант 1' },
            { value: 'вариант 2' },
        ],
        checkedAnswers: []
    }),
    methods:{
        removeAnswer(idAnswer){
            this.answers = this.answers.filter(el => el.id !== idAnswer)
        }
    }
}
</script>

<style scoped>

</style>
