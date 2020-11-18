import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/login',
    component: () => import('@/views/Login')
    },
    {
    path: '/chat',
    component: () => import('@/views/Chat')
    }]
})