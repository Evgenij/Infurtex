<template>
    <div class="question mt-2 flex flex-col pt-4">
        <vs-input primary
                  v-model="textQuestion"
                  placeholder="Текст вопроса"
                  label="Вопрос" class="w-full mr-3">
        </vs-input>
        <div class="answers flex flex-col space-y-1">
            <header class="answers__title text-sm font-medium py-1 pl-1 pt-3">Ответы</header>
            <main class="answers__list flex flex-col space-y-2">
                <answer-block v-for="(answer, index) in questionAnswers"
                              :id="answer.id" :value="answer.value"
                              @remove="removeAnswer" :key="index" @change="changeDataAnswer">{{++index}}</answer-block>
            </main>
            <footer class="answers__add-button flex justify-end py-2">
                <vs-button success @click="addAnswer" :disabled="questionAnswers.length>=5">Добавить вариант</vs-button>
            </footer>
        </div>
    </div>
</template>


<script>
import AnswerBlock from "../AnswerBlock";
export default {
    name: "RadioButtonQuestion",
    components: {AnswerBlock},
    data: ()=>({
        questionAnswers: [],
        textQuestion: ''
    }),
    props: {
        answers: {
            type: Array,
            required: true
        }
    },
    methods:{
        removeAnswer(idAnswer){
            if(this.questionAnswers.length>2) {
                this.questionAnswers = this.questionAnswers.filter(el=>el.id !== idAnswer)
                this.$emit('remove-answer', idAnswer)
            }
        },
        addAnswer(){
            let newIdAnswer = this.questionAnswers.length + 1
            if(this.questionAnswers.length<5) {
                this.questionAnswers.push({
                    id: newIdAnswer, value: ''
                })
                //console.log(this.questionAnswers)
                this.$emit('add-answer', this.questionAnswers)
            }
        },
        changeDataAnswer(obj){
            this.questionAnswers.filter(el => el.id === obj.id)[0].value = obj.val
        },
    },
    watch: {
        textQuestion(){
            this.$emit('change-text-question', this.textQuestion)
        }
    },
    // computed: {
    //     setQuestionAnswers(){
    //         this.questionAnswers = this.$props.answers
    //     },
    // },
    created() {
        this.questionAnswers = this.$props.answers
    }
}
</script>

<style scoped>

</style>
