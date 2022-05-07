<template>
    <section class="section-question">
        <main v-if="questions.length !== 0" class="questions flex flex-col space-y-2">
            <question-block v-for="(question, index) in questions"
                            :id="question.id" :text="question.text" :type="question.type" :answers="question.answers" :key="question.id"
                            @remove-question="removeQuestion" @remove-answer="removeAnswer"
                            @add-answer="addAnswer" @change-text-question="changeTextQuestion">
                {{++index}}
            </question-block>
        </main>
        <div v-else class="empty-screens border-2 p-6 rounded-lg border-slate-100 text-slate-400 text-sm flex items-center justify-center">
            <i class="bx bx-info-circle mr-1"></i> <span class="pb-1">список вопросов пуст</span>
        </div>
        <footer>
            <vs-button transparent success @click="activeTooltip=!activeTooltip" class="w-full">
                <i class="bx bx-plus left"></i>
                Добавить вопрос
            </vs-button>
            <div v-if="activeTooltip" class="footer__title flex flex-col border rounded-lg border-slate-100 p-4">
                <h4 class="text-center text-sm mb-2 font-medium">
                    Тип вопроса
                </h4>
                <div class="buttons flex items-center space-x-2">
                    <vs-button class="w-full" flat dark @click="addNewQuestion(1)">
                        <i class="bx bx-font-family left"></i>
                        Текстовый ответ
                    </vs-button>
                    <vs-button class="w-full" flat dark @click="addNewQuestion(2)">
                        <i class="bx bx-list-check left"></i>
                        Один из нескольких
                    </vs-button>
                    <vs-button class="w-full" flat dark @click="addNewQuestion(3)">
                        <i class="bx bx-select-multiple left"></i>
                        Несколько ответов
                    </vs-button>
                </div>
            </div>
        </footer>
    </section>
</template>

<script>

import QuestionBlock from "./QuestionBlock";
import type from "../../../../../../enums"

export default {
    name: "SectionQuestions",
    components: {QuestionBlock},
    data: ()=>({
        activeTooltip: false,
        sectionQuestions: []
    }),
    props: {
        questions: {
            type: Array,
            required: true
        }
    },
    methods:{
        addNewQuestion(type) {
            let newQuestionBlock = {
                id: this.questions.length+1,
                type: type,
                text: '',
                answers: [
                    {id: 1, value: ''},
                    {id: 2, value: ''},
                ]
            }
            this.$emit('add-question-block', newQuestionBlock)
            this.switchStatePanel()
        },
        switchStatePanel(){
            this.activeTooltip=!this.activeTooltip
        },
        removeQuestion(idQuestion){
            //this.questions = this.questions.filter(el => el.id !== idQuestion)
            this.$emit('remove-question-block', idQuestion)
        },
        removeAnswer(obj){
            let question = this.questions.filter(el=>el.id === obj.id)[0]
            this.questions.filter(el=>el.id === obj.id)[0].answers = question.answers.filter(el=> el.id !== obj.idAnswer)
            //console.log('!!! ', this.questions)
            //this.$emit('remove-answer', obj)
        },
        addAnswer(obj){
            //let question = this.questions.filter(el=>el.id === obj.id)[0]
            //console.log(question)
            this.questions.filter(el=>el.id === obj.id)[0].answers = obj.answers
            //console.log(this.questions)
        },
        changeTextQuestion(obj){
            this.questions.filter(el=>el.id === obj.id)[0].text = obj.text
        }
    },
    computed: {
        setQuestions(){
            this.sectionQuestions = this.$props.questions
        }
    }
}
</script>

<style scoped>

</style>
