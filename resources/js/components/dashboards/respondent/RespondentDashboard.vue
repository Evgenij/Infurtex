<template>
    <div class="root relative">
        <app-header :user-menu="menuLinks" :links="links"></app-header>
        <main class="work-area content mx-auto pt-5">
            <aside class="menu bg-white rounded-lg overflow-hidden py-3 h-fit">
                <h2 class="font-medium text-lg pl-5 pb-3 pt-1">Тесты</h2>
                <vs-sidebar
                    v-model="typeTests"
                    open>
                    <vs-sidebar-item id="active">
                        <template #icon>
                            <i class='bx bx-rocket'></i>
                        </template>
                        <div class="text w-full flex justify-between items-center">
                            Активные <block-notification color="primary">{{formattingNumber(45)}}</block-notification>
                        </div>
                    </vs-sidebar-item>
                    <vs-sidebar-item id="new">
                        <template #icon>
                            <i class='bx bx-bell'></i>
                        </template>
                        <div class="text w-full flex justify-between items-center">
                            Новые <block-notification color="red">{{formattingNumber(123)}}</block-notification>
                        </div>
                    </vs-sidebar-item>
                    <vs-sidebar-item id="favorites">
                        <template #icon>
                            <i class='bx bx-star'></i>
                        </template>
                        <div class="text w-full flex justify-between items-center">
                            Избранные
                        </div>
                    </vs-sidebar-item>
                    <vs-sidebar-item id="finished">
                        <template #icon>
                            <i class='bx bx-history'></i>
                        </template>
                        <div class="text w-full flex justify-between items-center">
                            Пройденные
                        </div>
                    </vs-sidebar-item>

                </vs-sidebar>
            </aside>
            <section class="menu-content">
                <div class="filter bg-white rounded-lg p-3 pt-3 flex space-x-2">
                    <vs-select
                        v-model="ownerTests">
                        <vs-option label="Любой владелец" value="all">
                            Любой владелец
                        </vs-option>
                        <vs-option label="Компания" value="company">
                            Компания
                        </vs-option>
                        <vs-option label="Персональный" value="personal">
                            Персональный
                        </vs-option>
                    </vs-select>
                    <vs-input
                        type="date"
                        v-model="dateTests"
                    />
                    <vs-select
                        v-model="duration">
                        <template v-for="duration in durationTests">
                            <vs-option :label="duration.label" :value="duration.maxVal">
                                {{duration.label}}
                            </vs-option>
                        </template>
                    </vs-select>
                    <vs-select
                        v-model="cost">
                        <template v-for="cost in costTests">
                            <vs-option :label="cost.label" :value="cost.maxVal">
                                {{cost.label}}
                            </vs-option>
                        </template>
                    </vs-select>
                </div>
                <div class="list-tests">
                    <router-view></router-view>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import AppHeader from "../../Header/Header";
    import BlockNotification from "../../Header/BlockNotification";

    export default {
        name: "RespondentDashboard",
        components: {BlockNotification, AppHeader},
        data: ()=>({
            typeTests: 'new',
            links: [],
            menuLinks: [
                {
                    label: 'Профиль',
                    path: '#',
                    icon: 'bx-user'
                },
                {
                    label: 'Пополнить баланс',
                    path: '#',
                    icon: 'bx-coin-stack'
                },
                {
                    label: 'Настройки',
                    path: '#',
                    icon: 'bx-cog'
                },
            ],
            ownerTests: 'all',
            dateTests: '2022-02-17',
            duration: 1,
            durationTests: [
                {duration: '1', minVal: 0, maxVal: 1, label: 'до 1 мин'},
                {duration: '2', minVal: 1, maxVal: 2, label: 'от 1 до 2 мин'},
                {duration: '5', minVal: 2, maxVal: 5, label: 'от 2 до 5 мин'},
                {duration: '10', minVal: 5, maxVal: 10, label: 'от 5 до 10 мин'},
                {duration: '100000', minVal: 10, maxVal: 100000, label: 'более 10 мин'},
            ],
            cost: 100,
            costTests: [
                {cost: '100', minVal: 0, maxVal: 100, label: 'до 100 инф.'},
                {cost: '200', minVal: 100, maxVal: 200, label: 'от 100 до 200 инф.'},
                {cost: '500', minVal: 200, maxVal: 500, label: 'от 200 до 500 инф.'},
                {cost: '1000', minVal: 500, maxVal: 1000, label: 'от 500 до 1000 инф.'},
                {cost: '100000', minVal: 1000, maxVal: 100000, label: 'более 1000 инф.'},
            ],
        })
    }
</script>

<style lang="scss" scoped>
    @import "./resources/sass/variables";

    .work-area {  display: grid;
        grid-template-columns: 190px 1fr;
        grid-template-rows: 1fr;
        gap: 0 30px;
        grid-auto-flow: row;
        grid-template-areas:
            "menu menu-content";
    }

    .menu { grid-area: menu; }

    .menu-content {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;
        gap: 20px 30px;
        grid-auto-flow: row;
        grid-template-areas:
            "filter"
            "list-tests";
    }

    .filter { grid-area: filter; }
    .list-tests { grid-area: list-tests; }

</style>
