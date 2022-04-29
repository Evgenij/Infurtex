<template>
    <div class="root flex section min-h-screen relative">
        <div class="logo-block absolute">
            <svg width="159" height="40" viewBox="0 0 159 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9638 0L17.4173 4.26398L13.7269 4.2474L13.7266 4.24697L13.7264 4.2474L13.6302 4.24697L13.6787 4.33122L11.8478 7.54639L9.39433 3.28241L7.51547 6.58183L9.9689 10.8458L8.09003 14.1452L5.6366 9.88125L0 19.7795L11.5856 39.915L22.9469 39.966L20.4935 35.702L24.2806 35.719L26.734 39.983L30.5211 40L28.0677 35.736L31.7581 35.7526L31.7583 35.753L31.7586 35.7526L31.8548 35.753L31.8063 35.6688L33.6372 32.4536L36.0906 36.7176L37.9695 33.4182L35.516 29.1542L37.3949 25.8548L39.8483 30.1188L45.4849 20.2205L33.8993 0.0850387L22.538 0.0340155L24.9914 4.29799L21.2044 4.28099L18.7509 0.0170077L14.9638 0ZM21.2044 4.28099L23.6578 8.54496L29.3384 8.57048L35.8809 19.9411L33.0626 24.8902L35.516 29.1542L33.6372 32.4536L31.1837 28.1896L29.3051 31.4886L25.6142 31.472L28.0677 35.736L24.2806 35.719L21.8272 31.455L16.1465 31.4295L9.60403 20.0589L12.4223 15.1098L9.9689 10.8458L11.8478 7.54639L14.3012 11.8104L16.1798 8.51138L19.8707 8.52796L17.4173 4.26398L21.2044 4.28099Z" fill="url(#paint0_linear_519_373)"/>
                <path d="M63.1014 12.5H66.0214V26.5H63.1014V12.5ZM79.3789 12.5H82.1589V27.2L72.2389 17.86V26.5H69.4389V11.8L79.3789 21.14V12.5ZM85.5811 12.5H93.7011V15.02H88.3811V18.14H93.5011V20.54H88.3811V26.5H85.5811V12.5ZM96.6233 12.5H99.4833V21.74C99.4833 22.5133 99.6966 23.1467 100.123 23.64C100.55 24.12 101.17 24.36 101.983 24.36C102.81 24.36 103.43 24.12 103.843 23.64C104.27 23.1467 104.483 22.5133 104.483 21.74V12.5H107.363V21.9C107.363 22.9933 107.13 23.92 106.663 24.68C106.197 25.44 105.557 26.0133 104.743 26.4C103.93 26.7867 103.01 26.98 101.983 26.98C100.957 26.98 100.037 26.7867 99.2233 26.4C98.4233 26.0133 97.7899 25.44 97.3233 24.68C96.8566 23.92 96.6233 22.9933 96.6233 21.9V12.5ZM110.678 12.5H115.398C116.505 12.5 117.445 12.6933 118.218 13.08C119.005 13.4533 119.605 13.9733 120.018 14.64C120.431 15.3067 120.638 16.0867 120.638 16.98C120.638 17.9667 120.385 18.82 119.878 19.54C119.371 20.2467 118.638 20.76 117.678 21.08L121.478 26.5H118.058L114.798 21.42H113.558V26.5H110.678V12.5ZM115.218 14.98H113.558V19.14H115.218C115.965 19.14 116.558 18.96 116.998 18.6C117.438 18.2267 117.658 17.7133 117.658 17.06C117.658 16.3933 117.438 15.88 116.998 15.52C116.558 15.16 115.965 14.98 115.218 14.98ZM122.08 15.1V12.5H132.5V15.1H128.72V26.5H125.84V15.1H122.08ZM134.525 12.5H143.445V14.94H137.325V17.88H143.045V20.26H137.325V24.06H143.445V26.5H134.525V12.5ZM154.143 12.5H157.663L153.343 19.26L157.963 26.5H154.423L151.663 21.5L148.783 26.5H145.263L149.983 19.26L145.763 12.5H149.283L151.683 16.9L154.143 12.5Z" fill="#222A30"/>
                <defs>
                    <linearGradient id="paint0_linear_519_373" x1="0" y1="40" x2="44.4268" y2="-1.14263" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#339FE3"/>
                        <stop offset="1" stop-color="#4FD5B8"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="background-lines absolute h-full">
        </div>

        <div class="section__buttons flex items-center justify-end">
            <div class="section__panel reg-moderator buttons-panel flex flex-col justify-center items-center">
                <div class="buttons-panel__header header flex justify-center flex-col w-full h-full">
                    <h2 class="text-4xl font-bold text-center mb-12">Вы - модератор</h2>
                    <h4 class="text-base font-normal text-center">Став модератором вам откроется возможность</h4>
                    <div class="list-possibility flex flex-col items-start">
                        <div class="list-possibility__item flex items-center">
                            <i class="bx bx-check-double bx-sm pr-2"></i>
                            <p class="w-full">Проводить тестирование дизайн-решений</p>
                        </div>
                        <div class="list-possibility__item flex items-center">
                            <i class="bx bx-check-double bx-sm pr-2"></i>
                            <p class="w-full">Собирать полную статистику взаимодействия с вашим продуктом через дизайн</p>
                        </div>
                        <div class="list-possibility__item flex items-center">
                            <i class="bx bx-check-double bx-sm pr-2"></i>
                            <p class="w-full">Устанавливать конкретные критерии для подбора респондентов</p>
                        </div>
                    </div>
                </div>
                <router-link :to="{name: 'reg-respondent'}" class="link link-white min-w-max text-center">
                    стать респондентом
                </router-link>
            </div>
        </div>

        <div class="section__form reg-moderator flex items-center flex-grow">
            <div class="section__panel block-form flex flex-col justify-center items-center">
                <form class="block-form__form form w-full flex flex-col"
                    @submit.prevent="register">
                    <div class="form__row">
                        <h1 class="header font-bold text-3xl">
                            Регистрация
                        </h1>
                    </div>
                    <div class="form__row row flex flex-col">
                        <vs-input primary class="w-full row__item" v-model.trim="userData.username" placeholder="имя">
                            <template #icon>
                                <i class='bx bx-user'></i>
                            </template>
                        </vs-input>
                        <vs-input primary class="w-full row__item" v-model.trim="userData.email" placeholder="email">
                            <template #icon>
                                <i class='bx bx-at'></i>
                            </template>
                            <template v-if="this.$v.userData.email.email && $v.userData.email.length>0" #message-success>
                                Корректный формат email
                            </template>
                            <template v-else-if="!$v.userData.email.email" #message-danger>
                                Некорректный формат email
                            </template>
                            <template v-if="$v.userData.email.$dirty && !$v.userData.email.required" #message-danger>
                                обязательное поле
                            </template>
                        </vs-input>
                        <vs-input
                            type="password"
                            v-model.trim="userData.password"
                            placeholder="пароль"
                            :progress="getProgress"
                            :visiblePassword="hasVisiblePassword"
                            @click-icon="hasVisiblePassword = !hasVisiblePassword"
                            class="w-full row__item">
                            <template #icon>
                                <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                                <i v-else class='bx bx-hide'></i>
                            </template>

                            <template v-if="getProgress == 0" #message-danger>
                            </template>
                            <template v-else-if="getProgress <= 20" #message-danger>
                                Слабый пароль
                            </template>
                            <template v-else-if="getProgress <= 60" #message-warn>
                                Пароль средней сложности
                            </template>
                            <template v-else-if="getProgress <= 80" #message-success>
                                Пароль высокой сложности
                            </template>
                            <template v-else-if="getProgress >= 100" #message-success>
                                Надежность пароля максимальна
                            </template>
                        </vs-input>
                        <vs-input
                            type="password"
                            v-model.trim="userData.password_confirmation"
                            placeholder="пароль повторно"
                            class="w-full row__item">
                            <template #icon>
                                <i class='bx bx-lock'></i>
                            </template>
                        </vs-input>
                    </div>
                    <div class="form__row flex flex-col items-center">
                        <vs-button
                            size="large"
                            class="button w-full"
                        >
                            Зарегистрироваться
                        </vs-button>
                        <router-link :to="{name: 'auth'}" class="link mt-1">
                            войти в систему
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength, between, email } from 'vuelidate/lib/validators'
	import role from '../../enums'

    import store from '../../store/store'

    export default {
        name: "registration-moderator",
        mixins: [validationMixin],
        data:() => ({
            active: 0,
            userData:{
                username: 'Evgenij',
                email: 'evgenij.ermolenko@list.ru',
                password: 'evg12345678UP*',
                password_confirmation: 'evg12345678UP*',
				role: role.userRole.Moderator,
				filledData: true
            },
            hasVisiblePassword: false,
            hasVisiblePasswordConfirmed: false
        }),
        validations: {
            userData:{
                username: {
                    required,
                    minLength: minLength(1),
                },
                email:{
                    required,
                    email
                },
                password:{
                    required
                }
            },
        },
        methods:{
            checkForm(){
                this.$v.userData.$touch()
                if(!this.$v.userData.$error){
                    console.log('success')
                }
            },
            register() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    store.dispatch('register', this.userData)
                        .then((res)=>{
                            this.$router.push({name: 'dashboard'})
                        })
                }
            }
        },
        computed: {
            validEmail() {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.email)
            },
            getProgress() {
                let progress = 0
                // at least one number
                if (/\d/.test(this.userData.password)) {
                    progress += 20
                }
                // at least one capital letter
                if (/(.*[A-Z].*)/.test(this.userData.password)) {
                    progress += 20
                }
                // at menons a lowercase
                if (/(.*[a-z].*)/.test(this.userData.password)) {
                    progress += 20
                }
                // more than 5 digits
                if (this.userData.password.length >= 6) {
                    progress += 20
                }
                // at least one special character
                if (/[^A-Za-z0-9]/.test(this.userData.password)) {
                    progress += 20
                }
                return progress
            }
        }
    }
</script>

<style lang="scss">
</style>
