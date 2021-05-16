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
    height: 200px;
    width: 150px;
    background: transparent;
    &__item-name{
        padding: 10px 20px;
        color: #000;
    }
    & h3{
        color: #fff;
    }
}
</style>