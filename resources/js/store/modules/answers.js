import axiosClient from "../../axios";

export default {
	state: {
		answers: []
	},
	actions:{
		createAnswer({commit}, answer){
			return axiosClient.post("/answer", answer)
				.then((res)=>{
					console.log(res.data)
					//commit("createQuestion", res.data)
					return res;
				});
			//console.log('createQuestion')
		},
		// fetchQuestions({commit}){
		// 	return axiosClient.get(`/test`)
		// 		.then((res)=>{
		// 			console.log('data tests - ', res.data.data)
		// 			commit("updateTests", res.data.data)
		// 		})
		// },
		// deleteQuestion({dispatch}, testId){
		// 	return axiosClient.delete(`/test/${testId}`)
		// 		.then((res)=>{
		// 			dispatch("fetchTests")
		// 		})
		// }
	},
	mutations: {
		createAnswer(state, answer){
			state.answers = [...state.answers, answer.data];
		},
		updateAnswers(state, answers){
			state.answers = answers
		},
	},
	getters: {
		getAnswers(state){
			return state.answers
		}
	}
}
