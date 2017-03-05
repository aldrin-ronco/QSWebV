import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import loginseup from '@/components/login-setup'

Vue.use(Router)

const routes = [
  { path: '/', name: 'loginseup', component: loginseup },
  { path: '*', redirect: '/' }
]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
