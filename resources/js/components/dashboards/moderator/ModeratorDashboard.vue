<template>
    <div class="root relative">
        <app-header :notifications="notifications" :user-menu="menuLinks" :links="links"></app-header>
        <div class="content mx-auto">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AppHeader from "../../Header/Header";
    export default {
        name: "ModeratorDashboard",
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
                { name: 'Тесты', to: {name: 'ModeratorTests'}},
                { name: 'Команды', to: {name: 'ModeratorTeams'}}
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

<style lang="scss" scoped>
    .content {
        width: 1040px;
    }
</style>
