import VueRouter from 'vue-router'
import Vue from 'vue'
import store from "./store/store";

import App from "./components/App";
import Error404 from "./views/errors/Error404";

import Authorization from "./views/auth/Authorization";
import RegistrationModerator from "./views/auth/RegistrationModerator";
import RegistrationRespondent from "./views/auth/RegistrationRespondent";
import RecoveryPassword from "./views/auth/RecoveryPassword";

import DashboardLayout from "./components/layouts/DashboardLayout";
import AuthLayout from "./components/layouts/AuthLayout";

import ModeratorDashboard from "./components/dashboards/moderator/ModeratorDashboard";
import ModeratorTests from "./components/dashboards/moderator/Tests/Tests";
import ModeratorTeams from "./components/dashboards/moderator/Teams/Teams";
import ModeratorAddingTest from "./components/dashboards/moderator/Tests/AddTest.vue"

import RespondentDashboard from "./components/dashboards/respondent/RespondentDashboard";
import RespondentTests from "./components/dashboards/respondent/Tests/Tests";
import RespondentData from "./components/dashboards/respondent/AdditionalData";

import userRole from "./enums";

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
            {
                path: '/reg-respondent',
                name: 'reg-respondent',
                component: RegistrationRespondent
            },
            {
                path: '/recovery-password',
                name: 'rec-password',
                component: RecoveryPassword
            },
        ]
    },
    {
        path: '/dashboard',
        //redirect: 'moderator',
        name: 'dashboard',
        meta: {
            requiresAuth: true
        },
        component: DashboardLayout,
        children: [
            {
                path: '/moderator',
                redirect: '/moderator/tests',
                name: 'moderator',
                component: ModeratorDashboard,
                children: [
                    {
                        path: '/moderator/tests',
                        name: 'ModeratorTests',
                        component: ModeratorTests,
                    },
                    {
                        path: '/moderator/teams',
                        name: 'ModeratorTeams',
                        component: ModeratorTeams
                    },
                    {
                        path: '/moderator/add_test',
                        name: 'ModeratorAddingTest',
                        component: ModeratorAddingTest
                    },
                ]
            },
            {
                path: '/respondent',
                redirect: '/respondent/tests',
                name: 'respondent',
                component: RespondentDashboard,
                children: [
                    {
                        path: '/respondent/tests',
                        name: 'RespondentTests',
                        component: RespondentTests
                    },
                    {
                        path: '/respondent/add_data',
                        name: 'RespondentData',
                        component: RespondentData
                    },
                ],
            },
        ]
    },
    {
        path: "/page-not-found",
        alias: '*',
        component: Error404,
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    //console.log(to)
    if(to.meta.requiresAuth && !store.state.user.token) {
        console.log('token empty')
        next({name: 'auth'})
    } else if (store.state.user.token &&
        (to.name === 'reg-moderator' ||
            to.name === 'reg-respondent' ||
            to.name === 'rec-password' ||
            to.name === 'login' ||
            to.name === 'dashboard')){
        console.log("enter to route as: ", store.state.user.role)
        if(store.state.user.role === userRole.userRole.Moderator){
            console.log("enter to moderator")
            next({name: 'moderator'})
        } else if (store.state.user.role === userRole.userRole.Respondent) {
            console.log("enter to respondent")
            next({name: 'respondent'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
