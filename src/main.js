import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'boxicons'
import ElementPlus from 'element-plus'
import './assets/style.css'
// import { projectAuth } from './firebase/config'
// import locale from 'element-ui/lib/locale/lang/en'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

// let app

// projectAuth.onAuthStateChanged(() => {
//   if (!app) {
//     app = createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
//   }
// })