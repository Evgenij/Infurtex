<template>
    <div class="single-file-loader w-full rounded-lg border-2 border-dashed
            border-slate-300 p-6">
        <main v-if="file === ''" class="single-file-loader__content w-full flex items-center justify-between">
            <div class="single-file-loader__text">
                <h4 class="font-bold mb-2">Добавьте файл для теста</h4>
                <p class="text-slate-600 text-base">Поддерживаемые форматы - JPG, JPEG, PNG</p>
                <span class="text-slate-400 text-sm">максимальный размер 10 Мб</span>
            </div>
            <vs-button class="min-w-max" success @click="browseFile">
                <i class="bx bx-import left"></i>
                Выбрать файл
            </vs-button>
        </main>
        <section v-else class="image grid grid-cols-2 gap-5">
            <div class="img-wrapper rounded-lg flex items-center justify-center overflow-hidden bg-slate-100 border border-slate-200">
                <img v-bind:src="imagePreview" :alt="this.file.name" class="preview w-full rounded-lg">
            </div>
            <div class="image__data flex flex-col mb-4 pl-2">
                <h5 class="mb-2 font-medium pl-2">{{this.file.name}}</h5>
                <div class="image__content flex">
                    <vs-button class="min-w-max" flat dark @click="browseFile">
                        <i class="bx bx-reset left"></i>
                        Изменить
                    </vs-button>
                    <vs-button v-if="navigation === false" class="min-w-max"
                               style="min-width: 90px"
                               danger
                               flat
                               animation-type="scale"
                               @click="resetFile">
                        <i class='bx bx-trash' ></i>
                        <template #animate>
                            Удалить
                        </template>
                    </vs-button>
                </div>
                <div v-if="navigation === true" class="image__content flex flex-col space-y-2 pt-6 pl-2">
                    <h4 class="text-sm font-medium">Целевые области <span class="text-slate-400">(x{{areas.length}})</span></h4>
                    <div class="list-areas flex flex-col space-y-2">
                        <div v-for="area in areas" class="area pb-2 border-b border-slate-100">
                            <div class="area__data flex items-center space-x-2">
                                <div class="area__color rounded-lg" :style="{background: area.color}"></div>
                                <span class="text-sm">{{area.name}}</span>
                            </div>
                            <div class="area__screen flex items-center text-sm ml-1 mt-1 text-slate-400">
                                <i class="bx bx-link mr-2"></i>
                                <template v-if="area.screen.id !== 0">
                                    {{area.screen.name}}
                                </template>
                                <template v-else>
                                     <span class="text-red-500">{{area.screen.name}}</span>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="text-slate-400 hover:text-green-500 text-sm flex items-center cursor-pointer max-w-fit"
                        @click="addingArea"><i class="bx bx-screenshot mr-1"></i> <span class="pb-1">изменить области</span></div>
                </div>
            </div>
        </section>


        <label ref="label-file" :for="'file-'+id">
        </label>
        <input accept=".jpg,.jpeg,.png" type="file" class="absolute hidden" :id="'file-'+id" ref="file"
               @change="onImageChoose()"/>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "SingleFileLoader",
    data(){
        return {
            file: '',
            showPreview: false,
            imagePreview: ''
        }
    },
    props: {
        navigation:{
            type: Boolean,
            default: false
        },
        areas:{
            type: Array,
            default: ()=>{
                return []
            }
        },
        id: {
            type: Number,
            default: 1
        },
        nameScreen: {
            type: String
        }
    },
    methods: {
        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post( '/file-preview',
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
        onImageChoose(){
            this.file = this.$refs.file.files[0];
            let reader  = new FileReader();
            reader.onload = ()=>{
				this.showPreview = true;
				this.imagePreview = reader.result;
				this.imageFile = reader.result;
			}
            reader.readAsDataURL(this.file)
            // reader.addEventListener("load", function () {
            //     this.showPreview = true;
            //     this.imagePreview = reader.result;
            //     this.imageFile = reader.result;
            // }.bind(this), false);
            // if( this.file ){
            //     if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
            //         reader.readAsDataURL( this.file );
            //     }
            // }
        },
        browseFile(){
            this.$refs["label-file"].click()
        },
        resetFile(){
            this.file = '';
        },
        addingArea(){
            this.$emit('add-area')
        },
    },
    watch: {
        imagePreview(){
            this.$emit('changeFile', this.imagePreview)
        },
    }
}
</script>

<style lang="scss" scoped>
    .img-wrapper{
        max-height: 250px;
    }
    .area__color{
        width: 26px;
        height: 26px;
    }
</style>
