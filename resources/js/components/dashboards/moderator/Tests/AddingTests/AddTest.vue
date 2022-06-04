<template>
    <section class="relative tabs bg-white p-6 rounded-lg w-4/5 mx-auto mb-6" id="tabs">
        <div class="info-test absolute">
			<div class="info-test__panel fixed">
				<vs-tooltip right>
					<div class="wrapp-icon p-3 flex items-center">
						<i class='bx bx-detail text-white'></i>
					</div>
					<template #tooltip>
						<div class="content-tooltip">
							<h4>
								Whats is Vuesax?
							</h4>
							<p>
								Vuesax is a framework of UI components created with Vuejs
							</p>
						</div>
					</template>
				</vs-tooltip>
			</div>
        </div>
        <div class="tabs-triggers flex space-x-2 w-full font-medium">
            <div
				class="tabs-trigger w-full p-4 px-5 pl-3 rounded-lg flex items-center justify-between cursor-pointer"
                 v-for="(item, index) in tabs"
                 :class="[index+1 === activeTab ? 'tabs-trigger--active' : '']" @click="activate(index+1)">
                <div class="tab-text">
                    <span class="step-block p-2 px-3 rounded mr-3">{{index+1}} шаг</span>{{tabs[index]}}
                </div>
                <i class="bx bx-chevron-right text-xl"></i>
            </div>
        </div>
        <div class="tabs-content tab pt-5 flex flex-col space-y-8" v-if="activeTab === 1">
            <div class="tab-data grid grid-cols-2 gap-3 mt-2">
                <h2 class="col-span-2 font-medium text-base">Основные данные</h2>
				<div class="data-test col-span-2 grid grid-cols-3 gap-3">
					<div class="cell flex items-center">
						<vs-input v-model="dataTest.name" class="w-full" primary placeholder="название теста">
							<template #icon>
								<i class='bx bx-rename'></i>
							</template>
						</vs-input>
					</div>
					<div class="cell flex items-center">
						<dropdown :listItems="getProjects" @add-item="addProject" :data="dataTest.project" @changeProject="changeProject"></dropdown>
					</div>
					<div class="cell flex items-center">
						<vs-input type="date" v-model="dataTest.date" class="w-full" primary placeholder="дата окончания теста">
							<template #icon>
								<i class='bx bx-calendar'></i>
							</template>
						</vs-input>
					</div>
				</div>
                <hr class="col-span-2 my-3 mt-4">
                <div v-if="dataTest.type === 0" class="list-type-test col-span-2">
                    <h2 class="font-medium text-base mb-3">Вид теста</h2>
                    <list-test-type
						@setTestType="setTestType"></list-test-type>
                </div>
                <section-test-type v-else
								   :data-test="dataTest"
                                   @reset-type-test="resetTypeTest"
								   @changeInstruction="changeInstruction"
                                   @next-step="activate(2)"></section-test-type>
            </div>
            <hr>
            <div class="navigation-buttons flex items-center justify-center">
                <vs-button class="w-max" primary @click="activate(2)">
                    К рекрутингу
                    <i class="bx bx-chevrons-right text-lg right"></i>
                </vs-button>
            </div>
        </div>
        <div class="tabs-content tab pt-5 flex flex-col space-y-8" v-if="activeTab === 2">
			<div class="tab-data flex flex-col space-y-2 mt-2">
				<h2 class="col-span-2 font-medium text-base">Способ рекрутинга</h2>
				<div class="type-recruiting">
					<input id="general" type="radio" name="type-recruiting" class="hidden" checked>
					<label for="general"
						   class="rounded-lg border-2 border-slate-100 w-full p-4 flex items-center space-x-4 cursor-pointer">
						<div class="radio-circle border-2 rounded-full relative"></div>
						<div class="data">
							<h3 class="font-bold text-base mb-3">Всеобщая рассылка</h3>
							<div class="data__cost">
								<div class="flex">Стоимость:
									<div class="flex items-center space-x-1 text-teal-500 font-bold">
										<svg class="ml-2" width="20" height="20" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1724 0.5L14.1682 4.01778L11.0875 4.00375L11.127 4.07326L9.63764 6.72577L7.64188 3.20799L6.1135 5.93001L8.10926 9.44779L6.58089 12.1698L4.58513 8.65203L0 16.8181L9.42442 33.4298L18.6663 33.4719L16.6706 29.9542L19.7512 29.9682L21.747 33.486L24.8276 33.5L22.8318 29.9822L25.9125 29.9963L25.873 29.9267L27.3624 27.2742L29.3581 30.792L30.8865 28.07L28.8907 24.5522L30.4191 21.8302L32.4149 25.348L37 17.1819L27.5756 0.570157L18.3337 0.528063L20.3294 4.04584L17.2488 4.03181L15.2531 0.514031L12.1724 0.5ZM17.2488 4.03181L19.2446 7.54959L23.8655 7.57064L29.1875 16.9514L26.895 21.0344L28.8907 24.5522L27.3624 27.2742L25.3666 23.7564L23.8384 26.4781L20.8361 26.4644L22.8318 29.9822L19.7512 29.9682L17.7554 26.4504L13.1345 26.4294L7.81246 17.0486L10.105 12.9656L8.10926 9.44779L9.63764 6.72577L11.6334 10.2436L13.1616 7.52189L16.1639 7.53556L14.1682 4.01778L17.2488 4.03181Z" fill="#1ac4b6"/>
										</svg>
										<span>
											{{formattingNumber(6700)}}
										</span>
									</div>
								</div>
							</div>
						</div>
					</label>
				</div>
				<div class="type-recruiting">
					<input id="link" type="radio" name="type-recruiting" class="hidden">
					<label for="link"
						   class="rounded-lg border-2 border-slate-100 w-full p-4 flex items-center space-x-4 cursor-pointer">
						<div class="radio-circle border-2 rounded-full relative"></div>
						<div class="data">
							<h3 class="font-bold text-base mb-3">Прохождение по ссылке</h3>
							<div class="data__cost">
								<div class="flex">Стоимость:
									<div class="flex items-center space-x-1 text-teal-500 font-bold">
										<svg class="ml-2" width="20" height="20" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1724 0.5L14.1682 4.01778L11.0875 4.00375L11.127 4.07326L9.63764 6.72577L7.64188 3.20799L6.1135 5.93001L8.10926 9.44779L6.58089 12.1698L4.58513 8.65203L0 16.8181L9.42442 33.4298L18.6663 33.4719L16.6706 29.9542L19.7512 29.9682L21.747 33.486L24.8276 33.5L22.8318 29.9822L25.9125 29.9963L25.873 29.9267L27.3624 27.2742L29.3581 30.792L30.8865 28.07L28.8907 24.5522L30.4191 21.8302L32.4149 25.348L37 17.1819L27.5756 0.570157L18.3337 0.528063L20.3294 4.04584L17.2488 4.03181L15.2531 0.514031L12.1724 0.5ZM17.2488 4.03181L19.2446 7.54959L23.8655 7.57064L29.1875 16.9514L26.895 21.0344L28.8907 24.5522L27.3624 27.2742L25.3666 23.7564L23.8384 26.4781L20.8361 26.4644L22.8318 29.9822L19.7512 29.9682L17.7554 26.4504L13.1345 26.4294L7.81246 17.0486L10.105 12.9656L8.10926 9.44779L9.63764 6.72577L11.6334 10.2436L13.1616 7.52189L16.1639 7.53556L14.1682 4.01778L17.2488 4.03181Z" fill="#1ac4b6"/>
										</svg>
										<span>
											{{formattingNumber(1300)}}
										</span>
									</div>
								</div>
							</div>
							<div class="flex items-center w-full space-x-2">
								<input ref="linkTest" type="text" name="test-url" id="test-url" :value="this.testLink" readonly
									   class="w-full text-slate-900 border-2 border-slate-100 rounded-lg hover:border-slate-200 px-3 py-2">
								<vs-button class="min-w-fit hover:no-underline" primary @click="copyLinkTest">
									<i class="bx bx-copy text-lg left"></i>
									скопировать
								</vs-button>
							</div>
						</div>
					</label>
				</div>
				<div class="type-recruiting">
					<input id="team" type="radio" name="type-recruiting" class="hidden">
					<label for="team"
						   class="rounded-lg border-2 border-slate-100 w-full p-4 flex items-center space-x-4 cursor-pointer">
						<div class="radio-circle border-2 rounded-full relative w-full"></div>
						<div class="data">
							<h3 class="font-bold text-base mb-2">Рассылка по команде</h3>
							<div v-if="teams.length !== 0" class="list-teams w-full grid grid-cols-3 gap-3">
								<div  v-for="team in teams" class="team">
									<team-block :id="team.id" :name="team.name"
												:count_resp="team.count_resp" :cost="team.cost"></team-block>
								</div>
							</div>
							<div v-else class="text-sm empty-teams text-center text-gray-500 h-full p-2 bg-slate-50 rounded-lg border border-slate-100">
								Вы еще не создали ни одной команды респондентов. Вероятнее всего вы хотите её
								<router-link :to="{name: 'ModeratorTeams'}">
									<a href="#" class="link link-blue size-14" @click="">создать сейчас</a>
								</router-link>
							</div>
						</div>
					</label>
				</div>
			</div>
			<hr>
			<div class="navigation-buttons flex items-center justify-center">
				<vs-button class="w-max" primary @click="createTest">
					<i class="bx bx-rocket text-lg left"></i>
					Запустить тест
				</vs-button>
			</div>
        </div>
        <div class="tabs-content tab pt-5 flex flex-col space-y-3" v-if="activeTab === 3">
			<header class="flex items-center text-base font-medium my-2">
				<div class="p-2 px-3 rounded-lg flex items-center justify-center bg-yellow-500 mr-3
                shadow-lg shadow-yellow-500/50">
					<i class="bx bxs-pointer text-white text-sm"></i>
				</div>
				Тест первого клика
			</header>
			<section class="grid grid-cols-3 gap-3">
				<div class="coverage-respondents flex flex-col space-y-2 p-3 px-4 rounded-lg bg-slate-100">
					<span>Охват респондентов</span>
					<div class="count_respondents flex items-end space-x-1">
						<p class="font-bold text-2xl leading-none">{{formattingNumber(coverageRespondents)}}</p>
						<span class="text-sm text-slate-400 leading-none">чел</span>
					</div>

				</div>
				<div class="done-tests flex justify-between items-start p-3 px-4 rounded-lg bg-slate-100">
					<div class="wrapp-data flex flex-col space-y-2">
						<span>Прошло тест</span>
						<div class="count_respondents flex items-end space-x-1">
							<p class="font-bold text-2xl leading-none">{{formattingNumber(this.respondentsAnswers.length)}}</p>
							<span class="text-sm text-slate-400 leading-none">чел</span>
						</div>
					</div>
					<div class="count-percent font-bold text-3xl text-teal-500">
						{{getPercentDone()}}
					</div>
				</div>
				<div class="export-data flex flex-col space-y-2 p-3 px-4 rounded-lg bg-slate-100">
					<span>Экспорт результатов</span>
					<div class="formats-file flex w-full space-x-2">
						<div class="button flex items-center bg-red-500 hover:bg-red-600 cursor-pointer p-1 px-2
						rounded text-sm text-white font-medium">
							<i class='bx bx-export mr-1'></i>
							Экспортировать как .pdf
						</div>
					</div>
				</div>
			</section>
			<main class="pt-2">
				<manager-answers></manager-answers>
			</main>
        </div>
    </section>
