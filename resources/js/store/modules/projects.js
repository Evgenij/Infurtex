import axiosClient from "../../axios";

export default {
	state: {
		projects: []
	},
	actions: {
		fetchProjects({commit}) {
			return axiosClient.get('/projects')
				.then(res=>{
					commit('updateProjects', res.data)
				})
		},
		createProject({commit}, newProject) {
			return axiosClient.post('/projects/add', newProject)
				.then(res=>{
					commit('addProject', res.data)
				})
		}
	},
	mutations: {
		updateProjects(state, projects) {
			state.projects = projects
		},
		addProject(state, newProject){
			state.projects.unshift(newProject)
		}
	},
	getters: {
		getProjects(state){
			return state.projects
		}
	}
}
