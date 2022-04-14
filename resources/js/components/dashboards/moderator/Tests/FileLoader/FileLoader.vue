<template>
    <div class="file-loader flex flex-col space-y-2">
        <component :is="setTypeFileLoader"
                   :navigation="navigation" :imageFile="file" :areas="areas" @add-area="addArea" @changeFile="changeFile"></component>
    </div>
</template>

<script>
import type from "../../../../../enums";

export default {
    name: "FileLoader",
    data: ()=>({
        file: ''
    }),
    props: {
        typeFileLoader: type.typeFileLoader,
        navigation: {
            type: Boolean,
            default: false
        },
        imageFile: {
            type: String
        },
        areas: {
            type: Array
        }

    },
    methods: {
        addArea(){
            this.$emit('add-area')
        },
        changeFile(file){
            this.file = file
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
    },
    watch: {
        file(){
            this.$emit('changeFile', this.file)
        }
    }
}
</script>

<style scoped>

</style>
