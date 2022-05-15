<template>
    <div class="project-list__item text-sm p-2 px-3 hover:bg-gray-100 cursor-pointer rounded-lg"
         @click="setData">
        {{name}}
    </div>
</template>

<script>
export default {
    name: "DropdownItem",
    props: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
    },
    methods: {
        setData(){
            this.$emit('set-data', {
                id: this.id,
                name: this.name
            })
        }
    }
}
</script>

<style scoped>

</style>
