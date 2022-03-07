<template>
    <div class="list-tests">
        <div class="sticky top-20 content__header flex justify-between items-center p-4 mb-5 bg-white rounded-lg">
            <vs-input v-model="searchTest" placeholder="Поиск тестов" class="w-full mr-3">
                <template #icon>
                    <i class='bx bx-search-alt'></i>
                </template>
            </vs-input>
            <vs-select
                placeholder="Все проекты"
                v-model="filterProjectTest"
                class="mr-3"
            >
                <vs-option label="Все проекты" value="all">
                    Все проекты
                </vs-option>
                <template v-for="project in tests" v-if="project.project_name != '' && project.project_name != 'Название проекта'">
                    <vs-option :label="project.project_name" :value="project.project_name">
                        {{project.project_name}}
                    </vs-option>
                </template>
            </vs-select>
            <vs-select
                placeholder="Любой статус"
                v-model="filterStatusTest"
                class="mr-3"
            >
                <vs-option label="Любой статус" value="all">
                    Любой статус
                </vs-option>
                <vs-option label="В разработке" value="0">
                    В разработке
                </vs-option>
                <vs-option label="Настроен" value="1">
                    Настроен
                </vs-option>
                <vs-option label="Запущен" value="2">
                    Запущен
                </vs-option>
                <vs-option label="Завершен" value="3">
                    Завершен
                </vs-option>
                <vs-option label="Остановлен" value="4">
                    Остановлен
                </vs-option>
                <vs-option label="Архивирован" value="5">
                    Архивирован
                </vs-option>
            </vs-select>
            <router-link :to="{name: 'ModeratorAddingTest'}">
                <vs-button class="min-w-max">
                    <i class="bx bx-plus text-base mr-1"></i>
                    Создать тест
                </vs-button>
            </router-link>
        </div>

        <div ref="content" class="list-tests relative h-full"
             :class="{'content-is-loading': !loadingTests}">
            <div class="wrapp-list" v-if="this.testsList.length > 0">
                <transition-group
                    v-bind:css="false"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    name="staggered-fade">
                    <block-test v-if="loadingTests" v-for="test in testsList" :key="test.id"
                                :id="test.id"
                                :name="test.name" :status-test="test.status_test"
                                :respondents="test.respondents" :type="test.type"
                                :project-name="test.project_name"
                                :preview="test.preview">
                    </block-test>
                </transition-group>
            </div>
            <div class="empty-tests text-center text-gray-500 h-full py-44" v-else>
                Тестов не найдено... Попробуйте изменить критерий поиска или
                <a href="#" class="link link-blue size-16">создать новый тест</a>
            </div>
        </div>
    </div>
</template>

<script>
    import BlockTest from "./Test";

    export default {
        name: "list-tests",
        components: {BlockTest},
        data: () => ({
            searchTest: '',
            filterProjectTest: "all",
            filterStatusTest: "all",
            listTests: '',
            loadingTests: false,
        }),
        props: {
            tests: {
                type: Array,
                required: true
            }
        },
        methods: {
            openLoading() {
                const loading = this.$vs.loading({
                    target: this.$refs.content,
                    color: 'primary',
                    type: 'circles'
                })
                setTimeout(() => {
                    loading.close()
                    this.loadingTests = true
                }, 1000)
            },
            beforeEnter: function (el) {
                el.style.opacity = 0
            },
            enter: function (el, done) {
                var delay = 0
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 1, top: 0},
                        { complete: done }
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = 0
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 0, top: 20},
                        { complete: done }
                    )
                }, delay)
            },
            filterByName(query) {
                return this.tests.filter(function(item) {
                    return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
                })
            },
            filterByProject(array) {
                let query = this.filterProjectTest
                if (query === "all"){
                    return array
                } else {
                    return array.filter(function (item) {
                        return item.project_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
                    })
                }
            },
            filterByStatus(array) {
                let query = this.filterStatusTest
                if (query === "all"){
                    return array
                }else {
                    return array.filter(function(item) {
                        return item.status_test.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !== -1
                    })}
            },
            filterTests(){
                return this.filterByStatus(
                    this.filterByProject(
                        this.filterByName(this.searchTest)
                    ))
            },
        },
        mounted: function () {
            this.openLoading();
        },
        computed:{
            testsList(){
                return this.filterTests();
            }
        }
    }
</script>

<style lang="scss" scoped>

    .content-is-loading{
        height: 500px;
    }

    .block-test{
        &:last-child{
            margin: 0;
        }
    }
</style>
