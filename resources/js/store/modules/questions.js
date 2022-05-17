import axiosClient from "../../axios";

export default {
	state: {
		questions: []
	},
	actions:{
		createQuestion({commit}, question){
			return axiosClient.post("/question", question)
				.then((res)=>{
					//console.log(res.data)
					commit("createQuestion", res.data)
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
		createQuestion(state, question){
			state.questions = [...state.questions, question.data];
		},
		updateQuestions(state, questions){
			state.questions = questions
		},
	},
	getters: {
		getQuestions(state){
			return state.questions
		}
	}
}
