import Vue from 'vue'
import Vuex from 'vuex'
import userRole from "../enums";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user: {
            data:{
                name: 'Evgenij',
                email: 'tom@example.com',
                imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            role: userRole.Moderator,
            token: 23
        }
    },
    getters:{},
    actions:{},
    mutations:{},
    modules: {},
})
