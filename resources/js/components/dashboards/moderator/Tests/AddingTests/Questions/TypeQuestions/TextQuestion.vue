<template>
    <div class="question mt-2 pt-4">
        <vs-input primary
                  v-model="textQuestion"
                  placeholder="Текст вопроса"
                  label="Вопрос" class="w-full mr-3">
        </vs-input>
    </div>
</template>

<script>
import type from '../../../../../../../enums'
export default {
    name: "TextQuestion",
    data: ()=>({
        textQuestion: ''
    }),
    watch: {
        textQuestion(){
            this.$emit('change-text-question', this.textQuestion)
        }
    },
}
</script>

<style scoped>

</style>
