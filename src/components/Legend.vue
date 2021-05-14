<template>
    <div class="legend">
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
    justify-content: space-around;
    align-items: center;    
    height: 70px;
    &__item-name{
        padding: 10px 20px;
        color: #000;
    }
}
</style>