<template>
    <div class="single-file-loader w-full rounded-lg border-2 border-dashed
            border-slate-300 p-6">
        <main v-if="file === ''" class="fileloader-content w-full flex items-center justify-between">
            <div class="fileloader-content__text">
                <h4 class="font-bold mb-2">Добавьте файл для теста</h4>
                <p class="text-slate-600 text-base">Поддерживаемые форматы - JPG, JPEG, PNG</p>
                <span class="text-slate-400 text-sm">максимальный размер 10 Мб</span>
            </div>
            <vs-button class="min-w-max" success @click="browseFile">
                <i class="bx bx-cloud-download left"></i>
                Выбрать файл
            </vs-button>
        </main>
        <section v-else class="image grid grid-cols-2 gap-5">
            <img :src="this.file.name" alt="" class="rounded-lg">
            <div class="image__data flex flex-col mb-4">
                <h5 class="mb-2 pl-2 font-medium">{{this.file.name}}</h5>
                <div class="image__buttons flex">
                    <vs-button class="min-w-max" flat dark @click="browseFile">
                        <i class="bx bx-reset left"></i>
                        Изменить
                    </vs-button>
                    <vs-button class="min-w-max"
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
            </div>
        </section>


        <label ref="label-file" for="file">
        </label>
        <input accept=".jpg,.jpeg,.png" type="file" class="absolute hidden" id="file" ref="file"
               @change="handleFileUpload()"/>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "SingleFileLoader",
    data: ()=>({
        file: ''
    }),
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            //console.log(this.file)

            this.sendFileToServer()
        },
        sendFileToServer(){
            let formData = new FormData();
            formData.append('file', this.file);

            axios.post( '/single-file',
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
        browseFile(){
            this.$refs["label-file"].click()
        },
        resetFile(){
            this.file = '';
        }
    }
}
</script>

<style scoped>

</style>
