<template>
    <div class="file-loader flex flex-col space-y-2">
        <component :is="setTypeFileLoader"
                   :navigationList="navigationList"
                   :navigationListData="navigationListData"></component>
    </div>
</template>

<script>
import type from "../../../../../enums";

export default {
    name: "FileLoader",
    props: {
        typeFileLoader: type.typeFileLoader,
        navigationList: {
            type: Boolean,
            default: false
        },
        navigationListData: {
            type: Array
        }
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
