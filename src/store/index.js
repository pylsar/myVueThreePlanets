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
        volume: '10,8321⋅1011',
        weight: '5,97×1024',
        weightCof: 100,
        volumeCof: 100,
        fill: 'skyblue',
      },
      {
        id: 2,
        name: 'mars',
        desc: 'Марс — четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы.',
        volume: '1,6318⋅1011',
        weight: '1,9891·1030',
        weightCof: 120,
        volumeCof: 30,
        fill: 'red',
      },
      {
        id: 3,
        name: 'sun',
        desc: 'Со́лнце — одна из звёзд нашей Галактики (Млечный Путь) и единственная звезда Солнечной системы.',
        volume: '	1,40927⋅1011',
        weight: '6,42×1023',
        weightCof: 230,
        volumeCof: 50,
        fill: 'yellow',
      },
      {
        id: 4,
        name: 'jupiter',
        desc: 'Юпи́тер — крупнейшая планета Солнечной системы, пятая по удалённости от Солнца.',
        volume: '1,43128⋅1015',
        weight: '1,8986⋅1027',
        weightCof: 150,
        volumeCof: 210,
        fill: 'brown',
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
