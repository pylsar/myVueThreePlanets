<template>
  <nav class="navbar">
    <ul v-for="pagePlanet in getPlanets" :key="pagePlanet.id" :planetData="planet">
      <li><router-link :to="'/planet/' + pagePlanet.id">{{pagePlanet.name}}</router-link></li>
    </ul>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex';
export default{
    name: 'Navbar',
    computed: {
        ...mapGetters(['getPlanets'])
    }
}
</script>