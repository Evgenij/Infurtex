<template>
    <div class="dropdown w-full flex items-center">
        <div class="relative w-full">
            <vs-input ref="input" v-model="name" primary placeholder="проект" @focus="switchListProjects">
                <template #icon>
                    <i class='bx bx-folder'></i>
                </template>
            </vs-input>
            <div v-if="openListItems"
                 class="absolute z-10 project-list flex flex-col space-y-1 mt-1 p-1 w-full border-2 border-slate-100 top-full bg-white rounded-lg"
                 @mouseleave="switchListProjects">
                <dropdown-item v-for="project in filteredItems"
                               :name="project.name" :id="project.id" :key="project.id"
                                @set-data="setDataDropdown"></dropdown-item>
            </div>
        </div>
        <vs-button success v-if="!searchedItems && this.id === 0" class="min-w-max" @click="addItem">
            <i class='bx bx-plus left'></i> Создать
        </vs-button>
        <vs-button dark flat v-if="this.id !== 0" class="min-w-max" @click="resetProject">
            <i class='bx bx-x'></i>
        </vs-button>
    </div>

</template>

<script>
    import DropdownItem from "./DropdownItem";
    export default {
        name: "Dropdown",
        components: {DropdownItem},
        data: ()=>({
			name: '',
            id: 0,
            filteredItems: [],
            searchedItems: true,
            openListItems: false,
        }),
        props: {
            listItems: {
                type: Array,
                required: true
            },
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
            resetProject(){
                this.name = ''
                this.id = 0
            },
            addItem(){
				this.switchListProjects()
                this.$emit('add-item', {
                    input: this.$refs.input,
                    listProjects: this.listItems,
                })
            },
            switchListProjects(){
                this.filteredItems = this.$props.listItems
                this.openListItems = !this.openListItems
            },
            filterProjects(name){
                this.filteredItems = this.$props.listItems.filter(item =>
					item.name.toLowerCase().includes(name.toLowerCase()))
                //console.log(this.filteredItems)
                if (this.filteredItems.length >= 1){
                    this.searchedItems = true
                } else {
                    this.filteredItems = [{
                        name: 'Поиск не дал результатов', id: 0
                    }]
                    this.searchedItems = false
                }

                this.openListItems = true
            },
            setDataDropdown(data){
                this.id = data.id
                this.name = data.name
                this.switchListProjects()
				this.sendDataProject({
					id: data.id,
					name: data.name
				})
            },
			sendDataProject(){
				this.$emit('changeProject', {
					id: this.id,
					name: this.name
				})
			}
        },
        watch: {
            name(val) {
                this.filterProjects(val)
            }
        },
        // computed: {
        //     setData(){
        //         this.id = this.$props.data.id
        //         this.name = ''
        //     }
        // }
    }
</script>

<style lang="scss" scoped>
    .project-list{
        max-height: 200px;
        overflow-y: scroll;
    }
</style>
