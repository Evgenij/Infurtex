<template>
    <div class="block-test relative z-0 flex rounded-lg bg-white mb-3 transform hover:-translate-y-1 cursor-pointer">
        <div class="preview-wrapper flex justify-center items-center rounded-lg overflow-hidden relative">
            <vs-tooltip not-arrow right>
                <div class="type-test px-2 p-1 absolute top-1.5 left-1.5 bg-white rounded-lg">
                    <i class="bx text-base"
                       :class="{
                    'bxs-directions text-green-600': type === 1,
                    'bxs-stopwatch text-slate-600': type === 2,
                    'bxs-pointer text-yellow-600': type === 3,
                    'bxs-show text-teal-600': type === 4,
                    'bxs-heart text-red-600': type === 5,
                }"></i>
                </div>
                <template v-if="type === 1" #tooltip>
                    <p class="text-sm flex items-center">Тест навигации</p>
                </template>
                <template v-else-if="type === 2" #tooltip>
                    <p class="text-sm flex items-center">Тест 5-ти секунд</p>
                </template>
                <template v-else-if="type === 3" #tooltip>
                    <p class="text-sm flex items-center">Тест 1-го нажатия</p>
                </template>
                <template v-else-if="type === 4" #tooltip>
                    <p class="text-sm flex items-center">Тест общего впечатления</p>
                </template>
                <template v-else-if="type === 5" #tooltip>
                    <p class="text-sm flex items-center">Тест предпочтения</p>
                </template>
            </vs-tooltip>
            <img :src="preview" :alt="preview" class="img-preview">
        </div>
        <div class="content flex justify-between items-center p-4 px-5">
            <div class="content__title flex flex-col w-full">
                <div class="name-wrapp flex items-center mb-4">
                    <input type="text" name="test-name" id="test-name" v-model="name"
                           class="test-name text-base font-medium w-full mr-2" disabled
                           ref="inputName"
                           @keydown.enter="saveName"
                    >
                    <div class="actions flex items-center transition"
                         :class="{hidden: !editingName}">
                        <vs-button class="min-w-max"
                                   success
                                   @click="saveName">
                            <i class="bx bx-check text-base mr-1"></i>
                            Сохранить
                        </vs-button>
                        <vs-button class="min-w-max"
                                   transparent
                                   dark
                                   @click="cancelSaveName">
                            Отменить
                        </vs-button>
                    </div>
                </div>
                <div class="test-project flex items-center p-2 py-1 w-max rounded-md bg-slate-100 text-slate-500">
                    <i class="bx bx-bookmark test-project__icon mr-1 text-sm"></i>
                    <div class="test-project__name text-xs font-medium">{{this.project_name}}</div>
                </div>
            </div>
            <div class="content__statistic statistic flex flex-col justify-center items-center w-1/3">
                <div class="statistic__wrapp flex flex-col">
                    <p class="text-sm text-black font-semibold">{{formattingNumber(respondents)}}</p>
                    <span class="text-xs text-slate-400">прошло тест</span>
                </div>
            </div>
            <div class="content__statistic info flex justify-end items-center w-1/2">
                <div class="info__status mr-3 font-medium text-sm p-2 px-3 pr-4 rounded-lg flex items-center"
                     :class="{
                        'text-indigo-600': this.status.code === 0,
                        'bg-indigo-50': status.code === 0,
                        'text-teal-600': status.code === 1,
                        'bg-teal-50': status.code === 1,
                        'text-yellow-600': status.code === 2,
                        'bg-yellow-50': status.code === 2,
                        'text-green-600': status.code === 3,
                        'bg-green-50': status.code === 3,
                        'text-slate-600': status.code === 4,
                        'bg-slate-100': status.code === 4,
                        'text-purple-600': status.code === 5,
                        'bg-purple-50': status.code === 5,
                    }">
                    <i v-if="status.code === 0" class="bx bx-git-branch mr-1 text-lg"></i>
                    <i v-else-if="status.code === 1" class="bx bx-slider-alt mr-1 text-lg"></i>
                    <i v-else-if="status.code === 2" class="bx bx-meteor mr-1 text-lg"></i>
                    <i v-else-if="status.code === 3" class="bx bx-check-circle mr-1 text-lg"></i>
                    <i v-else-if="status.code === 4" class="bx bx-pause-circle mr-1 text-lg"></i>
                    <i v-else class="bx bx-archive mr-1 text-lg"></i>
                    {{status.name}}
                </div>
                <vs-tooltip bottom shadow not-hover v-model="menuActive">
                    <div class="cursor-pointer bg-slate-100 text-slate-400
                                rounded-md hover:bg-slate-200 hover:text-slate-500 p-1 px-2 ml-3"
                         @click="menuActive=!menuActive"
                    >
                        <i class="bx bx-dots-vertical-rounded text-lg"></i>
                    </div>
                    <template #tooltip>
                        <div class="content-tooltip cursor-pointer flex flex-col py-1 rounded-lg">
                            <div class="content-tooltip__item text-slate-500 cursor-pointer flex
                                    items-center p-2 hover:bg-slate-100 rounded-lg"
                                 @mouseup="menuActive=!menuActive"
                                 @click="">
                                <i class="bx bx-play-circle text-lg mr-1"></i> Просмотреть
                            </div>
                            <div class="content-tooltip__item text-slate-500 cursor-pointer flex
                                    items-center p-2 hover:bg-slate-100 rounded-lg"
                                 @mouseup="menuActive=!menuActive"
                                 @click="editName">
                                <i class="bx bx-rename text-lg mr-1"></i> Переименовать
                            </div>
                            <div class="content-tooltip__item text-slate-500 cursor-pointer flex
                                    items-center p-2 hover:bg-slate-100 rounded-lg"
                                 @mouseup="menuActive=!menuActive"
                                 @click="">
                                <i class="bx bx-edit text-lg mr-1"></i> Изменить
                            </div>
                            <div class="content-tooltip__item text-slate-500 cursor-pointer flex
                                    items-center p-2 hover:bg-slate-100 rounded-lg"
                                 @mouseup="menuActive=!menuActive"
                                 @click="">
                                <i class="bx bx-archive text-lg mr-1"></i> Архивировать
                            </div>
                            <hr class="my-1">
                            <div class="content-tooltip__item text-red-400 cursor-pointer flex items-center p-2
                            hover:bg-red-100 hover:text-red-600 rounded-lg w-full"
                                     @click="modalDeleteTeam = !modalDeleteTeam"
                                    @mouseup="menuActive=!menuActive">
                                    <i class="bx bx-trash text-lg mr-1"></i> Удалить
                            </div>
                        </div>
                    </template>
                </vs-tooltip>
            </div>
        </div>
        <vs-dialog blur v-model="modalDeleteTeam">
            <template #header>
                <h4 class="header font-bold w-full flex flex-col py-2">
                    Вы действительно хотите удалить тест?
                </h4>
            </template>
            <div class="con-content data-team flex flex-col mb-5">
                Вся статистика и данные теста будут безвозвратно удалены
            </div>
            <template #footer>
                <footer class="footer flex justify-end">
                    <vs-button @click="activeTooltipDelete=false" @mouseup="modalDeleteTeam = !modalDeleteTeam" flat dark block>
                        Отменить
                    </vs-button>
                    <vs-button @click="activeTooltipDelete=false" @mouseup="modalDeleteTeam = !modalDeleteTeam" danger block>
                        Удалить
                    </vs-button>
                </footer>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
    export default {
        name: "block-test",
        data: () => {
            return {
                menuActive: false,
                oldName: '',
                status: {
                    name: '',
                    code: 0,
                },
                // 0 - В разработке
                // 1 - Настроен
                // 2 - Запущен
                // 3 - Завершен
                // 4 - Остоновлен
                // 5 - Архивирован

                // 1 - Тест навигации
                // 2 - Тест 5-ти секунд
                // 3 - Тест 1-го клика
                // 4 - Тест общего впечатления
                // 5 - Тест предпочтения
                project_name: '',
                visibleTooltipMenu: false,
                editingName: false,
                modalDeleteTeam: false,
                deletingTest: false
            }
        },
        props: {
            id: {
                type: Number,
            },
            name: {
                type: String,
            },
            statusTest: {
                type: Number,
            },
            respondents: {
                type: Number,
            },
            type: {
                type: Number,
            },
            projectName: {
                type: String,
            },
            preview: {
                type: String,
                default: '/storage/images/mocks/mock-preview.png'
            }
        },
        methods: {
            showTooltipMenu() {
                this.$refs.tooltip.classList.remove('hidden')
            },
            closeDeleteTooltip(){
                this.activeTooltipDelete = false
            },
            editName() {
                this.editingName = true;
                this.oldName = this.name;
                this.$refs.inputName.disabled = false;
            },
            saveName() {
                this.editingName = false;
                this.$refs.inputName.disabled = true;
            },
            cancelSaveName() {
                this.name = this.oldName;
                this.editingName = false;
                this.$refs.inputName.disabled = true;
            },
            toArchive() {
                this.status.code = 5
            }
        },
        mounted: function () {
            if (this.statusTest  ===  0) {
                this.status.code = 0;
                this.status.name = "В разработке"
            } else if (this.statusTest  ===  1) {
                this.status.code = 1;
                this.status.name = "Настроен"
            } else if (this.statusTest  ===  2) {
                this.status.code = 2;
                this.status.name = "Запущен"
            } else if (this.statusTest  ===  3) {
                this.status.code = 3;
                this.status.name = "Завершен"
            } else if (this.statusTest  ===  4) {
                this.status.code = 4;
                this.status.name = "Остановлен"
            } else {
                this.status.code = 5;
                this.status.name = "Архивирован"
            }

            if (this.projectName  ===  "") {
                this.project_name = "Без проекта"
            } else {
                this.project_name = this.projectName
            }
        },
        watch: {
            'status.code': function (val) {
                if (val  ===  0) {
                    this.status.name = "В разработке"
                } else if (val  ===  1) {
                    this.status.name = "Настроен"
                } else if (val  ===  2) {
                    this.status.name = "Запущен"
                } else if (val  ===  3) {
                    this.status.name = "Завершен"
                } else if (val  ===  4) {
                    this.status.name = "Остановлен"
                } else {
                    this.status.name = "Архивирован"
                }
            },
            'statusTest': function (val) {
                if (val  ===  0) {
                    this.status.name = "В разработке"
                } else if (val  ===  1) {
                    this.status.name = "Настроен"
                } else if (val  ===  2) {
                    this.status.name = "Запущен"
                } else if (val  ===  3) {
                    this.status.name = "Завершен"
                } else if (val  ===  4) {
                    this.status.name = "Остановлен"
                } else {
                    this.status.name = "Архивирован"
                }
            },
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    @import './resources/sass/variables';

    .block-test {
        @include default-shadow;

        &:hover {
            @include big-shadow;
            z-index: 1000;
        }
    }

    input.test-name {
        &:not(disabled) {
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 7px 10px;
        }

        &:disabled {
            border: none;
            padding: 0px 2px;
            opacity: 1;
            background-color: transparent;
        }
    }

    .preview-wrapper {
        width: 110px;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .tooltip-menu {
        @include default-shadow;
        z-index: 1000;
        border-width: 1px;
        top: 125%;
    }
</style>
