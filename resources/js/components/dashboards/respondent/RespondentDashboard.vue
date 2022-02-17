<template>
    <div class="root">
<!--        <app-header :notifications="notifications" :user-menu="menuLinks" :links="links"></app-header>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from "../../Header/Header";

    export default {
        name: "RespondentDashboard",
        components: {AppHeader},
        data: ()=>({
            notifications: [
                {
                    count: 0
                },
                {
                    count: 2
                }
            ],
            links: [
                {
                    id: 'tests',
                    name: 'Тесты',
                    path: 'RespondentTests',
                    active: 'tests',
                },
            ],
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

        })
    }
</script>

<style scoped>

</style>
