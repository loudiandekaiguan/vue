import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: "*", redirect: '/home' },
    { path: "/home", component: Home, meta: { show: true } },
    { path: "/search/:keyword?", component: Search, meta: { show: true }, name: 'search' },
    { path: "/register", component: Register, meta: { show: false } },
    { path: "/login", component: Login, meta: { show: false } }
  ]
})   