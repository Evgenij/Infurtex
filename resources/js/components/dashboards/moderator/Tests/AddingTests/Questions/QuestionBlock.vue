<template>
    <div class="question-block border-b border-slate-100 pb-4">
        <header class="flex items-center justify-between">
            <div class="type flex">
                <span class="text-sm text-slate-400 font-normal mr-2"><slot></slot>.{{getTypeToText}}</span>
                <div class="icon flex text-slate-400 items-center" v-html="getIconsType()"></div>
            </div>
            <vs-button dark transparent @click="remove">
                Удалить вопрос
                <i class="bx bx-trash right"></i>
            </vs-button>
        </header>
        <text-question v-if="type===1" @change-text-question="changeTextQuestion"></text-question>
        <radio-button-question v-if="type===2" :text="text" :answers="answers"
                               @remove-answer="removeAnswer" @add-answer="addAnswer"
                               @change-text-question="changeTextQuestion"></radio-button-question>
        <checkbox-question v-if="type===3" :answers="answers"
                            @remove-answer="removeAnswer" @add-answer="addAnswer"
                            @change-text-question="changeTextQuestion"></checkbox-question>
    </div>
</template>

<script>
import type from "../../../../../../enums"
import TextQuestion from "./TypeQuestions/TextQuestion";
import CheckboxQuestion from "./TypeQuestions/CheckboxQuestion";
import RadioButtonQuestion from "./TypeQuestions/RadioButtonQuestion";

export default {
    name: "QuestionBlock",
    components: {RadioButtonQuestion, CheckboxQuestion, TextQuestion},
    data: ()=>({
        typeQuestion: type.typeQuestion,
    }),
    props: {
        id: {
            type: Number,
            required: true
        },
        type: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        answers: {
            type: Array,
            required: true
        }
    },
    computed: {
        getTypeToText() {
            if (this.type === type.typeQuestion.Text) {
                return "Текстовый ответ"
            } else if (this.type === type.typeQuestion.CheckBox) {
                return "Выбор нескольких вариантов"
            } else if (this.type === type.typeQuestion.Radio) {
                return "Выбор одного из нескольких вариантов"
            } else {
                return "Ответ по шкале"
            }
        },
    },
    methods: {
        remove(){
            this.$emit('remove-question', this.id)
        },
        removeAnswer(idAnswer){
            this.$emit('remove-answer', {
                id: this.id,
                idAnswer: idAnswer
            })
        },
        addAnswer(answers){
            this.$emit('add-answer', {
                id: this.id,
                answers: answers
            })
        },
        changeTextQuestion(val){
            this.$emit('change-text-question', {
                id: this.id,
                text: val
            })
        },
        getIconsType(){
            if (this.type === type.typeQuestion.Text) {
                return `<i class="bx bx-receipt"></i>`
            } else if (this.type === type.typeQuestion.CheckBox) {
                return `<i class="bx bx-checkbox"></i>` +
                    `<i class="bx bx-checkbox-checked"></i>` +
                    `<i class="bx bx-checkbox-checked"></i>`
            } else if (this.type === type.typeQuestion.Radio) {
                return `<i class="bx bx-radio-circle"></i>` +
                    `<i class="bx bx-radio-circle-marked"></i>` +
                    `<i class="bx bx-radio-circle"></i>`
            } else {
                return "Ответ по шкале"
            }
        }
    },
}
</script>

<style scoped>

</style>
