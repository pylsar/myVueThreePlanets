<template>
  <nav class="navbar">
    <ul>
      <li v-for="pagePlanet in getPlanets" :key="pagePlanet.id" :planetData="getPlanets">
        <router-link :to="'/planet/' + pagePlanet.id">{{pagePlanet.name}}</router-link>
      </li>
    </ul>
    <router-link to="/grafics" class="navbar__grafics">Grafics</router-link>
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
<style lang="scss">
.navbar{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  & ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    & li{
      & a{
        font-size: 80px;
        color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        &:hover{
          color: #fff;
        }
      }
    }
  }
  &__grafics{
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    text-decoration: none;
    color: #fff;
    transition: letter-spacing 1s ease;
    &:hover{
      letter-spacing: 30px;
      transition: letter-spacing 1s ease;
    }
  }
}
</style>