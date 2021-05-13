<template>
    <div class="grafic">
        <Earth3D/>
        <div class="grafic__chart">
            <chart-weight />
        </div>
    </div>
</template>
<script>
import Earth3D from '@/components/Earth3D';
import ChartWeight from '../components/ChartWeight.vue';
export default{
    name: 'Grafics',
    components: {
        Earth3D,
        ChartWeight
    }
}
</script>
<style lang="scss">
.grafic{
    position: relative;
    &__chart{
        position: absolute;
        bottom: 0;
        left: 0;
    }
}

</style>