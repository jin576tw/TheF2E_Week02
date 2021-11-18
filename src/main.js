import { createApp } from "vue";

import App from "./App.vue";
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import FindStation_page from "./components/FindStation_page.vue"


import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import axios from 'axios' 
import VueAxios from 'vue-axios' 


import $ from 'jquery';
window.$ = $;

const jsSHA = require("jssha")
const app = createApp(App);

app.component('navbar',Navbar)
app.component('Footer',Footer)
app.component('find-station-page',FindStation_page)

app.use(VueAxios, axios)
app.use(jsSHA)


app.mount("#app");

