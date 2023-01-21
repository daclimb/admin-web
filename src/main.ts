import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Apis} from "@/services/apis";

createApp(App)
    .use(router)
    .mount('#app')

export const apis = new Apis('http://localhost');

declare global {
    interface Window {
        // eslint-disable-next-line
        kakao: any;
        daum: any;
    }
}