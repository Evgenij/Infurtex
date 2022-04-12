/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/App.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('App', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from "./router";
import store from "./store/store";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(
    Vuesax, {
        colors: {
            //primary: '#3a75c4',
            primary: '#1ac4b6',
            //primary: '#18C3D4',
            //'#1164B4'
            success:'rgb(62,190,119)',
            danger:'rgb(255,65,65)',
            warning:'rgb(255, 130, 0)',
            dark:'rgb(152,152,156)'
        },
    })
Vue.use(vcdonut.default)

Vue.mixin({
    methods:{
        formattingNumber(x, delimiter){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
        },
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
})

const app = new Vue({
    el: '#app',
    router,
    store
});
