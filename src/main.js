import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'boxicons'
import ElementPlus from 'element-plus'
import './assets/style.css'
import ColorPicker from '../src/packages/index'
import VueDarkMode from '@vue-a11y/dark-mode'

// import hljs from 'highlight.js'
// import 'highlight.js/styles/railscasts.css'

// import { projectAuth } from './firebase/config'
// import locale from 'element-ui/lib/locale/lang/en'

createApp(App).use(store).use(router).use(ElementPlus).use(ColorPicker).use(VueDarkMode).mount('#app')
// Vue.config.productionTip = false
// let app

// projectAuth.onAuthStateChanged(() => {
//   if (!app) {
//     app = createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
//   }
// })