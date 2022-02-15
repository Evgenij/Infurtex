import VueRouter from 'vue-router'
import Vue from 'vue'

import App from "./components/App";
import Error404 from "./views/errors/Error404";
import AuthLayout from "./components/layouts/AuthLayout";
import Authorization from "./views/auth/Authorization";
import RegistrationModerator from "./views/auth/RegistrationModerator";



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
        name: 'auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Authorization
            },
            {
                path: '/reg-moderator',
                name: 'reg-moderator',
                component: RegistrationModerator
            },
            // {
            //     path: '/reg-respondent',
            //     name: 'reg-respondent',
            //     component: RegistrationRespondent
            // },
            // {
            //     path: '/recovery-password',
            //     name: 'rec-password',
            //     component: RecoveryPassword
            // },
        ]
    },
    {
        path: "/page-not-found",
        alias: '*',
        component: Error404,
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
