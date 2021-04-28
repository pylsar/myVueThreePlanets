import Vue from 'vue'
import VueRouter from 'vue-router'
import Planets from '../views/Planets.vue'
import Planet from '../components/Planet.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Planets',
    component: Planets
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/planet/:id',
    name: 'Planet',
    component: Planet,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
