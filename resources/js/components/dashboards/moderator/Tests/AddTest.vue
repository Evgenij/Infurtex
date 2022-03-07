<template>
    <div class="tabs bg-white p-6 rounded-lg w-4/5 mx-auto" id="tabs">
        <div class="tabs-triggers flex space-x-2 w-full font-medium">
            <div class="tabs-trigger w-full p-4 px-5 pl-3 rounded-lg flex items-center justify-between"
                 v-for="(item, index) in tabs"
                 :class="[index+1 === activeTab ? 'tabs-trigger--active' : '']">
                <div class="tab-text">
                    <span class="step-block p-2 px-3 rounded mr-3">{{index+1}} шаг</span>{{tabs[index]}}
                </div>
                <i class="bx bx-chevron-right text-xl"></i>
            </div>
        </div>
        <div class="tabs-content pt-5 flex flex-col space-y-8" v-if="activeTab === 1">
            1
        </div>
        <div class="tabs-content pt-5 flex flex-col space-y-8" v-if="activeTab === 2">
            2
        </div>
        <div class="tabs-content pt-5 flex flex-col space-y-8" v-if="activeTab === 3">
            3
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddTest",
        data: ()=>({
            activeTab: 1,
            tabs: [
                "Построение",
                "Рекрутинг",
                "Результаты",
            ],
        })
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/variables";

    .tabs {
        &-trigger {
            background: $gray-100;
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
