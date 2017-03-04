import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import loginSeup from '@/components/login-setup'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '/loginSetup', name: 'loginSetup', component: loginSeup }
]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
