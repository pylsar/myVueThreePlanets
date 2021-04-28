<template>
  <div class="planets">
    <Navbar/>
    <div class="planets__left">
      <Planet v-for="planet in getPlanetsById" :key="planet.id"/>
    </div>  
    <div class="planets__right">
      <Earth/>
      <Mars/>
    </div>  
  </div>
</template>

<script>
import Planet from '@/components/Planet.vue';
import Earth from '@/components/Earth.vue';
import Mars from '@/components/Mars.vue';
import Navbar from '@/components/Navbar.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'Planets',
  components:{
    Planet,
    Earth,
    Mars,
    Navbar
  },
  computed: {
    ...mapGetters(['getPlanetsById'])
  }
}
</script>
<style lang="scss" >
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
