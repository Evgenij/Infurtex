<template>
    <div class="answer-block flex items-center">
        <span class="p-1">{{id}}</span>
        <vs-input primary
                  v-model="valueAnswer"
                  placeholder="Текст вопроса" class="w-full mr-3">
        </vs-input>
        <div class="p-2 rounded-lg hover:bg-slate-100 cursor-pointer"
             @click="remove">
            <i class="bx bx-trash text-slate-400"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "AnswerBlock",
    data: ()=>({
        valueAnswer: ''
    }),
    props: {
        id: {
            type: Number,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        remove(){
            this.$emit('remove', this.id)
        }
    },
    computed: {
        setValueAnswer(){
            this.valueAnswer = this.$props.value
        }
    }
}
</script>

<style scoped>

</style>
