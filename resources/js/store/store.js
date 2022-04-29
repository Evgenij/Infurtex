import Vue from 'vue'
import Vuex from 'vuex'
import role from "../enums";
import axiosClient from "../axios";

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		user: {
			data:{},
			//filledData: false,
			//role: role.userRole.Moderator,
			token: sessionStorage.getItem('TOKEN'),
		}
	},
	getters:{},
	actions:{
		register({commit}, userData){
			console.log(userData)
			if (userData.role === role.userRole.Moderator) {
				return axiosClient.post('/moderator/register', userData)
					.then(({data})=>{
						commit('setUser', data)
						return data
					})
			} else {
				return axiosClient.post('/respondent/register', userData)
					.then(({data})=>{
						commit('setUser', data)
						return data
					})
			}

		},
		login({commit}, userData){
			return axiosClient.post('/login', userData)
				.then(({data})=>{
					commit('setUser', data)
					return data
				})
		},
		logout({commit}) {
			return axiosClient.post('/logout')
				.then(response => {
					commit('logout')
					return response;
				})
		},
	},
	mutations:{
		logout: (state) => {
			state.user.token = null;
			state.user.data = {};
			sessionStorage.removeItem("TOKEN");
		},
		setUser: (state, user) => {
			state.user.token = user.token
			state.user.data = user.userData
			sessionStorage.setItem('TOKEN', user.token)
		}
	},
	modules: {},
})
