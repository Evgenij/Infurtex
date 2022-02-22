<template>
    <div class="root relative">
        <app-header :user-menu="menuLinks" :links="links"></app-header>
        <section v-if="!$store.state.user.filledData && $route.name === 'RespondentTests'" class="message content pt-5">
            <vs-alert danger>
                <template #icon>
                    <i class='bx bxs-message-alt-error'></i>
                </template>
                <template #title>
                    Данные не заполнены
                </template>
                Для прохождения тестов вам необходимо
                <router-link :to="{name: 'RespondentData'}" class="link link-blue">заполнить личные данные</router-link>
            </vs-alert>
        </section>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from "../../Header/Header";

    export default {
        name: "RespondentDashboard",
        components: {AppHeader},
        data: ()=>({

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

        }),
    }
</script>

<style lang="scss" scoped>
</style>
