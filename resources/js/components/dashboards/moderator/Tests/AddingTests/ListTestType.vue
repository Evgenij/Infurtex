<template>
    <section class="grid grid-cols-2 gap-3">
        <type-test-block v-for="typeTestBlock in testTypes"
                         :id="typeTestBlock.id" :name="typeTestBlock.name"
                         :description="typeTestBlock.description" :icon="typeTestBlock.icon"
                         :color="typeTestBlock.color" :key="typeTestBlock.id"></type-test-block>
    </section>
</template>

<script>
import TypeTestBlock from './TypeTestBlock'
import type from '../../../../../enums'

export default {
    name: "ListTestType",
    components: {
        TypeTestBlock
    },
    data: ()=>({
        testTypes: [
            {
                id: type.typeTest.FirstClick,
                name: 'Тест первого клика',
                description: 'Предложите респондентам выполнить задание, нажав где-нибудь на изображении',
                icon: 'bxs-pointer',
                color: 'bg-yellow-500'
            },
            {
                id: type.typeTest.OverallImpression,
                name: 'Тест общего впечатления',
                description: 'Задавайте вопросы по одному, пока респонденты просматривают изображения',
                icon: 'bxs-show',
                color: 'bg-teal-400'
            },
            {
                id: type.typeTest.FiveSeconds,
                name: 'Тест пяти секунд',
                description: 'Перед ответом респондентам ненадолго показывают изображение',
                icon: 'bxs-stopwatch',
                color: 'bg-slate-400'
            },
            {
                id: type.typeTest.Like,
                name: 'Тест предпочтения',
                description: 'Отображение нескольких вариантов с возможностью выбора одного',
                icon: 'bxs-heart',
                color: 'bg-red-500'
            },
            {
                id: type.typeTest.Navigation,
                name: 'Тест навигации',
                description: 'Поставьте задачу для выполнения респондентам, пройдя серию экранов',
                icon: 'bxs-directions',
                color: 'bg-green-500'
            },
        ],
    }),
	methods: {
	}
}
</script>

<style scoped>

</style>
