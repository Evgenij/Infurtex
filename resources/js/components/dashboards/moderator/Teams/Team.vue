<template>
    <div class="team-block bg-white flex rounded-lg overflow-hidden transform hover:-translate-y-1">
        <div class="team-block-color-indicator h-full"
             :style="{background: this.color}"></div>
        <div class="team-block-content flex flex-col justify-between p-4 w-full">
            <div class="team-block-content__header flex items-start justify-between mb-4">
                <h2 class="team-block-content__name font-medium">
                    {{this.name}}
                </h2>
                <vs-tooltip bottom shadow not-hover v-model="menuActive">
                    <div class="cursor-pointer bg-slate-100 text-slate-400
                                rounded-md hover:bg-slate-200 hover:text-slate-500 p-1 px-2 ml-3"
                         @click="menuActive=!menuActive"
                    >
                        <i class="bx bx-dots-vertical-rounded text-lg"></i>
                    </div>
                    <template #tooltip>
                        <div class="content-tooltip cursor-pointer flex flex-col py-1 rounded-lg">
                            <div class="content-tooltip__item text-slate-500 cursor-pointer flex
                                    items-center p-2 hover:bg-slate-100 rounded-lg"
                                 @mouseup="menuActive=!menuActive"
                                 @click="openModalDetails">
                                <i class="bx bx-search-alt text-lg mr-1"></i> Подробнее
                            </div>
                            <div class="content-tooltip__item text-slate-500 cursor-pointer flex
                                    items-center p-2 hover:bg-slate-100 rounded-lg"
                                 @mouseup="menuActive=!menuActive"
                                 @click="editTeam">
                                <i class="bx bx-edit-alt text-lg mr-1"></i> Редактировать
                            </div>
                            <hr class="my-1">
                            <div class="content-tooltip__item text-red-400 cursor-pointer flex items-center p-2
                            hover:bg-red-100 hover:text-red-600 rounded-lg"
                                 @mouseup="menuActive=!menuActive"
                                 @click="deleteTeam">
                                <i class="bx bx-trash text-lg mr-1"></i> Удалить
                            </div>
                        </div>
                    </template>
                </vs-tooltip>
            </div>
            <div class="team-block-content__tags tags flex flex-wrap mb-3">
                <div class="tags__item mr-2 mb-2 bg-slate-100
                        rounded-md p-1 px-2 text-sm text-slate-500 flex items-center"
                     v-for="(tag, index) in this.tags" :key="index" v-if="tag.empty !== true">
                    <div class="tag-name whitespace-nowrap overflow-hidden overflow-ellipsis mr-1 cursor:default select-none">
                        {{tag.label}}
                    </div>
                    <template v-if="tag.count_data > 0">({{tag.count_data}})</template>
                </div>
            </div>
            <div class="team-block-content__footer flex font-medium text-sm items-center select-none" title="Охват">
                <div class="icon bg-teal-50 text-teal-500 flex items-center text-lg p-1 mr-2 rounded">
                    <i class='bx bx-group'></i>
                </div>
                {{formattingNumber(this.respondents)}}
                респондентов
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Team",
        data: () => ({
            menuActive: false,
        }),
        props: {
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            tags: {
                type: Array,
                required: true,
            },
            respondents: {
                type: Number,
                required: true,
            },
        },
        methods: {
            openModalDetails() {
                this.$parent.$emit('openModalDetails', {
                        name: this.name,
                        color: this.color,
                        tags: this.tags,
                        respondents: this.respondents
                    }
                );
            },
            deleteTeam() {
                this.$parent.$emit('deleteTeam', this.id);
            },
            editTeam(){
                this.$parent.$emit('editTeam', {
                    id: this.id,
                    name: this.name,
                    color: this.color,
                    tags: this.tags,
                    respondents: this.respondents
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .team-block {
        &-color-indicator {
            width: 6px;
        }

        .tags__item {
            max-width: 140px;
        }

        h2 {
            word-break: break-word;
        }
    }
</style>
