import Vue from 'vue'
import App from './App.vue'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import components from '@/components'
import axios from '@/api/axios'
// 导入全局样式
import '@/styles/index.less'
Vue.use(components)
// 基准路径
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// // tolen认证
// axios.defaults.headers = {
//   Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm74')).token
// }
Vue.prototype.$http = axios
Vue.use(ELEMENT)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
