<template>
    <div class="legend">
        <h3>Legend</h3>
        <div class="legend__item" v-for="(item, index) in getPlanets" :key="index">
            <span 
                class="legend__item-name"
                :style="{background: item.fill}"
            >
                {{item.name}}
            </span>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default{
    name: 'Legend',
    computed: {
        ...mapGetters(['getPlanets'])
    }
}
</script>
<style lang="scss">
.legend{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;    
    width: 80px;
    background: transparent;
    &__item{
        width: 100%;
        height: 25px;
        display: flex;
    }
    &__item-name{
        color: #000;
        width: 100%;
        text-transform: capitalize;
    }
    & h3{
        color: #fff;
    }
}
</style>