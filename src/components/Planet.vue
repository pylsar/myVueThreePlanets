<template>
    <div class="planet" >
        <div class="planet__left">
            <h1>{{planet.name}}</h1>
            <span>{{id}}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam labore. Magni excepturi consequatur minima veritatis est ducimus esse ex sapiente debitis nihil, cum facere sed quae vero. Cupiditate, doloremque!</p> 
            <button @click="$router.go(-1)">к списку</button> 
        </div>
        <div class="planet__right" v-if="id == 1">
            <Earth/>
        </div>
        <div class="planet__right" v-else-if="id == 2">
            <Mars />
        </div>
        <div class="planet__right" v-else-if="id == 3">
            <Sun />
        </div>
        <div class="planet__right" v-else-if="id == 4">
            <Jupiter />
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import Earth from '@/components/Earth.vue';
import Mars from '@/components/Mars.vue';
import Sun from '@/components/Sun.vue';
import Jupiter from '@/components/Jupiter.vue';

export default{
    name: 'Planet',
    components:{
        Earth,
        Mars,
        Sun,
        Jupiter
    },
    data() {
        return {
            id: this.$route.params['id']
        };
    },
    computed: {
        ...mapGetters(['getPlanetsById', 'getPlanets']),
        planet(){
            //необходимо привести к числу
            return this.$store.getters.getPlanetsById(+this.$route.params.id);
        },
    },
    watch:{
        $route(toRoute){
            this.id = toRoute.params.id
        }
    },
    
}
</script>
<style lang="scss">
.planet{
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