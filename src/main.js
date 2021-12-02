import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { NavBar, Form, Field, Button } from 'vant'
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.config.productionTip = false

// 6. 在new Vue()中注入路由对象
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
