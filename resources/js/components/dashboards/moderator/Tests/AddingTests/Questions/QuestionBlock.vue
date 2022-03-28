<template>
    <div class="question-block border-b border-slate-100 pb-4">
        <header class="flex items-center justify-between">
            <span class="text-sm text-slate-400 font-normal"> {{id + '. ' + getTypeToText}}</span>
            <vs-button dark transparent @click="remove">
                Удалить вопрос
                <i class="bx bx-trash right"></i>
            </vs-button>
        </header>
        <component :is="questionTest"></component>
    </div>
</template>

<script>
import type from "../../../../../../enums"
import TextQuestion from "./TypeQuestions/TextQuestion";
import CheckboxQuestion from "./TypeQuestions/CheckboxQuestion";

export default {
    name: "QuestionBlock",
    components: {CheckboxQuestion, TextQuestion},
    data: ()=>({
        typeQuestion: type.typeQuestion,
        answers: [
            {
                id: Math.random(),
                value: ''
            },
        ]
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
    },
    computed: {
        getTypeToText(){
            if (this.type === type.typeQuestion.Text){
                return "Текстовый ответ"
            } else if (this.type === type.typeQuestion.CheckBox) {
                return "Выбор нескольких вариантов"
            } else if (this.type === type.typeQuestion.Radio) {
                return "Выбор одного из нескольких вариантов"
            } else {
                return "Ответ по шкале"
            }
        },
        questionTest(){
            let nameComponentQuestion = this.type ? 'TextQuestion' : 'UserInfo'

            if (this.type === type.typeQuestion.Text) {
                nameComponentQuestion = "TextQuestion"
            } if (this.type === type.typeQuestion.CheckBox) {
                nameComponentQuestion = 'CheckboxQuestion'
            }

            return () => import(`./TypeQuestions/${nameComponentQuestion}`)
        },
    },
    methods: {
        remove(){
            this.$emit('remove-question', this.id)
        }
    }
}
</script>

<style scoped>

</style>
