<template>
    <div class="content pt-5">
        <div class="tabs bg-white p-6 rounded-lg w-4/5 mx-auto" id="tabs">
            <div class="tabs-triggers flex space-x-2 w-full font-medium">
                <div class="tabs-trigger w-full p-4 px-5 pl-3 rounded-lg"
                     v-for="(item, index) in categories"
                     :class="[index === active ? 'tabs-trigger--active' : '']"
                     @click="activate(index)">
                    <span class="step-block p-2 px-3 rounded mr-3">{{index+1}} шаг</span>{{categories[index]}}
                </div>
            </div>
            <div class="tabs-content p-4 grid grid-cols-2 gap-3" v-if="active === 0">
                <div class="col">
                    <file-loader></file-loader>
                </div>
                <div class="col">2</div>
            </div>
            <div class="tabs-content p-4" v-if="active === 1">Content 2</div>
        </div>
    </div>
</template>

<script>
    import FileLoader from "../../FileLoader";

    export default {
        name: "AdditionalData",
        components: {FileLoader},
        data: ()=>({
            active: 0,
            categories: [
                "Личные данные",
                "Профессиональные данные",
            ]
        }),
        methods: {
            activate(index) {
                this.active = index;
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../../../sass/variables";

    .tabs {
        &-trigger {
            background: $gray-100;
            cursor: pointer;
            transition: .3s;
            color: $gray-600;

            & .step-block{
                background: $gray-200;
                color: $gray-600;
            }

            &--active {
                background: $gradient;
                color: white;

                & .step-block{
                    background: white;
                    color: $primary;
                }
            }
        }
    }
</style>
