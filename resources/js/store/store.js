import Vue from 'vue'
import Vuex from 'vuex'
import role from "../enums";
import axiosClient from "../axios";

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		user: {
			data:{},
			filledData: true,
			role: role.userRole.Moderator,
			token: sessionStorage.getItem('TOKEN'),
		}
	},
	getters:{},
	actions:{
		register({commit}, userData){
			return axiosClient.post('/register', userData)
				.then(({data})=>{
					console.log(userData)
					commit('setUser', data)
					return data
				})
			// return fetch('http://localhost:8000/api/register', {
			// 	headers : {
			// 		"Content-Type": 'application/json',
			// 		Accept: 'application/json',
			// 	},
			// 	method: "POST",
			// 	body: JSON.stringify(userData),
			// })
			// 	.then((res)=>res.json())
			// 	.then((res)=>{
			// 		commit('setUser', res);
			// 		return res
			// })
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
