<template>
    <main :class="{'bg-white opacity-25': !$store.state.user.filledData}" class="relative work-area content pt-5">
        <div v-if="!$store.state.user.filledData" class="absolute z-10 lock h-full w-full flex items-center justify-center">
            <div class="circle rounded-full p-10 bg-slate-500">
                <i class="bx bx-lock text-5xl text-white"></i>
            </div>
        </div>
        <aside class="menu bg-white rounded-lg overflow-hidden py-3 h-fit">
            <h2 class="font-medium text-lg pl-5 pb-3 pt-1">Тесты</h2>
            <vs-sidebar
                v-model="categoryTests"
                open>
                <vs-sidebar-item id="new">
                    <template #icon>
                        <i class='bx bx-bell'></i>
                    </template>
                    <div class="text w-full flex justify-between items-center">
                        Новые <block-notification color="red">{{formattingNumber(123)}}</block-notification>
                    </div>
                </vs-sidebar-item>
                <vs-sidebar-item id="active">
                    <template #icon>
                        <i class='bx bx-rocket'></i>
                    </template>
                    <div class="text w-full flex justify-between items-center">
                        Активные <block-notification color="primary">{{formattingNumber(45)}}</block-notification>
                    </div>
                </vs-sidebar-item>
                <vs-sidebar-item id="favorite">
                    <template #icon>
                        <i class='bx bx-star'></i>
                    </template>
                    <div class="text w-full flex justify-between items-center">
                        Избранные
                    </div>
                </vs-sidebar-item>
                <vs-sidebar-item id="finished">
                    <template #icon>
                        <i class='bx bx-history'></i>
                    </template>
                    <div class="text w-full flex justify-between items-center">
                        Пройденные
                    </div>
                </vs-sidebar-item>

            </vs-sidebar>
        </aside>
        <list-tests :categoryTests="categoryTests"></list-tests>
    </main>
</template>

<script>
    import ListTests from "./ListTests";
    import BlockNotification from "../../../Header/BlockNotification";
    import category from "../../../../enums";

    export default {
        name: "Tests",
        components: {ListTests,BlockNotification},
        data: ()=>({
            categoryTests: category.categoryTest.New,
        })
    }
</script>

<style lang="scss" scoped>
    @import "./resources/sass/variables";

    .work-area {  display: grid;
        grid-template-columns: 190px 1fr;
        grid-template-rows: 1fr;
        gap: 0 30px;
        grid-auto-flow: row;
        grid-template-areas:
            "menu menu-content";
    }

    .menu { grid-area: menu; }

    .menu-content {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;
        gap: 20px 30px;
        grid-auto-flow: row;
        grid-template-areas:
            "filter"
            "list-tests";
    }

    .filter { grid-area: filter; }
    .list-tests { grid-area: list-tests; }
</style>
