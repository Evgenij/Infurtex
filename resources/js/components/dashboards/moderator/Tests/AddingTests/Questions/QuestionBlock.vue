<template>
    <div class="question-block">
        <header class="flex items-center justify-between">
            <span class="text-sm text-slate-400 font-normal"> {{id + '. ' + getTypeToText}}</span>
            <div class="button-actions flex items-center justify-end">
                <div class="button-actions__item p-2 rounded-lg hover:bg-slate-100 cursor-pointer">
                    <i class="bx bx-trash text-slate-400"></i>
                </div>
            </div>
        </header>
        <component :is="questionTest" :change-type="test"/>
    </div>
</template>

<script>
import type from "../../../../../../enums"
import TextQuestion from "./TypeQuestions/TextQuestion";
import CheckboxQuestion from "./TypeQuestions/CheckboxQuestion";

export default {
    name: "QuestionBlock",
    components: {TextQuestion},
    data: ()=>({
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
        text: {
            type: String,
            required: true
        },
        type: {
            type: Number,
            required: true
        },
    },
    methods: {
        test(type){
            alert(type)
        }
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
        }
    }
}
</script>

<style scoped>

</style>
