// 封装vue的插件 完成当前文件夹下所有的组件全局注册
import MyBread from '@/components/my-bread.vue'
export default {
  install (Vue) {
    Vue.component(MyBread.name, MyBread)
  }
}
