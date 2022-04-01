<template>
    <div class="project-list__item text-sm p-2 px-3 hover:bg-gray-100 cursor-pointer rounded-lg"
         @click="setData">
        {{value}}
    </div>
</template>

<script>
export default {
    name: "DropdownItem",
    props: {
        value: {
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
                value: this.value
            })
        }
    }
}
</script>

<style scoped>

</style>
