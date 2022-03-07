<template>
    <div class="file-loader">
        <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
            <div class="relative p-10 dropbox bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200">
                <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files)"
                       accept="image/*" class="absolute top-0 left-0 w-full h-full opacity-0 input-file cursor-pointer">
                <p class="text-center" v-if="isInitial">
                    Перетащите файл или <br>нажмите для загрузки
                </p>
                <p v-if="isSaving">
                    Загрузка изображения...
                </p>
            </div>
        </form>

        <!--SUCCESS-->
        <div v-if="isSuccess" class="relative bg-gray-100 rounded-2xl flex justify-center items-center p-6">
            <div class="button-reset flex items-center justify-center w-full absolute bottom-0 p-2">
                <vs-button shadow @click="reset()">
                    <i class="bx bx-reset text-lg left"></i>
                    Изменить
                </vs-button>
            </div>
            <div class="img-wrapp rounded-full overflow-hidden">
                <img class="h-full w-full object-cover" v-for="item in userPhoto" :src="item.url"  :alt="item.originalName">
            </div>
        </div>
        <!--FAILED-->
        <div v-if="isFailed">
            <h2>Uploaded failed.</h2>
            <p>
                <a href="javascript:void(0)" @click="reset()">Try again</a>
            </p>
            <pre>{{ uploadError }}</pre>
        </div>
    </div>

</template>

<script>
    // swap as you need
    import { upload } from './file-upload.fake.service'; // fake service
    // import { upload } from './file-upload.service';   // real service

    function wait(ms) {
        return (x) => {
            return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
    }

    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
    export default {
        name: 'FileLoader',
        data() {
            return {
                userPhoto: [],
                uploadError: null,
                currentStatus: null,
                uploadFieldName: 'photos'
            }
        },
        computed: {
            isInitial() {
                return this.currentStatus === STATUS_INITIAL;
            },
            isSaving() {
                return this.currentStatus === STATUS_SAVING;
            },
            isSuccess() {
                return this.currentStatus === STATUS_SUCCESS;
            },
            isFailed() {
                return this.currentStatus === STATUS_FAILED;
            }
        },
        methods: {
            reset() {
                // reset form to initial state
                this.currentStatus = STATUS_INITIAL;
                this.userPhoto = [];
                this.uploadError = null;
            },
            save(formData) {
                // upload data to the server
                this.currentStatus = STATUS_SAVING;
                upload(formData)
                    .then(wait(1500)) // DEV ONLY: wait for 1.5s
                    .then(x => {
                        this.userPhoto = [].concat(x);
                        this.currentStatus = STATUS_SUCCESS;
                    })
                    .catch(err => {
                        this.uploadError = err.response;
                        this.currentStatus = STATUS_FAILED;
                    });
            },
            filesChange(fieldName, fileList) {
                // handle file changes
                const formData = new FormData();
                if (!fileList.length) return;
                // append the files to FormData
                Array
                    .from(Array(fileList.length).keys())
                    .map(x => {
                        formData.append(fieldName, fileList[x], fileList[x].name);
                    });
                // save it
                this.save(formData);
            }
        },
        mounted() {
            this.reset();
        },
    }
</script>

<style lang="scss" scoped>

    .img-wrapp{
        width: 250px;
        height: 250px;
    }

</style>
