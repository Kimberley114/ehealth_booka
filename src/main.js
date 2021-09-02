import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus'
import locale from 'element-ui/lib/locale/lang/en'
import './assets/style.css';

createApp(App).use(store).use(router).use(ElementPlus, { locale }).mount('#app');
