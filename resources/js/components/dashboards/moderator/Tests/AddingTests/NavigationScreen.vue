<template>
    <div class="navigation-screen p-3 pt-10 rounded-lg border-2 border-slate-100 flex flex-col space-y-3">
        <vs-input placeholder="название экрана" class="w-full" label="Название экрана" v-model="nameScreen">
        </vs-input>
        <single-file-loader :navigation="true" @add-area="activeAreasManager=!activeAreasManager"
                            @changeFile="changeFile"
                            :areas="data.areas" :id="id"></single-file-loader>
        <div class="button flex justify-end">
            <span class="text-sm text-red-400 hover:text-red-600 cursor-pointer" @click="remove">удалить экран</span>
        </div>
        <areas-manager :active="activeAreasManager" :data="data" :screens="screensList" @closing="closing"></areas-manager>
    </div>
</template>

<script>
import AreasManager from "./AreasManager/AreasManager";
import SingleFileLoader from "../FileLoader/TypesFileLoader/SingleFileLoader";

export default {
    name: "NavigationScreen",
    components: {SingleFileLoader, AreasManager},
    data: ()=>({
        activeAreasManager: false,
        nameScreen: '',
        data: {
            img: '',
            areas: []
        }
    }),
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        screensList: {
            type: Array
        }
    },
    mounted() {
        this.nameScreen = this.name
    },
    methods: {
        closing(val){
            this.activeAreasManager = val
        },
        changeFile(file){
            this.data.img = file
            this.data.areas = []
            this.$emit('set-data', {
                id: this.id,
                data: this.data
            })
        },
        remove(){
            this.$emit('remove', this.id)
        },
        getNameScreen(idScreen){
            return this.screensList.filter(screen=>screen.id === idScreen)[0].name
        }
    },
    watch: {
        nameScreen(val){
            this.$emit('change-name', {
                id: this.id,
                val: val
            })
        },
        'data.areas'(val){
            val.forEach((item)=>{
                if(item.screen.id !== 0){
                    item.screen.name = this.getNameScreen(item.screen.id)
                } else {
                    item.screen.name = 'Не выбрано'
                }
            })
            //this.data.areas = this.data.areas.filter(screen => screen.id === val)[0].screen = "yyyyes!"
            //console.table(this.data.areas)
        }
    }
}
</script>

<style scoped>

</style>
