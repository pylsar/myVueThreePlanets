<template>
    <div class="planet" >
        <div class="planet__left">
            <h1 class="planet__title">{{planet.name}}</h1>
            <span>{{id}}</span>
            <p>{{planet.desc}}</p> 
            <ul>
                <li class="planet__data">Объем: {{planet.volume}} км<sup>3</sup></li>
                <li class="planet__data">Маса: {{planet.weight}} кг</li>
            </ul>
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
import { TimelineMax } from "gsap/all";
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
    methods: {
        anim: function(){
            let tl = new TimelineMax();
            tl
            .fromTo(".planet__title", 1, { y: -1000 }, { y: 0 })
            .fromTo(".planet__data:first-child", .5, { opacity: 0}, { opacity: 1 })
            .fromTo(".planet__data:nth-child(2)", .5, { opacity: 0 }, { opacity: 1 });
        }
    },
    mounted(){
        this.anim();
    }
    
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
    &__title{
        font-size: 34px;
        text-transform: uppercase;
    }
}


</style>