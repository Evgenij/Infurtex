<template>
    <div class="root h-full flex flex-col items-center justify-center">
        <img src="/storage/images/errors/404.svg" alt="404">
        <p class="message test-slate-700 font-medium my-3 mt-6">
            Упс...Видимо вы попали в тупик, ничего страшного, мы выведем вас)
        </p>
        <vs-button primary
        @click="$router.back()">
            <i class="bx bx-chevron-left left"></i> Вернуться
        </vs-button>
    </div>
</template>

<script>
    export default {
        name: "Error404"
    }
</script>

<style scoped>

</style>
