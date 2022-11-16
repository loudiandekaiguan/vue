import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import Carousel from '@/components/Carousel'

Vue.component('TypeNav', TypeNav)
Vue.component(Carousel.name, Carousel)

import '@/mock/mockServer'
import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')


