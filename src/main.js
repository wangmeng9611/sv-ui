import Vue from 'vue'
import App from './App.vue'
import router from '../router'
Vue.config.productionTip = false
import './assets/font/iconfont.less'
import button from './pages/button'
import dialog from './pages/confirm'
import dropdown from './pages/dropdown'
Vue.use(button)
Vue.use(dialog)
Vue.use(dropdown)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
