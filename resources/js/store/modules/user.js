import role from "../../enums";
import axiosClient from "../../axios";

export default {
	state:{
		data:{},
		//filledData: false,
		//role: role.userRole.Moderator,
		token: sessionStorage.getItem('TOKEN'),
	},
	actions: {
		getData({commit}){
			const userData = {
				id: sessionStorage.getItem('USER_ID'),
				role: sessionStorage.getItem('USER_ROLE')
			}
			return axiosClient.get('/get-user-data/'+userData.role+'/'+userData.id)
				.then(({data})=>{
					console.log('in action', data)
					//this.state.user.data = data
					commit('setData', data)
					sessionStorage.setItem('USER_ID', data.id)
					sessionStorage.setItem('USER_ROLE', data.role)
				})
		},
		register({commit}, userData){
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
					console.log(data)
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
	mutations: {
		logout: (state) => {
			state.token = null;
			state.data = {};
			sessionStorage.removeItem("TOKEN");
			sessionStorage.removeItem("USER_ID");
			sessionStorage.removeItem("USER_ROLE");
		},
		setUser: (state, user) => {
			state.token = user.token
			state.data = user.userData
			sessionStorage.setItem('TOKEN', user.token)
			sessionStorage.setItem("USER_ID", user.userData.id);
			sessionStorage.setItem("USER_ROLE", user.userData.role);
		},
		setData(state, data) {
			state.data = data
		}
	},
	getters: {
		getUsersData(state){
			return state.data
		}
	}
}
