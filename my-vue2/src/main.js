import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'
import './assets/less/index.less'
import './api/mock.js'
import './api/api'
import api from './api/api'

const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$api =api//调用mock接口用de
app.use(router).use(store)
//app.use(router)
app.mount('#app')
