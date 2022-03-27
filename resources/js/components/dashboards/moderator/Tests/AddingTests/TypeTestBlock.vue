<template>
    <div class="type-test-block p-3 border-2 bg-white border-slate-100 rounded-lg flex items-start space-x-4
                    hover:border-slate-200 cursor-pointer transform hover:-translate-y-1"
        @click="createTypeSection">
        <div class="type-test-block__icon p-3 rounded-lg flex items-center justify-center"
             :class="[color]">
            <i class="bx text-white" :class="[icon]"></i>
        </div>
        <section class="type-test-block__content">
            <header class="font-medium mb-2 pt-2">
                {{name}}
            </header>
            <main class="text-sm text-slate-500">
                {{description}}
            </main>
        </section>
    </div>
</template>

<script>
import type from '../../../../../enums'
export default {
    name: "TypeTestBlock",
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
    },
    methods: {
        createTypeSection() {
            this.$emit('add-section', this.id)
        }
    }
}
</script>

<style scoped>

</style>
