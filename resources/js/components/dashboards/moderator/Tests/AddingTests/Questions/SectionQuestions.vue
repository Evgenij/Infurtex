<template>
    <div class="questions flex flex-col space-y-4">
        <question-block v-for="(question, index) in questions"
            :id="++index" :text="question.text" :type="question.type" :key="index" :change-type="test">
        </question-block>
    </div>
</template>

<script>

import QuestionBlock from "./QuestionBlock";
import type from "../../../../../../enums"

export default {
    name: "SectionQuestions",
    components: {QuestionBlock},
    data: ()=>({
        questions: [
            {
                id: 1,
                text: "Question - " + Math.random(),
                type: type.typeQuestion.Text
            },
            {
                id: 2,
                text: "Question - " + Math.random(),
                type: type.typeQuestion.CheckBox
            },
        ]
    }),
    methods: {
        test(type){
            alert(type)
        }
    }
}
</script>

<style scoped>

</style>
