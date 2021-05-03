import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planets: [
      {
        id: 1,
        name: 'earth',
        desc: 'Земля́ — третья по удалённости от Солнца планета Солнечной системы.',
        volume: '10,8321⋅1011 км³',
      },
      {
        id: 2,
        name: 'mars',
        desc: 'Марс — четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы.',
        volume: '1,6318⋅1011 км³ '
      },
      {
        id: 3,
        name: 'sun',
        desc: 'Со́лнце — одна из звёзд нашей Галактики (Млечный Путь) и единственная звезда Солнечной системы.',
        volume: '	1,40927⋅1027 м³'
      },
      {
        id: 4,
        name: 'jupiter',
        desc: 'Юпи́тер — крупнейшая планета Солнечной системы, пятая по удалённости от Солнца.',
        volume: '1,43128⋅1015 км³',
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
    },
    getPlanetsById: (state) => (id) => state.planets.find((planet) => planet.id === id)
  },
  modules: {
  }
})
