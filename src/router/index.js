import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import loginseup from '@/components/login-setup'
import login from '@/components/login'
import dash from '@/components/dash'
import dashboard from '@/components/dashboard'

Vue.use(Router)

const routes = [
  { path: '/', name: 'loginseup', component: loginseup },
  { path: '/login', name: 'login', component: login },
  { path: '/dash', name: 'dash', component: dash },
  { path: '/dashboard', name: 'dashboard', component: dashboard },
  { path: '*', redirect: '/' }
]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
