import Vuex from 'vuex'
import Vue from 'vue'
import home from './home' //引入小仓库
import search from './search'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search
  }
})