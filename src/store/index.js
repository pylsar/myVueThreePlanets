import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planets: [
      {
        id: 1,
        'name': 'earth',
        img: 'earth.jpg'
      },
      {
        id: 2,
        name: 'mars'
      },
      {
        id: 1,
        name: 'sun'
      },
      {
        id: 1,
        name: 'jupiter'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getPlanets(state){
      return state.planets;
    }
  },
  modules: {
  }
})
