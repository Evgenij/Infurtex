<template>
    <section class="relative tabs bg-white p-6 rounded-lg w-4/5 mx-auto mb-6" id="tabs">
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
                { value: 'Дизайн приложений', id: 1 },
                { value: 'Упаковки', id: 2 },
                { value: '123', id: 3 },
                { value: '435', id: 4 },
                { value: '57', id: 5 },
                { value: '45646', id: 6 },
            ],
            dataProject: {id:0,value:''},
            testSections: [],
            testType: 0
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
