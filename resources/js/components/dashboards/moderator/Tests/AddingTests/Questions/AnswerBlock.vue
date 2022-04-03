<template>
    <div class="answer-block flex items-center">
        <span class="px-2 text-slate-300 text-sm"><slot></slot></span>
        <vs-input primary
                  v-model="valueAnswer"
                  placeholder="текст варианта" class="w-full">
        </vs-input>
        <vs-button danger transparent @click="remove">
            <i class="bx bx-trash"></i>
        </vs-button>
    </div>
</template>

<script>
export default {
    name: "AnswerBlock",
    data: ()=>({
        valueAnswer: '',
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
            console.log('delete ', this.id, ' answer')
            this.$emit('remove', this.id)
        },
    },
    watch: {
        valueAnswer(val){
            this.$emit('change', {
                val: val,
                id: this.id
            })
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
