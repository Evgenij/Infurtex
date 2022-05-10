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
		},
		tests: []
	},
	getters:{},
	actions:{
		createTest({commit}, test){
			let response;
			if (test.id) {
				response = axiosClient.put(`/test/${test.id}`, test)
					.then((res)=>{
						commit("updateTest", res.data)
						return res;
					})
			} else {
				response = axiosClient.post("/test", test)
					.then((res)=>{
						commit("createTest", res.data)
						return res;
					});
			}

			return  response;
		},
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
		createTest(state, test){
			state.tests = [...state.tests, test.data];
		},
		updateTest(state, test){
			state.tests = state.tests.map((t)=>{
				if (t.id == test.data.id) {
					return test.data;
				}
				return t;
			})
		},
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
