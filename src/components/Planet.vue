<template>
    <div class="planet" >
        <div class="planet__left">
            <h1 class="planet__title">{{planet.name}}</h1>
            <p class="planet__description js-splitme">{{planet.desc}}</p> 
            <ul>
                <li class="planet__data">Объем: {{planet.volume}} км<sup>3</sup></li>
                <li class="planet__data">Масcа: {{planet.weight}} кг</li>
            </ul>
            <button 
                @click="$router.go(-1)"
                class="planet__button"
            >
            к списку</button> 
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
import Splitter from 'split-html-to-chars';

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
            const tl = new TimelineMax();
            let els = document.querySelectorAll(".js-splitme");
            [].forEach.call(els, function(el) {
                // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
                el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
            });
            tl
            .fromTo(".planet__title", 1, { y: -1000 }, { y: 0 })
            .staggerFromTo('.letter', .2, {opacity:0}, {opacity:1}, .03)
            .fromTo(".planet__data:first-child", .5, { opacity: 0}, { opacity: 1 })
            .fromTo(".planet__data:nth-child(2)", .5, { opacity: 0 }, { opacity: 1 });
        },
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
        padding-left: 40px;
        & p{
            font-size: 30px;
            margin-bottom: 20px;
        }
        & ul{
            & li{
                font-size: 30px;
                margin-bottom: 20px;
            }
        }
    }
    &__title{
        font-size: 34px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
    }
    &__button{
        background: transparent;
        padding: 5px 10px;
        font-size: 30px;
        color: #fff;
        outline: none;
        border: 1px solid #fff;
        cursor: pointer;
        &:hover{
            background: #fff;
            color: #000;
        }
    }
}


</style>