import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Apis} from "@/services/api/apis";

createApp(App).use(router).mount('#app')

export const apis = new Apis('http://localhost');
