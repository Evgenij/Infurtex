<template>
    <vs-dialog overflow-hidden prevent-close full-screen class="h-full"
               v-model="stateManager.active"
               v-on:close="closingManager">
        <main class="flex space-x-4 h-full">
            <section class="w-4/5 overflow-y-scroll h-full rounded-lg">
                <picture-areas :crop-url="data.img" :listAreas="data.areas" v-on:getListAreas="getListAreas"></picture-areas>
            </section>
            <section class="controls-areas flex flex-col space-y-2 justify-between">
                <header class="py-3 border-b border-slate-100">
                    <h2 class="font-bold mb-1 w-4/5">Определите целевые области</h2>
                    <h3 class="text-slate-500 text-sm">Для создания области зажмите левую кнопку мыши и тяните для выделения области</h3>
                </header>
                <main class="h-full overflow-hidden">
                    <h4 class="font-bold text-sm mb-3">Целевые области <span class="text-slate-400">(x{{data.areas.length}})</span></h4>
                    <div v-if="data.areas.length > 0" class="areas-list h-full overflow-y-scroll space-y-2 pr-3 pb-11">
                        <div v-for="area in data.areas"
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
                                    v-model="area.screen.id"
                                    label="Экран"
                                    class="w-full">
                                    <template v-for="screen in screens">
                                        <vs-option :label="screen.name" :value="screen.id">
                                            {{screen.name}}
                                        </vs-option>
                                    </template>
                                </vs-select>
                            </div>
                        </div>
                    </div>
                    <section v-else class="flex items-center justify-center h-full text-slate-400 text-sm">
                        <i class="bx bx-info-circle mr-1"></i> Целевые области отстутсвуют
                    </section>
                </main>
                <footer class="buttons flex justify-end">
                    <vs-button class="w-full" dark flat @click="closingManager">
                        Отменить
                    </vs-button>
                    <vs-button class="w-full" success @click="closingManager">
                        <i class="bx bx-check"></i>
                        Сохранить
                    </vs-button>
                </footer>
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
    }),
    props: {
        active: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            required: true
        },
        screens: {
            type: Array
        }
    },
    methods: {
        closingManager(){
            this.$emit('closing', false)
        },
        getListAreas(value) {
            this.data.areas = value;
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
    .controls-areas{
        min-width: 350px;
    }
</style>
