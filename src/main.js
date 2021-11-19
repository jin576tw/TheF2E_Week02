import { createApp } from "vue";

import App from "./App.vue";
// import Navbar from "./components/Navbar.vue"
// import Footer from "./components/Footer.vue"


import 'animate.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import axios from 'axios' 
import VueAxios from 'vue-axios' 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import $ from 'jquery';
window.$ = $;

const jsSHA = require("jssha")
const app = createApp(App);





app.use(VueAxios, axios)
app.use(jsSHA)


app.mount("#app");

