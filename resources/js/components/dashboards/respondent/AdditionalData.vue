<template>
    <div class="content">
        <div class="tabs bg-white p-6 rounded-lg w-4/5 mx-auto" id="tabs">
            <div class="tabs-triggers flex space-x-2 w-full font-medium">
                <div class="tabs-trigger w-full p-4 px-5 pl-3 rounded-lg"
                     v-for="(item, index) in tabs"
                     :class="[index+1 === activeTab ? 'tabs-trigger--active' : '']">
                    <span class="step-block p-2 px-3 rounded mr-3">{{index+1}} шаг</span>{{tabs[index]}}
                </div>
            </div>
            <div class="tabs-content pt-5 flex flex-col space-y-8" v-if="activeTab === 1">
                <div class="grid grid-cols-2 gap-5">
                    <div class="col">
                        <file-loader></file-loader>
                    </div>
                    <div class="col flex items-start flex-col space-y-9 pt-6">
                        <vs-select
                            filter
                            placeholder="Название страны"
                            v-model="country"
                            label="Страна"
                            class="w-full"
                        >
                            <template v-for="(country, index) in this.getListCountries">
                                <vs-option :label="country.name_ru" :value="index+1">
                                    {{country.name_ru}} <span class="text-slate-400">&nbsp;{{country.iso_code2}}&nbsp;</span>
                                </vs-option>
                            </template>
                        </vs-select>
                        <vs-select
                            filter
                            placeholder="Ваш год рождения"
                            v-model="year"
                            label="Год рождения"
                            class="w-full"
                        >
                            <template v-for="year in this.getListYears">
                                <vs-option :label="year" :value="year">
                                    {{year}}
                                </vs-option>
                            </template>
                        </vs-select>
                        <vs-select
                            placeholder="Ваш пол"
                            v-model="gender"
                            label="Пол"
                            class="w-full"
                        >
                            <vs-option label="Мужской" value="m">
                                Мужской
                            </vs-option>
                            <vs-option label="Женский" value="f">
                                Женский
                            </vs-option>
                        </vs-select>
                    </div>
                </div>
                <hr>
                <div class="navigation-buttons flex items-center justify-center">
                    <vs-button class="w-max" primary @click="activate(2)">
                        Дальше
                        <i class="bx bx-chevrons-right text-lg right"></i>
                    </vs-button>
                </div>
            </div>
            <div class="tabs-content pt-5 flex flex-col space-y-8" v-if="activeTab === 2">
                <div class="grid gap-3 gap-y-8 grid-cols-2 pt-6">
                    <div class="cell">
                        <vs-select
                            filter
                            multiple
                            collapse-chips
                            placeholder="Ваше образование"
                            v-model="educations"
                            label="Образование"
                            class="w-full"
                        >
                            <template v-for="education in this.getListEducations">
                                <vs-option :label="education.name" :value="education.id">
                                    {{education.name}}
                                </vs-option>
                            </template>
                        </vs-select>
                    </div>
                    <div class="cell">
                        <vs-select
                            filter
                            placeholder="Трудоустройство"
                            v-model="statusEmp"
                            label="Статус трудоустройства"
                            class="w-full"
                        >
                            <template v-for="statusEmp in this.getListStatusEmp">
                                <vs-option :label="statusEmp.name" :value="statusEmp.id">
                                    {{statusEmp.name}}
                                </vs-option>
                            </template>
                        </vs-select>
                    </div>
                    <div class="cell">
                        <vs-select
                            filter
                            placeholder="Название индустрии"
                            v-model="industry"
                            label="Индустрия"
                            class="w-full"
                        >
                            <template v-for="industry in this.getListIndustries">
                                <vs-option :label="industry.name" :value="industry.id">
                                    {{industry.name}}
                                </vs-option>
                            </template>
                        </vs-select>
                    </div>
                    <div class="cell">
                        <vs-select
                            filter
                            placeholder="Название индустрии"
                            v-model="workArea"
                            label="Название проф.индустрии"
                            class="w-full"
                        >
                            <template v-for="workArea in this.listWorkAreas">
                                <vs-option :label="workArea.name" :value="workArea.id" :key="workArea.id">
                                    {{workArea.name}}
                                </vs-option>
                            </template>
                        </vs-select>
                    </div>
                    <div class="cell">
                        <vs-select
                            placeholder="Ваша техническая подготовка"
                            v-model="techPrep"
                            label="Техническая подготовка"
                            class="w-full"
                        >
                            <template v-for="techPrep in this.getListTechPrep">
                                <vs-option :label="techPrep.name" :value="techPrep.id" :key="techPrep.id">
                                    {{techPrep.name}}
                                </vs-option>
                            </template>
                        </vs-select>
                    </div>
                </div>
                <hr>
                <div class="navigation-buttons flex space-x-2 items-center justify-center">
                    <vs-button class="w-max" flat dark @click="activate(1)">
                        <i class="bx bx-chevrons-left text-lg left"></i>
                        Назад
                    </vs-button>
                    <vs-button class="w-max" success @click="activate(2)">
                        Завершить
                        <i class="bx bx-check text-lg right"></i>
                    </vs-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FileLoader from "../../FileLoader/FileLoader";
    import listCountries from "../../../mocks/countries"
    import listYears from "../../../mocks/usersCriteries/listYears"
    import listEducations from "../../../mocks/usersCriteries/educations"
    import listStatusEmp from "../../../mocks/usersCriteries/statusEmp"
    import listIndustries from "../../../mocks/usersCriteries/industries"
    import listTechPrep from "../../../mocks/usersCriteries/techPrep"

    export default {
        name: "AdditionalData",
        components: {
            FileLoader
        },
        data: ()=>({
            activeTab: 1,
            tabs: [
                "Личные данные",
                "Профессиональные данные",
            ],
            file: [],
            country: '',
            year: 0,
            gender: '',
            educations: [],
            statusEmp: '',
            industry: '',
            listWorkAreas: [],
            workArea: '',
            techPrep: ''
        }),
        methods: {
            activate(index) {
                this.activeTab = index;
            },
            getWorkAreas(){
                this.listWorkAreas.length = 0
                this.workArea = 0
                this.listWorkAreas = listIndustries.find(item => item.id === this.industry).workAreas
                return this.listWorkAreas
            }
        },
        computed: {
            getListCountries() {
                return listCountries
            },
            getListYears() {
                return listYears
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

    @import "../../../../sass/variables";

    .tabs {
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
