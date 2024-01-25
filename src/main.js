import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import VueRouter from 'vue-router';
Vue.config.productionTip = false

//按需引入
// Vue.use(Row);
// Vue.use(Button);

//全局引入
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
