<template>
  <div class="planets">
      <div v-for="planet in getPlanets" :key="planet.id">
        <h2>{{planet.name}}</h2>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Planets',
  computed: {
    ...mapGetters(['getPlanets'])
  }
}
</script>
