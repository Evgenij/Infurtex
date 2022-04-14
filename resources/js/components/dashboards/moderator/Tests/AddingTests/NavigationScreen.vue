<template>
    <div class="navigation-screen p-3 pt-10 rounded-lg border-2 border-slate-100 flex flex-col space-y-3">
        <vs-input placeholder="название экрана" class="w-full" label="Название экрана" v-model="name">
        </vs-input>
        <file-loader :typeFileLoader="typeFL.Single"
                     :navigation="true" @add-area="activeAreasManager=!activeAreasManager"
                     @changeFile="changeFile"
                     :areas="data.areas"></file-loader>
        <div class="button flex justify-end">
            <span class="text-sm text-red-400 hover:text-red-600 cursor-pointer">удалить экран</span>
        </div>
        <areas-manager :active="activeAreasManager" :data="data" @closing="closing"></areas-manager>
    </div>
</template>

<script>
import FileLoader from "../FileLoader/FileLoader";
import typeFileLoader from "../../../../../enums";
import AreasManager from "./AreasManager/AreasManager";
export default {
    name: "NavigationScreen",
    components: {AreasManager, FileLoader},
    data: ()=>({
        name: '',
        typeFL: typeFileLoader.typeFileLoader,
        activeAreasManager: false,
        data: {
            img: '',
            areas: []
        }
    }),
    methods: {
        closing(val){
            this.activeAreasManager = val
        },
        changeFile(file){
            this.data.img = file
        }
    }
}
</script>

<style scoped>

</style>
