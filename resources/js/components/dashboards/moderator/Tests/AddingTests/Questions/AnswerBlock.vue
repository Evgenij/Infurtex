<template>
    <div class="answer-block">
        {{this.id}}
    </div>
</template>

<script>
export default {
    name: "AnswerBlock",
    data: ()=>({
        id: Math.random(),
        value: ''
    }),
}
</script>

<style scoped>

</style>
