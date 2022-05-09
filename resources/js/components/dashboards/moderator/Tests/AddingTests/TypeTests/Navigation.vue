<template>
    <div class="navigation-block flex flex-col space-y-4">
        <header class="flex items-center justify-center text-lg font-medium border-b border-slate-100 pb-4">
            <div class="p-2 px-3 rounded-lg flex items-center justify-center bg-green-500 mr-3
                shadow-lg shadow-green-500/50">
                <i class="bx bxs-directions text-white text-sm"></i>
            </div>
            Тест навигации
        </header>
        <div class="first-click-block__instruction">
            <h2 class="font-medium text-base">Инструкция</h2>
            <vs-input primary
                      v-model="textInstruction"
                      placeholder="Что нужно сделать в тесте ..."
                      class="w-full mt-2">
            </vs-input>
        </div>
        <div class="navigation-block__screens">
            <header class="flex justify-between items-center mb-2">
                <h2 class="font-medium text-base">Экраны</h2>
                <vs-button flat success @click="addScreen">
                    <i class="bx bx-plus left"></i>
                    Добавить экран
                </vs-button>
            </header>
            <div v-if="screens.length !== 0" class="screens-list flex flex-col space-y-2">
                <navigation-screen v-for="(screen, index) in screens"
                                   :id="screen.id" :data="screen.data"
                                   @change-name="changeNameScreen"
                                   @set-data="setDataScreen" @remove="removeScreen"
                                   :name="screen.name" :screens-list="screens"
                                   :key="screen.id">
                </navigation-screen>
            </div>
            <div v-else class="empty-screens border-2 p-6 rounded-lg border-slate-100 text-slate-400 text-sm flex items-center justify-center">
                <i class="bx bx-info-circle mr-1"></i> <span class="pb-1">список экранов пуст</span>
            </div>
        </div>
        <div class="first-click-block__questions">
            <h2 class="font-medium text-base mb-2">Вопросы</h2>
            <section-questions :questions="questions"
                               @add-question-block="addQuestionBlock"
                               @remove-question-block="removeQuestionBlock" >
            </section-questions>
        </div>
    </div>
</template>

<script>
import SectionQuestions from "../Questions/SectionQuestions";
import NavigationScreen from "../NavigationScreen";

export default {
    name: "Navigation",
    components: {NavigationScreen, SectionQuestions},
    data: () => ({
        textInstruction: '',
        questions: [],
        screens: [],
    }),
    methods: {
        addQuestionBlock(newQuestion){
            this.questions.push(newQuestion)
        },
        removeQuestionBlock(idRemovingQuestion){
            //console.log(idRemovingQuestion)
            this.questions = this.questions.filter(el => el.id !== idRemovingQuestion)
            //console.log(this.questions)
        },
        changeNameScreen(data){
            this.screens.filter(screen => screen.id === data.id)[0].name = data.val
            //this.questions.filter(el=>el.id === obj.id)[0].text = obj.text
        },
        setDataScreen(obj){
            this.screens.filter(screen => screen.id === obj.id)[0].data = obj.data
        },
        addScreen(){
            let idScreen = this.screens.length+1
            this.screens.push({
                id: idScreen,
                name: 'Экран №'+ idScreen,
                data: {}
            })
            this.openNotification('top-center', 'success', `<i class='bx bx-check'></i>`)
        },
        removeScreen(id){
            this.screens = this.screens.filter(screen => screen.id !== id)
        },
        openNotification(position = null, color, icon) {
            const noti = this.$vs.notification({
                icon,
                color,
                position,
                title: 'Экран добавлен!',
                text: `Новый экран добавлен в список`
            })
        },
    }
}
</script>

<style scoped>

</style>
