<template>
    <div class="root">
        <div class="sticky top-20 content__header flex justify-between items-center p-4 mb-5 bg-white rounded-lg">
            <vs-input v-model="searchTeam" primary placeholder="Поиск команд" class="w-full mr-3">
                <template #icon>
                    <i class='bx bx-search-alt'></i>
                </template>
            </vs-input>
            <vs-button class="min-w-max" @click="addingTeam" @mouseup="scrollToUp">
                <i class="bx bx-plus text-base mr-1"></i>
                Создать команду
            </vs-button>
        </div>
        <div ref="content" class="list-tests relative h-full"
             :class="{'content-is-loading': !loadingUsersData}">
            <add-team v-on:add-team="addingTeam" :usersData="dataUsers" :data-editing-team="dataEditingTeam"
                      :class="{
                    'hide': !isOpeningAddPanel,
                    'h-full': isOpeningAddPanel,
                    'mb-6': isOpeningAddPanel}" @createTeam="createTeam"></add-team>
        </div>
        <list-teams :teams="teamsList"
                    v-on:add-team="addingTeam"
                    v-on:openModalDetails="openModalDetails"
                    v-on:editTeam="editTeam">
        </list-teams>

        <!--        модалка для отображения подробных, полных данных о команде-->
        <vs-dialog blur scroll overflow-hidden :dataTeam="dataTeam" v-model="openModalTeamDetails">
            <template #header>
                <div class="header w-full flex flex-col p-2 pr-4">
                    <h4 class="text-left font-bold mb-2 text-lg">
                        {{dataTeam.name}}
                    </h4>
                    <div class="color-mark w-1/4 p-2 rounded" :style="{'background': dataTeam.color}">
                    </div>
                </div>
            </template>
            <div class="con-content data-team flex flex-col px-2">
                <div class="data-team__criteria mb-2" v-for="item in dataTeam.tags" :key="item.name" v-if="item.label !== ''">
                    <p class="data-team__label text-sm mb-2 font-medium">{{item.name}}</p>
                    <div class="data-team__list-criteria flex flex-wrap">
                        <div class="data-team__criteria mr-2 mb-2 bg-slate-100 p-1 px-2 rounded text-sm"
                             v-for="valueCriteria in item.allData" :key="valueCriteria">
                            {{valueCriteria}}
                        </div>
                    </div>
                </div>
                <figure class="coverage-respondents flex items-center justify-center mt-3">
                    <figcaption class="coverage-respondents__content flex flex-col items-center justify-center bg-teal-100 text-teal-600 rounded-full">
                        <p class="label text-sm">Охват</p>
                        <h5 class="count text-lg font-bold">{{dataTeam.respondents}}</h5>
                        <span class="text-sm font-medium">респондентов</span>
                    </figcaption>
                </figure>
            </div>
            <template #footer>
                <div class="footer flex justify-end p-2">
                    <vs-button flat dark>
                        <i class="bx bx-edit text-base mr-1"></i>
                        Редактировать
                    </vs-button>
                    <vs-button flat danger @click="openModalTeamDetails = !openModalTeamDetails">
                        <i class="bx bx-x text-base mr-1"></i>
                        Закрыть
                    </vs-button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
    import ListTeams from "./ListTeams";
    import AddTeam from "./AddTeam";
    import dataUsers from "../../../../mocks/teams/dataUsers"

    export default {
        name: "moderator-teams",
        components: {
            AddTeam,
            ListTeams,
        },
        data:() => ({
            openModalTeamDetails: false,
            searchTeam: '',
            //addTeam: false,
            isOpeningAddPanel: false,
            teams: [
                {
                    name:"Тестировщики",
                    color:"#196ed2",
                    tags:[
                        {
                            name:"Страны",
                            label:"Россия",
                            count_data:1,
                            allData:["Россия","Польша"],
                            empty:false
                        },
                        {
                            name:"Возрастной диапазон",
                            label:"18-30 лет",
                            count_data:0,
                            allData:["18-30 лет"],
                            empty:false
                        },
                        {
                            name:"Пол",
                            label:"Мужской",
                            count_data: 1,
                            allData:["Мужской", "Женский"],
                            empty:false
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true},
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        }
                    ],
                    respondents:216,
                    id:1
                },
                {
                    name:"Мед.работники",
                    color:"#b13838",
                    tags:[
                        {
                            name:"Страны",
                            label:"Россия",
                            count_data:1,
                            allData:["Россия","Польша"],
                            empty:false
                        },
                        {
                            name:"Возрастной диапазон",
                            label:"18-30 лет",
                            count_data:0,
                            allData:["18-30 лет"],
                            empty:false
                        },
                        {
                            name:"Пол",
                            label:"Мужской",
                            count_data: 1,
                            allData:["Мужской", "Женский"],
                            empty:false
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true},
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        }
                    ],
                    respondents:216,
                    id:2
                },
                {
                    name:"Студенты",
                    color:"#53b520",
                    tags:[
                        {
                            name:"Страны",
                            label:"Россия",
                            count_data:1,
                            allData:["Россия","Польша"],
                            empty:false
                        },
                        {
                            name:"Возрастной диапазон",
                            label:"18-30 лет",
                            count_data:0,
                            allData:["18-30 лет"],
                            empty:false
                        },
                        {
                            name:"Пол",
                            label:"Мужской",
                            count_data: 1,
                            allData:["Мужской", "Женский"],
                            empty:false
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true},
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        },
                        {
                            label:"",
                            count_data:"",
                            empty:true
                        }
                    ],
                    respondents:216,
                    id:3
                }
            ],
            dataUsers: [],
            dataTeam: [],
            dataEditingTeam: {},
            loadingUsersData: false
        }),
        methods: {
            openModalDetails(object) {
                this.dataTeam = object
                this.openModalTeamDetails = !this.openModalTeamDetails
            },
            createTeam(object){
                object.id = this.teams.length+1
                this.teams.push(object)
                this.clearStateAddingTeamPanel()
            },
            editTeam(object){
                this.dataEditingTeam = object
                this.getUsersData()
            },
            getUsersData() {
                this.isOpeningAddPanel = true

                const loading = this.$vs.loading({
                    target: this.$refs.content,
                    color: 'primary',
                    type: 'circles'
                })
                setTimeout(() => {
                    loading.close()
                    this.loadingUsersData = true
                    this.dataUsers = dataUsers
                }, 1500)
            },
            addingTeam(){
                if(this.isOpeningAddPanel === false){
                    this.getUsersData()
                } else {
                    this.clearStateAddingTeamPanel()
                }
            },
            scrollToUp(){
                window.scrollTo(0,0)
            },
            filterByName(query) {
                return this.teams.filter(function(item) {
                    return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
                })
            },
            filterTeams(){
                return this.filterByName(this.searchTeam)
            },
            clearStateAddingTeamPanel(){
                this.isOpeningAddPanel = false
                this.loadingUsersData = false
            }
        },
        mounted: function () {
            this.$on('openModalDetails', this.openModalDetails)
            this.$on('editTeam', this.editTeam)
        },
        computed: {
            teamsList(){
                return this.filterTeams();
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../../../sass/variables';

    .content{
        width: 1040px;

        &__header{
            z-index: 1000;
            @include default-shadow;
        }
    }

    .content-is-loading{
        .add-team {
            opacity: 0.3;
        }
    }

    .coverage-respondents{
        background: url('/store/images/map.png') no-repeat center;
        height: 300px;
        background-size: contain;

        &__content{
            width: 180px;
            height: 180px;
        }
    }
</style>
