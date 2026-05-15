import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/crave.vue'
import List from '../components/list.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/list', component: List },
]

export default createRouter({
  history: createWebHistory(),
  routes
})