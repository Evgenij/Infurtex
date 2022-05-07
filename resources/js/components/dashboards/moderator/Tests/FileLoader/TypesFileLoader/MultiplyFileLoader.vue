<template>
    <div class="multiply-file-loader w-full rounded-lg border-2 border-dashed
            border-slate-300 p-6">
        <main v-if="files.length === 0" class="fileloader-content w-full flex items-center justify-between">
            <div class="fileloader-content__text">
                <h4 class="font-bold mb-2">Добавьте файл для теста</h4>
                <p class="text-slate-600 text-base">Поддерживаемые форматы - JPG, JPEG, PNG</p>
                <span class="text-slate-400 text-sm">максимальный размер 10 Мб</span>
            </div>
            <vs-button class="min-w-max" success @click="addFile">
                <i class="bx bx-import left"></i>
                Выбрать файл
            </vs-button>
        </main>
        <section v-else class="image grid grid-cols-2 gap-5">
            <div class="cell flex items-center font-medium">
                Файлы
            </div>
            <div class="cell flex justify-end items-center">
                <vs-button flat success @click="addFile">
                    <i class="bx bx-plus left"></i>
                    Добавить файл
                </vs-button>
            </div>
            <div class="image__item col-span-2 grid grid-cols-3 rounded-lg border gap-3 border-slate-200 p-3" v-for="(file, key) in files">
                <div class="img-wrapper rounded-lg flex items-center justify-center overflow-hidden">
                    <img :src="file.name" v-bind:ref="'image'+parseInt( key )" :alt="file.name"
                         class="preview w-full">
                </div>
                <div class="image__data col-span-2 justify-center flex flex-col space-y-2">
                    <h5 class="mb-2 pl-2 font-medium">{{file.name}}</h5>
                    <vs-button class="min-w-max"
                               style="min-width: 90px"
                               danger
                               flat
                               animation-type="scale"
                               @click="removeFile(key)">
                        <i class='bx bx-trash' ></i>
                        <template #animate>
                            Удалить
                        </template>
                    </vs-button>
                </div>
            </div>
        </section>
        <label ref="label-file" for="files">
        </label>
        <input accept=".jpg,.jpeg,.png" type="file" multiple class="absolute hidden" id="files" ref="files"
               @change="handleFilesUpload()"/>
    </div>
</template>
<script>

import axios from 'axios'
import AreasManager from "../../AddingTests/AreasManager/AreasManager";

export default {
    components: {AreasManager},
    data(){
        return {
            files: [],
        }
    },
    props: {
        navigationList:{
            type: Boolean,
            default: false
        },
        navigationListData: {
            type: Array
        }
    },
    methods: {
        addFiles(){
            this.$refs.files.click();
        },
        submitFiles(){
            let formData = new FormData();
            for( var i = 0; i < this.files.length; i++ ){
                let file = this.files[i];
                formData.append('files[' + i + ']', file);
            }
            axios.post( '/file-multiple-preview',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function(){
                console.log('SUCCESS!!');
            })
                .catch(function(){
                    console.log('FAILURE!!');
                });
        },
        handleFilesUpload(){
            let uploadedFiles = this.$refs.files.files;
            for( var i = 0; i < uploadedFiles.length; i++ ){
                this.files.push( uploadedFiles[i] );
            }
            this.getImagePreviews();
        },
        getImagePreviews(){
            for( let i = 0; i < this.files.length; i++ ){
                if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {
                    let reader = new FileReader();
                    reader.addEventListener("load", function(){
                        this.$refs['image'+parseInt( i )][0].src = reader.result;
                    }.bind(this), false);
                    reader.readAsDataURL( this.files[i] );
                }
            }
        },
        addFile(){
            this.$refs["label-file"].click()
        },
        resetFile(){
            this.files = [];
        },
        removeFile(key){
            this.files.splice(key, 1);
        },
    },
    computed: {
        getCountAreas(){
            return this.navigationListData.length
        }
    }
}
</script>


<style lang="scss" scoped>
    .img-wrapper{
        max-height: 250px;
    }
</style>
