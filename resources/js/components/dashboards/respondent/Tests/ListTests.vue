<template>
    <section class="menu-content">
        <div class="filter bg-white rounded-lg p-3 pt-3 flex space-x-2">
            <vs-select
                v-model="ownerTests">
                <vs-option label="Любой владелец" value="all">
                    Любой владелец
                </vs-option>
                <vs-option label="Компания" value="company">
                    Компания
                </vs-option>
                <vs-option label="Персональный" value="person">
                    Персональный
                </vs-option>
            </vs-select>
            <vs-input
                type="date"
                v-model="dateTests"
            />
            <vs-select
                v-model="duration">
                <template v-for="duration in durationTests">
                    <vs-option :label="duration.label" :value="duration.val">
                        {{duration.label}}
                    </vs-option>
                </template>
            </vs-select>
            <vs-select
                v-model="cost">
                <template v-for="cost in costTests">
                    <vs-option :label="cost.label" :value="cost.val">
                        {{cost.label}}
                    </vs-option>
                </template>
            </vs-select>
        </div>
        <div class="list-tests">
            <transition-group
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
                name="staggered-fade">
            <test v-for="(test, index) in filteredTests"
                  :name="test.name" :type="test.type" :time="test.time"
                  :cost="test.cost" :owner-name="test.nameOwner" :owner-type="test.typeOwner"
                  :date="test.date" :category="test.category" :key="test.id"></test>
            </transition-group>
        </div>
    </section>
</template>

<script>
    import tests_respondents from '../../../../mocks/tests_respondents'
    import category from '../../../../enums'
    import Test from "./Test";

    export default {
        name: "ListTests",
        components: {Test},
        data: () => ({
            tests: [],
            ownerTests: 'all',
            dateTests: '2022-02-17',
            duration: 1,
            durationTests: [
                {val: 1, label: 'до 1 мин'},
                {val: 2, label: 'до 2 мин'},
                {val: 5, label: 'до 5 мин'},
                {val: 10, label: 'до 10 мин'},
                {val: 1000000, label: 'более 10 мин'},
            ],
            cost: 100,
            costTests: [
                {val: 0, label: 'любая стоимость'},
                {val: 100, label: 'от 100 инф.'},
                {val: 200, label: 'от 200 инф.'},
                {val: 500, label: 'от 500 инф.'},
                {val: 1000, label: 'от 1000 инф.'},
                {val: 1000000, label: 'более 1000 инф.'},
            ],
        }),
        props:{
            categoryTests: category.categoryTest
        },
        methods: {
            filterTests(){
                return this.filterByOwner(this.filterByDate(this.filterByTime(this.filterByCost(this.filterByCategory(this.$props.categoryTests)))))
            },
            filterByCategory(category){
                return this.tests.filter(function(item) {
                    return item.category.toLowerCase().indexOf(category.toLowerCase()) !== -1
                })
            },
            filterByCost(arrayTests){
                let cost = this.cost
                return arrayTests.filter(function(item) {
                    return item.cost >= cost
                })
            },
            filterByTime(arrayTests){
                let time = this.duration
                console.log(time)
                return arrayTests.filter(function(item) {
                    return item.time <= time
                })
            },
            filterByDate(arrayTests){
                let date = this.dateTests.split('-').reverse().join('.') // замена формата даты с 2022-02-18 на 18.02.2022
                return arrayTests.filter(function(item) {
                    return item.date === date
                })
            },
            filterByOwner(arrayTests){
                let owner = this.ownerTests
                console.log(owner)
                if (owner === 'all'){
                    return arrayTests
                }
                return arrayTests.filter(function(item) {
                    return item.typeOwner === owner
                })
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
        },
        mounted() {
            this.tests = tests_respondents
        },
        computed: {
            filteredTests(){
                return this.filterTests();
            }
        },
    }
</script>

<style scoped>

</style>