</template>

<script>
    import Dropdown from "./Dropdown/Dropdown";
    import SectionTestType from "./SectionTestType";
    import ListTestType from "./ListTestType";
    import TeamBlock from "./TeamBlock";
	import listCountries from "../../../../../mocks/countries"
	import listEducations from "../../../../../mocks/usersCriteries/educations"
	import listStatusEmp from "../../../../../mocks/usersCriteries/statusEmp"
	import listIndustries from "../../../../../mocks/usersCriteries/industries"
	import listTechPrep from "../../../../../mocks/usersCriteries/techPrep"
	import ManagerAnswers from "../ManagerAnswers";
	import store from "../../../../../store/store";
	import {mapActions, mapGetters, mapMutations} from 'vuex'

    export default {
        name: "AddTest",
        components: {
            ListTestType,
            SectionTestType,
            Dropdown,
			TeamBlock,
			ManagerAnswers
        },
        data: ()=>({
            activeTab: 1,
            tabs: [
                "Построение",
                "Рекрутинг",
                "Результаты",
            ],
			dataTest: {
            	type: 3,
            	name: '24324',
				project: {
            		id: 1,
					name: ''
				},
				date: '2022-05-27',
				instruction: 'null',
				questions: [
					// {
					// 	id: this.questions.length+1,
					// 	type: 1,
					// 	text: '',
					// 	answers: []
					// }
				]
			},
			testFiles: [],
			testLink: 'https://app.usabilityhub.com/tests/2a303ea9824c/recruit',
			teams: [
				{
					id: 1,
					name: "Team's name 1",
					count_resp: 2434,
					cost: 354
				},
				{
					id: 2,
					name: "Team's name 2",
					count_resp: 34435,
					cost: 4523
				},
				{
					id: 3,
					name: "Team's name 3",
					count_resp: 204534,
					cost: 35224
				},
			],
			//stateFilter: false,
			coverageRespondents: 20458,
			respondentsAnswers: [
				{
					dataRespondent: {
						id: 1,
						country: 12,
						gender: 'male',
						age: '25',
						education: 1,
						statusEmp: 1,
						workArea: 2,
						techPrep: 3
					},
					answers: [
						{

						}
					]
				},
			],
        }),
        methods: {
        	...mapActions(['fetchProjects', 'createProject']),
			createTest(){
				let typeMailingTest = $('input[name="type-recruiting"]:checked').attr('id')

				store.dispatch('createImage', {
					test_id: data.data.id,
					path: this.path
				})
			},
            activate(index) {
                this.activeTab = index;
            },
            addProject(data) {
				this.createProject({
					name: data.input.value
				})
            },
			changeProject(data){
				this.setDataProject(data)
			},
			setDataProject(data){
				this.dataTest.project.name = data.name
				this.dataTest.project.id = data.id
			},
            addSectionTest(id){
                console.log('Test type: ', this.testType = id)
            },
			setTestType(id){
				this.dataTest.type = id
			},
            resetTypeTest(){
                this.dataTest.type = 0
                this.activate(1)
            },
			copyLinkTest(){
            	let link = this.$refs.linkTest.value
				if (link) {
					navigator.clipboard.writeText(link)
						.then(() => {
							this.openNotification('top-center', 'success', `<i class='bx bx-check'></i>`)
						})
						.catch(err => {
							console.log('Something went wrong', err);
						})
				}
			},
			openNotification(position = null, color, icon) {
				const noti = this.$vs.notification({
					icon,
					color,
					position,
					title: 'Ссылка скопирована!',
					text: `Теперь респонденты смогут добраться до вашего теста по ссылке`
				})
			},
			switchStateFilter(){
            	this.stateFilter = !this.stateFilter
			},
			getWorkAreas(){
				this.listWorkAreas.length = 0
				this.resultsFilters.workArea.length = 0
				this.listWorkAreas = listIndustries.find(item => item.id === this.industry).workAreas
			},
			getPercentDone(){
            	return (Math.ceil((this.respondentsAnswers.length / this.coverageRespondents) * 100)) + '%'
			},
			changeInstruction(text){
				this.dataTest.instruction = text
			}
        },
		mounted() {
        	this.fetchProjects()
		},
		computed: {
        	...mapGetters(['getProjects']),
			getListCountries() {
				return listCountries
			},
			getListEducations() {
				return listEducations
			},
			getListStatusEmp() {
				return listStatusEmp
			},
			getListIndustries() {
				return listIndustries
			},
			getListTechPrep(){
				return listTechPrep
			}
		},
		watch: {
			industry(){
				this.getWorkAreas()
			},
		}
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../../sass/variables";

    .info-test {
		left: -42px;
		top: 0;
		height: 100%;

		&__panel {
			top: 20%;
			background: $primary;
			border-radius: 10px 0 0 10px;
		}
    }

    .tabs {
        @include default-shadow();

        &-trigger {
            background: $gray-100;
            transition: .3s;
            color: $gray-600;

            & .step-block{
                  background: $gray-200;
                  color: $gray-600;
              }

            &--active {
                 background: $gradient;
                 color: white;

                & .step-block{
                      background: white;
                      color: $primary;
                  }
            }
        }
    }

	.type-recruiting .data {
		width: 95%;
	}

	.type-recruiting .radio-circle {
		width: 20px;
		height: 20px;

		&:before {
			content: "";
			display: inline-block;
			width: 10px;
			height: 10px;
			position: absolute;
			background: white;
			left: 3px;
			top: 3px;
			border-radius: 999px;
		}
	}

	/* Checked */
	.type-recruiting input[type=radio]:checked + label .radio-circle:before {
		background: $primary;
		//border-color: $primary;
		box-shadow: 0 0 16px 1px $primary;
	}

	/*
	.type-recruiting input[type=radio]:checked + label {
		transform: translateY(-5px);
		box-shadow: 0 18px 20px 0 #393f4e29;
	}
	*/


</style>
