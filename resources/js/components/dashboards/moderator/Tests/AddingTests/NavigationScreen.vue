<template>
    <div class="navigation-screen p-3 pt-10 rounded-lg border-2 border-slate-100 flex flex-col space-y-3">
        <vs-input placeholder="название экрана" class="w-full" label="Название экрана" v-model="name">
        </vs-input>
        <file-loader :typeFileLoader="typeFL.Single"></file-loader>
        <div class="button flex justify-end">
            <span class="text-sm text-red-400 hover:text-red-600 cursor-pointer">удалить экран</span>
        </div>
    </div>
</template>

<script>
import FileLoader from "../FileLoader/FileLoader";
import typeFileLoader from "../../../../../enums";
export default {
    name: "NavigationScreen",
    components: {FileLoader},
    data: ()=>({
        name: '',
        typeFL: typeFileLoader.typeFileLoader,
    }),
}
</script>

<style scoped>

</style>
