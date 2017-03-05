import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import loginseup from '@/components/login-setup'
import login from '@/components/login'

Vue.use(Router)

const routes = [
  { path: '/', name: 'loginseup', component: loginseup },
  { path: '/login', name: 'login', component: login },
  { path: '*', redirect: '/' }
]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
