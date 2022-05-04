<template>
    <section class="relative tabs bg-white p-6 rounded-lg w-4/5 mx-auto mb-6" id="tabs">
        <div class="general-data-test left-10 fixed rounded-lg bg-white p-3">
            13324
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
                <div class="cell flex items-center">
                    <vs-input v-model="nameTest" class="w-full" primary placeholder="название теста">
                        <template #icon>
                            <i class='bx bx-rename'></i>
                        </template>
                    </vs-input>
                </div>
                <div class="cell flex items-center">
                    <dropdown :listItems="listProjects" @add-item="addProject" :data="dataProject"></dropdown>
                </div>
                <hr class="col-span-2 my-3 mt-4">
                <div v-if="testType === 0" class="list-type-test col-span-2">
                    <h2 class="font-medium text-base mb-3">Вид теста</h2>
                    <list-test-type @add-section="addSectionTest"></list-test-type>
                </div>
                <section-test-type v-else :type-test="testType"
                                   @reset-type-test="resetTypeTest"
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
					<input id="radio-link" type="radio" name="type-recruiting" class="hidden" checked>
					<label for="radio-link"
						   class="rounded-lg border-2 border-slate-100 w-full p-3 flex items-center space-x-3 cursor-pointer">
						<div class="radio-circle border-2 rounded-full relative"></div>
						<div class="data">
							<h3 class="font-medium text-base">Прохождение по ссылке</h3>
							<div class="flex items-center w-full space-x-2">
								<input ref="linkTest" type="text" name="test-url" id="test-url" :value="this.linkTest" readonly
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
					<input id="radio-team" type="radio" name="type-recruiting" class="hidden" checked>
					<label for="radio-team"
						   class="rounded-lg border-2 border-slate-100 w-full p-3 flex items-center space-x-3 cursor-pointer">
						<div class="radio-circle border-2 rounded-full relative w-full"></div>
						<div class="data">
							<h3 class="font-medium text-base mb-2">Рассылка по команде</h3>
							<div v-if="teams.length !== 0" class="list-teams w-full grid grid-cols-3 gap-3">
								<div  v-for="team in teams" class="team">
									<team-block :id="team.id" :name="team.name" :count_resp="team.count_resp"></team-block>
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
				<vs-button class="w-max" primary @click="activate(3)">
					<i class="bx bx-rocket text-lg left"></i>
					Запустить тест
				</vs-button>
			</div>
        </div>
        <div class="tabs-content tab pt-5 flex flex-col space-y-8" v-if="activeTab === 3">
            3
        </div>
    </section>
</template>

<script>
    import Dropdown from "./Dropdown/Dropdown";
    import SectionTestType from "./SectionTestType";
    import ListTestType from "./ListTestType";
    import TeamBlock from "./TeamBlock";

    export default {
        name: "AddTest",
        components: {
            ListTestType,
            SectionTestType,
            Dropdown,
			TeamBlock
        },
        data: ()=>({
            activeTab: 2,
            tabs: [
                "Построение",
                "Рекрутинг",
                "Результаты",
            ],
            nameTest: '',
            listProjects: [
                { value: 'Дизайн приложений', id: 1 },
                { value: 'Упаковки', id: 2 },
                { value: '123', id: 3 },
                { value: '435', id: 4 },
                { value: '57', id: 5 },
                { value: '45646', id: 6 },
            ],
            dataProject: {id:0,value:''},
            testSections: [],
            testType: 0,
			linkTest: 'https://app.usabilityhub.com/tests/2a303ea9824c/recruit',
			teams: [
				// {
				// 	id: 1,
				// 	name: "Team's name 1",
				// 	count_resp: 20434
				// },
				// {
				// 	id: 2,
				// 	name: "Team's name 2",
				// 	count_resp: 34435
				// },
				// {
				// 	id: 3,
				// 	name: "Team's name 3",
				// 	count_resp: 20434534
				// },
			]
        }),
        methods: {
            activate(index) {
                this.activeTab = index;
            },
            addProject(data) {
                let nameNewProject = data.input.value
                let idNewProject = data.listProjects.length+1
                this.listProjects.push({
                    value: nameNewProject,
                    id:  idNewProject
                })
                this.dataProject.value = nameNewProject
                this.dataProject.id = idNewProject
            },
            addSectionTest(id){
                console.log('Test type: ', this.testType = id)
            },
            resetTypeTest(){
                this.testType = 0
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
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../../sass/variables";

    .general-data-test{
        @include default-shadow();
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
		box-shadow: 0 0 10px 1px $primary;
	}


</style>
