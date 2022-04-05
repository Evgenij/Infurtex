<template>
    <div class="file-loader flex flex-col space-y-2">
        <h2 class="font-medium text-base">Дизайн</h2>
        <component :is="setTypeFileLoader"></component>
    </div>
</template>

<script>
import type from "../../../../../enums";

export default {
    name: "FileLoader",
    props: {
        typeFileLoader: type.typeFileLoader
    },
    computed: {
        setTypeFileLoader(){
            let nameFileLoaderComponent = ''
            if(this.typeFileLoader === type.typeFileLoader.Single) {
                nameFileLoaderComponent = 'SingleFileLoader'
            } else {
                nameFileLoaderComponent = 'MultiplyFileLoader'
            }
            return () => import(`./TypesFileLoader/${nameFileLoaderComponent}`)
        }
    }
}
</script>

<style scoped>

</style>
