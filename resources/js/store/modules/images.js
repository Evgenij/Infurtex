import axiosClient from "../../axios";

export default {
	state: {
		image: ''
	},
	actions:{
		createImage({commit}, image){
			return axiosClient.post("/image", image)
				.then((res)=>{
					//console.log(res.data)
					commit("createImage", res.data)
					return res;
				});
		},
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
		getImage(state){
			return state.image
		}
	}
}
