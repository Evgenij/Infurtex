<template>
    <section class="relative tabs bg-white p-6 rounded-lg w-4/5 mx-auto" id="tabs">
        <div class="general-data-test left-10 fixed rounded-lg bg-white p-3">
            13324
        </div>
        <div class="tabs-triggers flex space-x-2 w-full font-medium">
            <div class="tabs-trigger w-full p-4 px-5 pl-3 rounded-lg flex items-center justify-between"
                 v-for="(item, index) in tabs"
                 :class="[index+1 === activeTab ? 'tabs-trigger--active' : '']">
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
<!--                    <div class="projects relative w-full">-->
<!--                        <vs-input v-model="projectName" primary placeholder="проект" @focus="switchListProjects">-->
<!--                            <template #icon>-->
<!--                                <i class='bx bx-folder'></i>-->
<!--                            </template>-->
<!--                        </vs-input>-->
<!--                        <div v-if="openListProjects"-->
<!--                             class="absolute z-10 project-list flex flex-col space-y-1 mt-1 p-1 w-full border-2 border-slate-100 top-full bg-white rounded-lg"-->
<!--                            @mouseleave="switchListProjects">-->
<!--                            <div v-for="project in filteredProjects"-->
<!--                                 class="roject-list__item text-sm p-2 px-3 hover:bg-gray-100 cursor-pointer rounded-lg"-->
<!--                                @click="switchListProjects">-->
<!--                                {{project.name}}-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <vs-button success v-if="!searchedProjects && this.projectId === ''" class="min-w-max" @click="addProject">-->
<!--                        <i class='bx bx-plus left'></i> Добавить-->
<!--                    </vs-button>-->
<!--                    <vs-button dark flat v-if="this.projectId !== ''" class="min-w-max" @click="resetProject">-->
<!--                        <i class='bx bx-x'></i>-->
<!--                    </vs-button>-->
                    <dropdown :data-list="listProjects" :add-item="addProject"></dropdown>
                </div>
                <hr class="col-span-2 my-3 mt-4">
                <div v-if="testType === 0" class="list-type-test col-span-2">
                    <h2 class="font-medium text-base mb-3">Вид теста</h2>
                    <list-test-type @add-section="addSectionTest"></list-test-type>
                </div>
                <section-test-type v-else :type-test="testType"></section-test-type>
            </div>
            <hr>
            <div class="navigation-buttons flex items-center justify-center">
                <vs-button class="w-max" primary @click="activate(2)">
                    К рекрутингу
                    <i class="bx bx-chevrons-right text-lg right"></i>
                </vs-button>
            </div>
        </div>
        <div class="tabs-content pt-5 flex flex-col space-y-8" v-if="activeTab === 2">
            2
        </div>
        <div class="tabs-content pt-5 flex flex-col space-y-8" v-if="activeTab === 3">
            3
        </div>
    </section>
</template>

<script>
    import Dropdown from "./Dropdown/Dropdown";
    import SectionTestType from "./SectionTestType";
    import ListTestType from "./ListTestType";

    export default {
        name: "AddTest",
        components: {
            ListTestType,
            SectionTestType,
            Dropdown
        },
        data: ()=>({
            activeTab: 1,
            tabs: [
                "Построение",
                "Рекрутинг",
                "Результаты",
            ],
            nameTest: '',
            listProjects: [
                { name: 'Дизайн приложений', value: 1 },
                { name: 'Упаковки', value: 2 },
                { name: '123', value: 3 },
                { name: '435', value: 4 },
                { name: '57', value: 5 },
                { name: '45646', value: 6 },
            ],
            testSections: [],
            testType: 0

        }),
        methods: {
            activate(index) {
                this.activeTab = index;
            },
            addProject(item) {
                console.log(item)
                // let nameNewProject = document.getElementById('vs-input--20').value
                // let idNewProject = this.listProjects.length+1
                // this.listProjects.push({
                //     name: nameNewProject,
                //     value:  idNewProject
                // })
                // this.projectName = nameNewProject
                // this.projectId = idNewProject
                //
                // this.switchListProjects()
            },
            addSectionTest(id){
                console.log('Test type: ', this.testType = id)
            }
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
</style>
