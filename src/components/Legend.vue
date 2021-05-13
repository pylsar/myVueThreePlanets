<template>
    <div class="legend">
        <div class="legend__item" v-for="(item, index) in getPlanets" :key="index">
            <span>
            {{item.name}}</span>
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