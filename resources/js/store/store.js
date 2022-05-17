import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import projects from "./modules/projects";
import tests from "./modules/tests";
import questions from "./modules/questions";
import answers from "./modules/answers";

Vue.use(Vuex)

export default new Vuex.Store({
	state:{},
	getters:{},
	actions:{},
	mutations:{},
	modules: {
		user,
		projects,
		tests,
		questions,
		answers
	},
})
