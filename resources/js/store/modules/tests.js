import axiosClient from "../../axios";

export default {
	state: {
		tests: [],
		filteredTests: [],
		filters: {
			name: '',
			project: 'all',
			status: 'all',
		}
	},
	actions:{
		createTest({commit}, test){
			if (test.id) {
				return axiosClient.put(`/test/${test.id}`, test)
					.then((res)=>{
						commit("updateTest", res.data)
						return res;
					})
			} else {
				return axiosClient.post("/test", test)
					.then((res)=>{
						//console.log(res.data)
						commit("createTest", res.data)
						return res;
					});
			}
		},
		fetchTests({commit}){
			return axiosClient.get(`/test`)
				.then((res)=>{
					//console.log('data tests - ', res.data.data)
					commit("updateTests", res.data.data)
					return res
				})
		},
		deleteTest({dispatch}, testId){
			return axiosClient.delete(`/test/${testId}`)
				.then((res)=>{
					dispatch("fetchTests")
					return res
				})
		},
		recruitingForTests({commit}, id) {
			return axiosClient.post('/general', id)
				.then((res)=>{
					return res
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
		changeFilterName(state, value){
			state.filters.name = value
		},
		changeFilterProject(state, value){
			state.filters.project = value
		},
		changeFilterStatus(state, value){
			state.filters.status = value
		}
	},
	getters: {
		getTestsFilter(state){
			const { tests, filters } = state;

			let listTests = [...tests]

			listTests = tests.filter(function(item) {
				return item.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1
			})

			if(filters.project !== "all") {
				listTests = listTests.filter(function (item) {
					if(item.project){
						return item.project.name.toLowerCase().indexOf(filters.project.toLowerCase()) !== -1
					}
				})
			}
			if(filters.status !== "all") {
				listTests = listTests.filter(function(item) {
					return item.status.toString().toLowerCase().indexOf(filters.status.toString().toLowerCase()) !== -1
				})
			}



			state.filteredTests = listTests

			return state.filteredTests
		}
	}
}
