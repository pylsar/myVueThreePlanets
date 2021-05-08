import Vue from 'vue'
import VueRouter from 'vue-router'
import Planets from '../views/Planets.vue'
import Planet from '../components/Planet.vue'
import Grafics from '../views/Grafics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Planets',
    component: Planets
  },
  {
    path: '/planet/:id',
    name: 'Planet',
    component: Planet,
    props: true
  },
  {
    path: '/grafics',
    name: 'Grafics',
    component: Grafics
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
