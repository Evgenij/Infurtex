<template>
    <div class="question mt-2 pt-4">
        <vs-input primary
                  v-model="text"
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
        text: '',
    }),
}
</script>

<style scoped>

</style>
