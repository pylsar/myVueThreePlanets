<template>
  <div class="planets">
    <Navbar/>
    <div class="planets__left">
      <Planet v-for="planet in getPlanetsById" :key="planet.id"/>
    </div>  
    <Stars/>
  </div>
</template>

<script>
import Planet from '@/components/Planet.vue';
import Navbar from '@/components/Navbar.vue';
import Stars from '@/components/Stars.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'Planets',
  components:{
    Planet,
    Navbar,
    Stars
  },
  computed: {
    ...mapGetters(['getPlanetsById'])
  }
}
</script>
<style lang="scss" >
.planets{
  width: 100%;
  height: 100vh;
  background-image: url('../assets/img/bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
