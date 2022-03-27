<template>
    <div class="question mt-2 border-b pb-4 grid grid-cols-3 gap-3 pt-6">
        <div class="cell col-span-2">
            <vs-input primary
                      v-model="text"
                      placeholder="Текст вопроса"
                      label="Вопрос" class="w-full mr-3">
            </vs-input>
        </div>
        <div class="cell">
            <vs-select placeholder="тип вопроса" v-model="type" class="min-w-fit">
                <vs-option v-for="item in listTypes" :label="item.label" :value="item.value" :key="item.value">
                    {{ item.text }}
                </vs-option>
            </vs-select>
        </div>
    </div>
</template>

<script>
import type from '../../../../../../../enums'
export default {
    name: "TextQuestion",
    data: ()=>({
        text: '',
        type: 1,
        listTypes: [
            {text: 'Текстовый ответ', label: 'Текстовый ответ', value: type.typeQuestion.Text},
            {text: 'Выбор одного', label: 'Выбор одного варианта', value: type.typeQuestion.Radio},
            {text: 'Выбор нескольких', label: 'Выбор нескольких вариантов', value: type.typeQuestion.CheckBox},
            {text: 'Градация', label: 'Градация выборов', value: type.typeQuestion.Scale},
        ]
    }),
    watch: {
        type(){
            this.$emit('change-type', this.type)
        }
    }
}
</script>

<style scoped>

</style>
