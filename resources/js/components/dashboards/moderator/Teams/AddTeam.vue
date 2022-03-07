<template>
    <div class="add-team p-5 px-7 bg-white rounded-lg">
        <div class="add-team__header font-medium mb-5">
            <div class="title flex justify-between items-center">
                <h1 class="font-medium text-lg">Создание команды</h1>
                <vs-button class="min-w-max" flat dark
                           v-on:click="switchAddTeam"
                           size="small">
                    Отменить создание
                    <i class="bx bx-x text-lg ml-1"></i>
                </vs-button>
            </div>
            <div class="subtitle text-slate-400 text-sm">
                Выберите критерии для создания выборки респондентов для команды
            </div>
        </div>
        <div class="add-team__content flex w-full">
            <div class="column flex flex-col w-full">
                <div class="row grid grid-cols-2 gap-3 pt-10 w-full">
                    <vs-input label="Название команды"
                              v-model="nameTeam.val"
                              placeholder="введите название команды"
                              primary
                              class="flex-1">
                        <template v-if="nameTeam.error" #message-danger>
                            введите название команды
                        </template>
                    </vs-input>
                    <div class="color-picker relative flex flex-1">
                        <span class="color-picker__label absolute text-sm">Цвет команды</span>
                        <label for="color-team" class="color-picker__box-color w-full cursor-pointer
                         relative flex items-center rounded-lg">
                            <span class="z-10 text-sm text-white opacity-60 pl-3">Нажмите, чтобы изменить цвет</span>
                            <input type="color" id="color-team" class="absolute cursor-pointer" v-model="color">
                        </label>
                    </div>
                </div>
                <div class="row grid grid-cols-2 gap-3 pt-10 w-full">
                    <vs-select
                        filter
                        multiple
                        collapse-chips
                        placeholder="Название страны"
                        v-model="country.val"
                        label="Страна"
                        class="w-full"
                        v-if="this.getListCountry.length > 0"
                    >
                        <template v-for="country in this.getListCountry">
                            <vs-option :label="country.name" :value="country.name">
                                {{country.name}} <span class="text-slate-400">&nbsp;&ndash;&nbsp;{{formattingNumber(country.count_respondents)}}</span>
                            </vs-option>
                        </template>
                    </vs-select>
                    <vs-select
                        placeholder="Выберите пол"
                        v-model="gender.val"
                        label="Пол"
                        multiple
                        filter
                        v-if="this.getListGenders.length > 0"
                    >
                        <template v-for="(gender,index) in this.getListGenders">
                            <vs-option :label="gender.name" :value="gender.name">
                                {{gender.name}}
                                <!--                                <span class="text-slate-400">&nbsp;&ndash;&nbsp;{{gender.count_respondents}}</span>-->
                            </vs-option>
                        </template>
                    </vs-select>
                </div>
                <div class="row grid grid-cols-1 gap-3 pt-5 w-full">
                    <range-slider class="mt-2" @age-count-resp="changeCountRespondents" :list_ages="listUsersData"></range-slider>
                </div>
                <div class="row grid grid-cols-2 gap-3 pt-10 w-full">
                    <vs-select
                        multiple
                        collapse-chips
                        placeholder="выберите из списка"
                        v-model="education.val"
                        filter
                        label="Образование"
                        class="w-full"
                        v-if="this.getListEducations.length > 0"
                    >
                        <template v-for="education in this.getListEducations">
                            <vs-option :label="education.name" :value="education.name">
                                {{education.name}}
                                <!--                                <span class="text-slate-400">&nbsp;&ndash;&nbsp;{{education.count_respondents}}</span>-->
                            </vs-option>
                        </template>
                    </vs-select>
                    <vs-select
                        multiple
                        collapse-chips
                        placeholder="выберите из списка"
                        v-model="statusEmp.val"
                        filter
                        label="Статус трудоустройства"
                        class="w-full"
                        v-if="this.getListStatusEmp.length > 0"
                    >
                        <template v-for="status in this.getListStatusEmp">
                            <vs-option :label="status.name" :value="status.name">
                                {{status.name}}
                                <!--                                <span class="text-slate-400">&nbsp;&ndash;&nbsp;{{status.count_respondents}}</span>-->
                            </vs-option>
                        </template>
                    </vs-select>
                </div>
                <div class="row grid grid-cols-2 gap-3 pt-10 w-full">
                    <vs-select
                        filter
                        multiple
                        collapse-chips
                        placeholder="выберите из списка"
                        v-model="industry.val"
                        label="Индустрия"
                        class="w-full"
                        v-if="this.getListIndustries.length > 0"
                    >
                        <template v-for="industry in this.getListIndustries">
                            <vs-option :label="industry.name" :value="industry.name">
                                {{industry.name}}
                            </vs-option>
                        </template>
                    </vs-select>
                    <vs-select
                        :disabled="this.filtered_work_area.length === 0"
                        placeholder="выберите из списка"
                        v-model="workArea.val"
                        label="Проф.область"
                        class="w-full"
                        :class="{
                            'cursor-not-allowed': this.filtered_work_area.length === 0
                        }"
                        ref="work_area"
                        multiple
                        filter
                        collapse-chips
                    >
                        <template v-for="area in this.filtered_work_area">
                            <vs-option :label="area.name" :value="area.name">
                                {{area.name}}
                                <!--                                <span class="text-slate-400">&nbsp;&ndash;&nbsp;{{area.count_respondents}}</span>-->
                            </vs-option>
                        </template>
                    </vs-select>
                </div>
                <div class="row grid grid-cols-2 gap-3 pt-10 w-full">
                    <vs-select
                        collapse-chips
                        multiple
                        placeholder="выберите из списка"
                        v-model="techPrep.val"
                        filter
                        label="Техническая подготовка"
                        class="w-full"
                        v-if="this.getListTechPrep.length > 0"
                    >
                        <template v-for="techPrep in this.getListTechPrep">
                            <vs-option :label="techPrep.name" :value="techPrep.name">
                                {{techPrep.name}}
                                <!--                                <span class="text-slate-400">&nbsp;&ndash;&nbsp;{{techPrep.count_respondents}}</span>-->
                            </vs-option>
                        </template>
                    </vs-select>
                </div>
            </div>
            <div class="column line relative px-6"></div>
            <div class="column chart w-1/2">
                <div class="chart chart_content sticky top-48">
                    <div class="chart__header mb-6">
                        <h3 class="font-medium mb-4">Охват респондентов</h3>
                        <div class="chart__panels grid grid-cols-2 gap-3">
                            <div class="panel rounded-lg bg-teal-500 flex flex-col items-center p-3">
                                <div class="value text-white">{{formattingNumber(this.ageCountRespondents.val)}}</div>
                                <div class="label text-sm text-teal-200 leading-4">охват</div>
                            </div>
                            <div class="panel rounded-lg bg-slate-100 flex flex-col items-center p-3">
                                <div class="value text-black">{{formattingNumber(this.generalCountRespondents)}}</div>
                                <div class="label text-sm text-slate-400 leading-4">всего</div>
                            </div>
                        </div>
                    </div>
                    <template>
                        <vc-donut
                            background="white" foreground="#ccc"
                            :size="250" unit="px" :thickness="45"
                            :sections="chartSections" :total="100"
                            :start-angle="0" :auto-adjust-text-size="true"
                            :has-legend="false">
                            <h1 class="text-2xl">{{this.percentRespondents}}%</h1>
                        </vc-donut>
                    </template>
                </div>
            </div>
        </div>
        <div class="add-team__footer border-t-2 border-slate-100 mt-8 pt-6 pb-1 flex justify-between">
            <div class="footer-content flex items-center">
                <div class="footer-content__text flex flex-col mr-6">
                    <div class="footer-content__title font-medium text-lg">Стоимость создания команды</div>
                    <div class="footer-content__subtitle text-slate-500 text-sm">Фиксированная сумма для каждой рассылки</div>
                </div>
                <div class="cost-data flex">
                    <div class="footer-content__cost flex items-center py-3 px-4 rounded-lg mr-2">
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21156 0L10.7219 2.55839L8.39058 2.54818L8.42042 2.59874L7.29335 4.52783L5.78304 1.96945L4.62643 3.9491L6.13674 6.50749L4.98013 8.48714L3.46983 5.92875L0 11.8677L7.13199 23.949L14.1259 23.9796L12.6156 21.4212L14.9468 21.4314L16.4572 23.9898L18.7884 24L17.2781 21.4416L19.6094 21.4518L19.5796 21.4013L20.7067 19.4722L22.217 22.0306L23.3736 20.0509L21.8633 17.4925L23.0199 15.5129L24.5302 18.0713L28 12.1323L20.868 0.0510232L13.8741 0.0204093L15.3844 2.5788L13.0532 2.56859L11.5429 0.0102046L9.21156 0ZM13.0532 2.56859L14.5635 5.12698L18.0604 5.14229L22.0879 11.9647L20.353 14.9341L21.8633 17.4925L20.7067 19.4722L19.1963 16.9138L18.0399 18.8932L15.7678 18.8832L17.2781 21.4416L14.9468 21.4314L13.4365 18.873L9.93961 18.8577L5.91213 12.0354L7.64704 9.06587L6.13674 6.50749L7.29335 4.52783L8.80365 7.08622L9.96011 5.10683L12.2322 5.11677L10.7219 2.55839L13.0532 2.56859Z" fill="#14B8A6"/>
                        </svg>
                        <span class="cost font-semibold ml-2">{{formattingNumber(this.cost)}}</span>
                    </div>
                    <vs-tooltip>
                        <div class="data-icon bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-500 flex items-center justify-center h-full px-3 rounded-lg">
                            <i class="bx bxs-pie-chart-alt-2"></i>
                        </div>
                        <template #tooltip>
                            <div class="content-tooltip cost-list flex flex-col items-start p-1">
                                <table class="table-auto">
                                    <thead>
                                    <tr>
                                        <th>Критерий</th>
                                        <th>Значение</th>
                                        <th>Стоимость</th>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="my-1 opacity-20">
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Страна</td>
                                        <td>{{formattingNumber(country.val.length)}}</td>
                                        <td>{{formattingNumber(country.cost)}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="opacity-5">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Пол</td>
                                        <td>{{formattingNumber(gender.val.length)}}</td>
                                        <td>{{formattingNumber(gender.cost)}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="opacity-5">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Возрастная выборка</td>
                                        <td>{{formattingNumber(ageCountRespondents.val)}}</td>
                                        <td>{{formattingNumber(ageCountRespondents.cost)}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="opacity-5">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Образование</td>
                                        <td>{{formattingNumber(education.val.length)}}</td>
                                        <td>{{formattingNumber(education.cost)}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="opacity-5">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Статус труд.</td>
                                        <td>{{formattingNumber(statusEmp.val.length)}}</td>
                                        <td>{{formattingNumber(statusEmp.cost)}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="opacity-5">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Проф.область</td>
                                        <td>{{formattingNumber(workArea.val.length)}}</td>
                                        <td>{{formattingNumber(workArea.cost)}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="opacity-5">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Техн.подготовка</td>
                                        <td>{{formattingNumber(techPrep.val.length)}}</td>
                                        <td>{{formattingNumber(techPrep.cost)}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <hr class="my-1 opacity-20">
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>Итого</th>
                                        <th colspan="2" style="text-align: right">{{cost}}</th>
                                    </tr>
                                    </tfoot>
                                </table>
                                <!--                                <div class="cost-list__item flex items-center">-->
                                <!--                                    <i class="bx bxs-pie-chart-alt-2 mr-1"></i>-->
                                <!--                                    5654654654-->
                                <!--                                </div>-->
                            </div>
                        </template>
                    </vs-tooltip>
                </div>
            </div>
            <div class="footer-button flex flex-col items-end">
                <vs-button class="w-max" success @click="createTeam">
                    <i class="bx bx-check text-lg mr-1"></i>
                    <template v-if="Object.keys(this.dataEditingTeam).length === 0">
                        Создать команду
                    </template>
                    <template v-else>
                        Редактировать команду
                    </template>
                </vs-button>
                <div v-if="errors.status" class="flex items-center text-sm text-red-600">
                    <i class="bx bx-info-circle text-lg mr-1"></i>
                    {{errors.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RangeSlider from "../../../RangeSlider";
    import {getCountUniqueData, getNameIndustryById, getListObjects, formattingNumber} from "../../../../utilities/utilities";
    import Mode from '../../../../enums'

    export default {
        name: "AddTeam",
        components: {
            RangeSlider,
        },
        props: {
            usersData: {
                type: Array,
                required: true
            },
            dataEditingTeam:{
                type: Object
            }
        },
        data: () => ({
            chartSections: [
                { value: 0, color: '#14B8A6'},
                { value: 100, color: '#EAEAF2'}
            ],
            listUsersData: [],
            filterUsersData: {},
            cost: 0,
            countRespondents: 0,
            generalCountRespondents: 0,
            percentRespondents: 0,
            ageCountRespondents: {
                val: 0,
                cost: 0,
                startAge: 18,
                endAge: 30
            },
            ratioObjects: {
                country: 0.1,
                gender: 0.05,
                education: 0.05,
                statusEmp: 0.03,
                workArea: 0.01,
                techPrep: 0.03,
                respondents: 0.05
            },
            //addTeam: false,
            errors: {
                name: 'Проверьте заполненные данные',
                status: false
            },
            nameTeam: {
                val: 'Название команды',
                error: false
            },
            color: '#0f9653',
            country: {
                val: [],
                listCountRespondents: [],
                resp: 0,
                cost: 0
            },
            gender: {
                val: [],
                listCountRespondents: [],
                resp: 0,
                cost: 0
            },
            education: {
                val: [],
                listCountRespondents: [],
                resp: 0,
                cost: 0
            },
            statusEmp: {
                val: [],
                listCountRespondents: [],
                resp: 0,
                cost: 0
            },
            industry: {
                val: [],
                resp: 0,
                cost: 0
            },
            workArea: {
                arrayWorkAreas: [],
                val: [],
                listCountRespondents: [],
                resp: 0,
                cost: 0
            },
            filtered_work_area: [],
            techPrep: {
                val: [],
                listCountRespondents: [],
                resp: 0,
                cost: 0
            },
            modeWork: Mode.Add,
        }),
        methods:{
            switchAddTeam(){
                this.$emit('add-team');
                //(dataUsers)
            },
            openNotification(position = null, color, icon) {
                const noti = this.$vs.notification({
                    icon,
                    color,
                    position,
                    title: 'Команда добавлена!',
                    text: `Добавлена команда для дальнейшей рассылки тестов`
                })
            },
            filterListWorkArea(){
                let resultList = [];

                // clearing array for adding new values
                this.workArea.val.length = 0
                this.filtered_work_area.length = 0;

                this.industry.val.forEach((item)=>{
                    this.filtered_work_area.push(this.workArea.arrayWorkAreas.filter(function(object) {
                        return object.nameInd === item
                    }))
                })

                // filling array filtered values
                this.filtered_work_area.forEach((array)=>{
                    array.forEach((item)=>{
                        resultList.push(item)
                    })
                })
                this.filtered_work_area = resultList
            },
            calculatedCostTeam(){
                this.cost = this.country.cost +
                    this.gender.cost +
                    this.education.cost +
                    this.statusEmp.cost +
                    this.workArea.cost +
                    this.techPrep.cost +
                    this.ageCountRespondents.cost;

                this.calculatedCountRespondents()
                this.changingChartValues()
            },
            changingChartValues(){
                this.percentRespondents = (100 / (this.generalCountRespondents / this.countRespondents)).toFixed(1)
                this.chartSections[0].value= Number(this.percentRespondents)
                this.chartSections[1].value= 100-this.percentRespondents
            },
            calculatedCostObject(object, list, ratio){
                let listResults= [];
                let countResp = 0;

                object.val.forEach((item)=>{
                    //(item)
                    listResults.push(list.filter(function(listItem) {
                        return listItem.name === item
                    }))
                })

                listResults.forEach((item)=>{
                    try {
                        countResp += item[0].count_respondents;
                    } catch (e) {
                        console.error(e)
                    }
                })

                object.cost = Math.round(listResults.length * countResp * ratio)
                object.resp = countResp;
                this.calculatedCostTeam()
            },
            calculatedCountRespondents(){
                this.countRespondents = this.ageCountRespondents.val
            },
            changeCountRespondents(countRespondents){
                this.ageCountRespondents.val = countRespondents.count
                this.ageCountRespondents.startAge = countRespondents.startAge
                this.ageCountRespondents.endAge = countRespondents.endAge
                this.calculatedCostTeam()
            },
            filteredListUsersData(){
                const applyFilter = (data, filter) => data.filter(obj =>
                    Object.entries(filter).every(([prop, find]) => find.includes(obj[prop]))
                );
                this.listUsersData = applyFilter(this.$props.usersData, this.filterUsersData)
            },
            addingFilterItem(key, val){
                if(val.length !== 0){
                    this.filterUsersData[key]=val
                } else {
                    delete this.filterUsersData[key]
                }
                this.filteredListUsersData()
            },
            gettingUsersData(){
                this.listUsersData = this.$props.usersData
                this.generalCountRespondents = this.$props.usersData.length
                this.setWorkAreas();
            },
            setWorkAreas(){
                this.listUsersData.forEach((item)=>{
                    this.workArea.arrayWorkAreas.push({name: item.workArea, nameInd: item.industry})
                })

                this.workArea.arrayWorkAreas = this.workArea.arrayWorkAreas.reduce((acc, item) => {
                    if (acc.map[item.name]) // если данный город уже был
                        return acc; // ничего не делаем, возвращаем уже собранное

                    acc.map[item.name] = true; // помечаем город, как обработанный
                    acc.uniqueArrWorksAreas.push(item); // добавляем объект в массив городов
                    return acc; // возвращаем собранное
                }, {
                    map: {}, // здесь будут отмечаться обработанные города
                    uniqueArrWorksAreas: [] // здесь конечный массив уникальных городов
                }).uniqueArrWorksAreas; // получаем конечный массив
            },
            createTeam(){
                if(this.modeWork === Mode.Add) {
                    if (this.checkDataTeam()) {
                        let tags = []
                        //добавление данных по странам
                        tags.push(this.addTagToTeam(this.country, 'Страны', 'Все страны', false))
                        //добавление данных по возрастам
                        tags.push({
                            name: 'Возрастной диапазон',
                            label: this.ageCountRespondents.startAge.toString() + '-' + this.ageCountRespondents.endAge.toString() + ' лет',
                            count_data: 0,
                            allData: [this.ageCountRespondents.startAge.toString() + '-' + this.ageCountRespondents.endAge.toString() + ' лет'],
                            empty: false
                        })
                        //добавление данных по полу
                        tags.push(this.addTagToTeam(this.gender, 'Пол', 'Любой пол', false))
                        //добавление данных по статусу трудоустройства
                        tags.push(this.addTagToTeam(this.statusEmp, 'Статус трудоустройства'))
                        //добавление данных по образованию
                        tags.push(this.addTagToTeam(this.education, 'Образование'))
                        //добавление данных по профессиональной деятельности
                        tags.push(this.addTagToTeam(this.workArea, 'Профессиональная деятельность'))
                        //добавление данных по уровню техн.подготовки
                        tags.push(this.addTagToTeam(this.techPrep, 'Техническая подготовка'))

                        let newTeam = {
                            name: this.nameTeam.val,
                            color: this.color,
                            tags: tags,
                            respondents: this.ageCountRespondents.val
                        }

                        this.openNotification('top-center', 'success', `<i class='bx bx-check'></i>`)
                        this.$emit('createTeam', newTeam)
                    }
                } else {
                    this.clearDataTeam()
                    this.modeWork = Mode.Add
                }
            },
            addTagToTeam(object, nameCriteria, labelDefault='', emptyFlag=true){
                let allData = []
                if (object.val.length !== 0){
                    object.val.forEach((item) => {
                        allData.push(item)
                    })

                    return {
                        name: nameCriteria,
                        label: object.val.length === 0 ? labelDefault : object.val[0],
                        count_data: object.val.length === 0 ? '' : object.val.length - 1,
                        allData: allData,
                        empty: false
                    }
                }

                allData.push(labelDefault)
                return {
                    name: nameCriteria,
                    label: object.val.length === 0 ? labelDefault : object.val[0],
                    count_data: object.val.length === 0 ? '' : object.val.length - 1,
                    allData: allData,
                    empty: emptyFlag
                }

            },
            checkDataTeam(){
                let resultValidation = true
                if(this.nameTeam.val === undefined || this.nameTeam.val === ''){
                    this.nameTeam.error = true
                    this.errors.status = true
                    resultValidation = false
                } else {
                    this.nameTeam.error = false
                    this.errors.status = false
                }
                return resultValidation
            },
            clearDataTeam(){
                this.dataEditingTeam = {}
            }
        },
        watch: {
            color(val){
                this.colors = val
            },
            'industry.val'(){
                this.addingFilterItem('workArea', [])
                this.filterListWorkArea()
                //this.calculatedCostObject(this.workArea, this.workArea.listCountRespondents, this.ratioObjects.workArea)
            },
            'country.val'(val){
                this.addingFilterItem('country', val)
                this.calculatedCostObject(this.country, this.country.listCountRespondents, this.ratioObjects.country)
            },
            'gender.val'(val){
                this.addingFilterItem('gender', val)
                this.calculatedCostObject(this.gender, this.gender.listCountRespondents, this.ratioObjects.gender)
            },
            'statusEmp.val'(val) {
                this.addingFilterItem('statusEmp', val)
                this.calculatedCostObject(this.statusEmp, this.statusEmp.listCountRespondents, this.ratioObjects.statusEmp)
            },
            'workArea.val'(val) {
                this.addingFilterItem('workArea', val)
                this.calculatedCostObject(this.workArea, this.workArea.listCountRespondents, this.ratioObjects.workArea)
            },
            'techPrep.val'(val) {
                this.addingFilterItem('techPrep', val)
                this.calculatedCostObject(this.techPrep, this.techPrep.listCountRespondents, this.ratioObjects.techPrep)
            },
            'education.val'(val) {
                this.addingFilterItem('education', val)
                this.calculatedCostObject(this.education, this.education.listCountRespondents, this.ratioObjects.education)
            },
            'ageCountRespondents.val'(val) {
                this.ageCountRespondents.cost = Math.round(val * this.ratioObjects.respondents)
                this.calculatedCostTeam()
            },
            usersData(){
                //alert('loading complete')
                this.gettingUsersData()
            },
            dataEditingTeam(object){
                console.log(object)
                this.modeWork = Mode.Edit
                this.nameTeam.val = object.name
                this.color = object.color
                this.country.val = object.tags[0].allData
                this.gender.val = object.tags[2].allData
                this.statusEmp.val = object.tags[3].allData
                this.education.val = object.tags[4].allData
                this.workArea.val = object.tags[5].allData
                this.techPrep.val = object.tags[6].allData
            }
        },
        computed: {
            getListCountry(){
                //alert('111')
                return this.country.listCountRespondents = getListObjects(this.$props.usersData, 'country')
            },
            getListGenders(){
                return this.gender.listCountRespondents = getListObjects(this.$props.usersData, 'gender')
            },
            getListEducations(){
                return this.education.listCountRespondents = getListObjects(this.$props.usersData, 'education')
            },
            getListStatusEmp(){
                return this.statusEmp.listCountRespondents = getListObjects(this.$props.usersData, 'statusEmp')
            },
            getListWorkAreas(){
                return this.workArea.listCountRespondents = getListObjects(this.$props.usersData, 'workArea')
            },
            getListIndustries(){
                return this.industry.listCountRespondents = getListObjects(this.$props.usersData, 'industry')
            },
            getListTechPrep(){
                return this.techPrep.listCountRespondents = getListObjects(this.$props.usersData, 'techPrep')
            },
            getFilteredWorksArea(){
                return this.filtered_work_area
            }
        },
        mounted: function () {
        }
    }
</script>

<style lang="scss" scoped>

    @import '../../../../../sass/variables';

    td, th{
        padding-right: 16px;
        text-align: left;
    }

    .add-team {
        @include default-shadow;

        &.hide{
            padding: 0;
            opacity: 0;
            display: none;
            height: 0;
        }
    }

    .column.line:before{
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        background: #e7e7e7;
        left: 50%;
        top: 0;
    }

    .color-picker{
        &__label{
            top: -25px;
            left: 6px;
        }
    }
    .footer-content__cost{
        background: transparentize($primary, 0.84);

        .cost{
            color: $primary
        }
    }

    input[type="color"] {
        -webkit-appearance: none;
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        overflow: hidden;
        outline: none;
        cursor: inherit;
    }

    /* -webkit */
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    input[type="color"]::-webkit-color-swatch {
        border: none;
    }

    /* firefox */
    input[type=color]::-moz-focus-inner {
        border: none;
        padding: 0;
    }

    input[type=color]::-moz-color-swatch {
        border: none;
    }

</style>
