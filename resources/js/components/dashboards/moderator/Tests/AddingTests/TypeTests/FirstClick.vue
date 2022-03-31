<template>
    <section class="first-click-block">
        <div class="first-click-block__files">
            файлы
        </div>
        <div class="first-click-block__questions">
            <h2 class="font-medium text-base mb-2">Вопросы</h2>
            <section-questions :questions="questions">
<!--                               @remove-answer="removeAnswer" @add-answer="addAnswer"-->
            </section-questions>
        </div>
    </section>
</template>

<script>
import SectionQuestions from "../Questions/SectionQuestions";
import type from "../../../../../../enums";
export default {
    name: "FirstClick",
    components: {SectionQuestions},
    data: ()=>({
        questions: [
            {
                id: 1,
                type: type.typeQuestion.Text,
                text: '',
                answers: [
                    {id: 1, value: ''}
                ]
            },
            {
                id: 2,
                type: type.typeQuestion.CheckBox,
                text: '',
                answers: [
                    {id: 1, value: ''},
                    {id: 2, value: ''},
                    {id: 3, value: ''},
                    {id: 4, value: ''},
                ]
            },
            {
                id: 3,
                type: type.typeQuestion.Radio,
                text: '',
                answers: [
                    {id: 1, value: ''},
                    {id: 2, value: ''},
                    {id: 3, value: ''},
                ]
            },
        ],
    }),
    methods: {
        // removeAnswer(obj){
        //     console.log(obj)
        //     let question = this.questions.filter(el=>el.id === obj.id)[0].answers.filter(el=>el.id !== obj.idAnswer)
        //     console.log(question)
        //     this.questions.filter(el=>el.id === obj.id)[0].answers = question
        // },
        // addAnswer(){
        //
        // }
    },
    watch: {
        questions(val){
            console.log(val)
        }
    }
}
</script>

<style scoped>

</style>
