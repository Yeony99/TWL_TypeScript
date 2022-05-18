import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from "../src/router";

createApp(App).use(router).mount('#app')
