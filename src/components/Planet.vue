<template>
    <div class="planet">
        <h1>{{planet.name}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam labore. Magni excepturi consequatur minima veritatis est ducimus esse ex sapiente debitis nihil, cum facere sed quae vero. Cupiditate, doloremque!</p> 
        <button @click="$router.go(-1)">к списку</button> 
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
    name: 'Planet',
    props: {
        planetData: {  
            type: Object,
            default(){
                return{}  
            }
        }
    },
    data() {
        return {
            id: this.$route.params['id']
        };
    },
    computed: {
        ...mapGetters(['getPlanetsById']),
        planet(){
        //необходимо привести к числу
        return this.$store.getters.getPlanetsById(+this.$route.params.id);
    },
    },
    watch:{
        $route(toRoute){
            this.id = toRoute.params.id
        }
    }

}
</script>