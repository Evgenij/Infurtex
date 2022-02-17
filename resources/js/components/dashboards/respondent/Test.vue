<template>
    <div class="block-test flex flex-col rounded-lg bg-white py-4 px-5 space-y-3">
        <main class="border-bottom-2 border-slate-100 flex justify-between">
            <div class="name font-medium text-base flex items-center">{{name}}</div>
            <div class="test-content flex items-center space-x-10">
                <div v-if="state !== 'finished'" class="test-content__data flex items-center space-x-4">
                    <div class="test-content__time text-slate-500 font-medium text-sm flex items-center space-x-1">
                        <i class="bx bx-time"></i>
                        <span>{{time}} мин</span>
                    </div>
                    <div class="test-content__cost text-teal-500 font-medium text-sm flex items-center space-x-1">
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65341 0L7.6459 1.70559L6.11391 1.69879L6.13352 1.73249L5.39287 3.01856L4.40038 1.31296L3.64033 2.63273L4.63281 4.33832L3.87275 5.65809L2.88027 3.9525L0.600098 7.9118L5.28684 15.966L9.88281 15.9864L8.89032 14.2808L10.4223 14.2876L11.4148 15.9932L12.9468 16L11.9543 14.2944L13.4863 14.3012L13.4667 14.2675L14.2073 12.9814L15.1998 14.687L15.9599 13.3673L14.9674 11.6617L15.7274 10.3419L16.7199 12.0475L19.0001 8.0882L14.3134 0.0340155L9.71739 0.0136062L10.7099 1.7192L9.17789 1.71239L8.1854 0.0068031L6.65341 0ZM9.17789 1.71239L10.1704 3.41799L12.4684 3.42819L15.115 7.97643L13.9749 9.95609L14.9674 11.6617L14.2073 12.9814L13.2148 11.2759L12.4549 12.5954L10.9618 12.5888L11.9543 14.2944L10.4223 14.2876L9.42983 12.582L7.13184 12.5718L4.48521 8.02357L5.6253 6.04391L4.63281 4.33832L5.39287 3.01856L6.38535 4.72415L7.14531 3.40455L8.63838 3.41118L7.6459 1.70559L9.17789 1.71239Z" fill="#1AC4B6"/>
                        </svg>
                        <span>+{{cost}}</span>
                    </div>
                </div>
                <div v-if="state === 'active'" class="active-buttons flex items-center space-x-2">
                    <vs-tooltip bottom class="rounded-lg p-2 bg-red-50 text-red-500 flex items-center hover:bg-red-500 hover:text-red-50 cursor-pointer">
                        <i class="bx bx-trash"></i>
                        <template #tooltip>
                            Удалить
                        </template>
                    </vs-tooltip>
                    <vs-button success>
                        Пройти тест
                        <i class="bx bx-rocket ml-1"></i>
                    </vs-button>
                </div>
                <div v-else-if="state === 'finished'" class="active-buttons flex items-center space-x-2">
                    <vs-button danger flat>
                        Удалить
                        <i class="bx bx-trash ml-1"></i>
                    </vs-button>
                </div>
                <div v-else class="test-content__buttons flex items-center space-x-2">
                    <vs-tooltip bottom class="rounded-lg p-2 bg-green-50 text-green-500 flex items-center hover:bg-green-500 hover:text-green-50 cursor-pointer">
                        <i class="bx bx-check"></i>
                        <template #tooltip>
                            Принять
                        </template>
                    </vs-tooltip>
                    <vs-tooltip bottom class="rounded-lg p-2 bg-red-50 text-red-500 flex items-center hover:bg-red-500 hover:text-red-50 cursor-pointer">
                        <i class="bx bx-block"></i>
                        <template #tooltip>
                            Отклонить
                        </template>
                    </vs-tooltip>
                    <div class="divider h-full bg-slate-200"></div>
                    <vs-tooltip bottom class="rounded-lg p-2 bg-yellow-50 text-yellow-500 flex items-center hover:bg-yellow-500 hover:text-yellow-50 cursor-pointer">
                        <i class="bx bx-star"></i>
                        <template #tooltip>
                            В избранное
                        </template>
                    </vs-tooltip>
                </div>
            </div>
        </main>
        <hr>
        <footer class="flex items-center justify-between text-sm text-slate-500">
            <div class="owner flex items-center space-x-2">
                <div class="type-test flex items-center font-medium p-1 px-2 rounded bg-slate-100">
                    <i class="bx mr-1"
                        :class="{
                            'bxs-directions text-green-500': this.getNameTypeTest(this.type).code === 1,
                            'bxs-stopwatch text-slate-500':this.getNameTypeTest(this.type).code === 2,
                            'bxs-pointer text-orange-500': this.getNameTypeTest(this.type).code === 3,
                            'bxs-show text-blue-500': this.getNameTypeTest(this.type).code === 4,
                            'bxs-heart text-red-500': this.getNameTypeTest(this.type).code === 5,
                        }"></i>
                    <span>{{this.getNameTypeTest(this.type).name}}</span>
                </div>
                <span class="center">от</span>
                <div class="type-test flex items-center font-medium p-1 px-2 rounded bg-slate-100">
                    <i class="bx mr-1"
                        :class="{
                            'bx-user' : ownerType === 'person',
                            'bx-buildings' : ownerType === 'company',
                        }"></i>
                    <span>{{ownerName}}</span>
                </div>
            </div>
            <div class="data text-slate-400">{{date}}</div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data: () => ({

        }),
        props: {
            name: {
                type: String,
                required: true
            },
            time: {
                type: Number,
                required: true
            },
            cost: {
                type: Number,
                required: true
            },
            type: {
                type: Number,
                required: true
            },
            ownerType: {
                type: String,
                required: true
            },
            ownerName: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            }
        },
        methods: {
            getNameTypeTest(type){
                let nameType = {}
                switch(type) {
                    case 1: nameType = {name: 'Тест навигации', code: 1}
                        break
                    case 2: nameType = {name: 'Тест 5-ти секунд', code: 2}
                        break
                    case 3: nameType = {name: 'Тест первого клика', code: 3}
                        break
                    case 4: nameType = {name: 'Тест общего впечатления', code: 4}
                        break
                    case 5: nameType = {name: 'Тест предпочтения', code: 5}
                        break
                }
                return nameType
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "./resources/sass/_variables.scss";

    .block-test{
        @include default-shadow;
        margin-bottom: 14px;

        &:last-child{
            margin-bottom: 0;
        }
    }

    .divider{
        width: 1px;
        height: 30px;
    }

</style>
