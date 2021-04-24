<template>
  <div class="planets">
    <div class="planets__left">
      <Planet v-for="planet in getPlanets" :key="planet.id" :planetData="planet"/>
    </div>  
    <div class="planets__right">
      <Earth/>
    </div>  
  </div>
</template>

<script>
import Planet from '@/components/Planet.vue';
import Earth from '@/components/Earth.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'Planets',
  components:{
    Planet,
    Earth
  },
  computed: {
    ...mapGetters(['getPlanets'])
  }
}
</script>
<style lang="scss">
.planets{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  &__left{
    width: 40%;
  }
 
}
</style>
