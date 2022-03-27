<template>
    <div class="dropdown w-full flex items-center">
        <div class="relative w-full">
            <vs-input ref="input" v-model="itemName" primary placeholder="проект" @focus="switchListProjects">
                <template #icon>
                    <i class='bx bx-folder'></i>
                </template>
            </vs-input>
            <div v-if="openListItems"
                 class="absolute z-10 project-list flex flex-col space-y-1 mt-1 p-1 w-full border-2 border-slate-100 top-full bg-white rounded-lg"
                 @mouseleave="switchListProjects">
                <div v-for="project in filteredItems"
                     class="project-list__item text-sm p-2 px-3 hover:bg-gray-100 cursor-pointer rounded-lg"
                     @click="switchListProjects">
                    {{project.name}}
                </div>
            </div>
        </div>
        <vs-button success v-if="!searchedItems && this.itemId === ''" class="min-w-max" @click="addItem">
            <i class='bx bx-plus left'></i> Добавить
        </vs-button>
        <vs-button dark flat v-if="this.itemId !== ''" class="min-w-max" @click="resetProject">
            <i class='bx bx-x'></i>
        </vs-button>
    </div>

</template>

<script>
    export default {
        name: "Dropdown",
        data: ()=>({
            itemName: '',
            itemId: '',
            listItems: [],
            filteredItems: [],
            searchedItems: true,
            openListItems: false,
        }),
        props: {
            dataList: {
                type: Array,
                required: true
            }
        },
        methods: {
            resetProject(){
                this.itemName = ''
                this.itemId = ''
            },
            addItem(){
                this.$emit('add-item', this.$refs.input)
            },
            switchListProjects(){
                this.filteredItems = this.props.dataList
                this.openListItems = !this.openListItems
            },
            filterProjects(name){
                this.filteredItems = this.props.listItems.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
                console.log(this.filteredItems)
                if (this.filteredItems.length >= 1){
                    this.searchedItems = true
                } else {
                    this.filteredItems = [{
                        name: 'Поиск не дал результатов', value: 0
                    }]
                    this.searchedItems = false
                }

                this.openListItems = true
            },
        },
        watch: {
            itemName(val) {
                this.filterProjects(val)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .project-list{
        max-height: 200px;
        overflow-y: scroll;
    }
</style>
