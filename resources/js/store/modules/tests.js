import axiosClient from "../../axios";

export default {
	state: {
		tests: []
	},
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
				console.log('data test - ', test)
				response = axiosClient.post("/test", test)
					.then((res)=>{
						commit("createTest", res.data)
						return res;
					});
			}

			return response;
		},
		fetchTests({commit}){
			return axiosClient.get(`/test`)
				.then((res)=>{
					console.log('data tests - ', res.data.data)
					commit("updateTests", res.data.data)
				})
		},
		deleteTest({dispatch}, testId){
			return axiosClient.delete(`/test/${testId}`)
				.then((res)=>{
					dispatch("fetchTests")
				})
		}
	},
	mutations: {
		createTest(state, test){
			state.tests = [...state.tests, test.data];
		},
		updateTests(state, tests){
			state.tests = tests
		},
	},
	getters: {
		getTests(state){
			return state.tests
		}
	}
}
