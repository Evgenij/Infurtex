<template>
    <vs-dialog overflow-hidden prevent-close full-screen class="h-full" v-model="stateManager.active" v-on:close="closingManager">
        <main class="flex space-x-4 h-full">
            <section class="w-4/5 overflow-y-scroll h-full rounded-lg">
                <picture-areas :crop-url="data.img" v-on:getListAreas="getListAreas"></picture-areas>
            </section>
            <section class="flex flex-col h-full justify-between">
                <div class="areas-list h-full overflow-y-scroll space-y-2 pr-3">
                    <div v-for="area in areas"
                         class="area flex flex-col space-y-1 rounded-lg border-2 border-slate-200 p-3">
                        <span class="font-medium text-xs rounded-lg border-2 p-1 px-2 min-w-min"
                              :style="{color: area.color, border: '2px solid '+area.color,
                              'margin-bottom': '30px', width: 'fit-content'}">
                            Целевая зона №{{area.id}}
                        </span>
                        <vs-input placeholder="название зоны" class="w-full" label="Название зоны" v-model="area.name"
                                  :style="{'margin-bottom': '24px'}">
                        </vs-input>
                        <div class="link-to-screen relative flex items-center">
                            <i class="bx bx-link p-2 text-slate-400"></i>
                            <vs-select
                                placeholder="Название экрана"
                                v-model="area.screen"
                                label="Экран"
                                class="w-full">
                                <vs-option label="Экран 1" value="100">
                                    Экран 1
                                </vs-option>
                                <vs-option label="Экран 2" value="200">
                                    Экран 2
                                </vs-option>
                            </vs-select>
                        </div>
                    </div>
                </div>
                <div class="buttons flex justify-end pt-4">
                    <vs-button class="w-full" dark flat @click="closingManager">
                        Отменить
                    </vs-button>
                    <vs-button class="w-full" success @click="closingManager">
                        <i class="bx bx-check"></i>
                        Сохранить
                    </vs-button>
                </div>
            </section>
        </main>
    </vs-dialog>
</template>

<script>
import PictureAreas from "./PictureAreas/PictureAreas";
export default {
    name: "AreasManager",
    components: {PictureAreas},
    data: ()=>({
        stateManager:{
            active: false
        },
        areas: [
            {
                id: 1,
                x: 10,
                y: 10,
                color: 'red',
                width: 100,
                height: 100,
                z: 0,
                resizable: false,
                screen: 100,
                name: ''
            },
            {
                id: 2,
                x: 130,
                y: 10,
                color: 'blue',
                width: 100,
                height: 100,
                z: 0,
                resizable: false,
                screen: 100,
                name: ''
            },
        ],
    }),
    props: {
        active: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        closingManager(){
            console.log('!!!!')
            this.$emit('closing', false)
        },
        getListAreas(value) {
            // console.log(value)
            this.areas = value;
        },
    },
    watch: {
        active(val){
            this.stateManager.active = val
        }
    },
}
</script>

<style lang="scss" scoped>
    .link-to-screen:before{
        content: "";
        display: block;
        width: 2px;
        height: 24px;
        background: #d1d7e0;
        position: absolute;
        left: 16px;
        top: -50%;
    }
</style>
