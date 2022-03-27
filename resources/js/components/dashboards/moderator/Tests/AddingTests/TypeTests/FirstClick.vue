<template>
    <section class="first-click-block">
        <div class="first-click-block__questions">
            <h2 class="font-medium text-base mb-2">Вопросы</h2>
            <section-questions></section-questions>
        </div>
    </section>
</template>

<script>
import SectionQuestions from "../Questions/SectionQuestions";
export default {
    name: "FirstClick",
    components: {SectionQuestions},
    data: ()=>({

    })
}
</script>

<style scoped>

</style>
