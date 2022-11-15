import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'

Vue.component('TypeNav', TypeNav)//注册全局组件

import '@/mock/mockServer'
import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  //注册路由
  router,
  store
}).$mount('#app')


