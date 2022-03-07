<template>
    <div v-if="teams.length > 0" class="list-teams mt-2 grid grid-cols-2 gap-5">
        <team v-for="team in teams" :key="team.id"
              :id="team.id" :name="team.name" :color="team.color"
              :respondents="team.respondents" :tags="team.tags"></team>
    </div>
    <div class="empty-teams text-center text-gray-500 h-full py-44" v-else>
        Вы еще не создали ни одной команды респондентов. Вероятнее всего вы хотите её
        <a href="#" class="link link-blue size-16" @click="addTeam">создать сейчас</a>
    </div>
</template>

<script>
    import Team from "./Team";
    export default {
        name: "ListTeams",
        components: {Team},
        data: () => ({
        }),
        props: {
            teams: {
                type: Array,
                required: true
            }
        },
        methods: {
            addTeam(){
                this.$emit('add-team')
            },
            deleteTeam(id) {
                this.teams = this.teams.filter((item)=>{
                    return item.id !== id
                })
            },
            beforeEnter: function (el) {
                el.style.opacity = 0
            },
            enter: function (el, done) {
                var delay = 0
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 1, top: 0},
                        { complete: done }
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = 0
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 0, top: 20},
                        { complete: done }
                    )
                }, delay)
            },
        },
        mounted() {
            this.$on('deleteTeam', this.deleteTeam);
        }
    }
</script>

<style scoped>

</style>
