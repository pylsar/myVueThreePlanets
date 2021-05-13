<template>
    <div class="grafic">
        <Earth3D/>
        <div class="grafic__weight">
            <chart-weight />
        </div>
        <div class="grafic__volume">
            <chart-volume />
        </div>
    </div>
</template>
<script>
import Earth3D from '@/components/Earth3D';
import ChartWeight from '../components/ChartWeight.vue';
import ChartVolume from '../components/ChartVolume.vue';
export default{
    name: 'Grafics',
    components: {
        Earth3D,
        ChartWeight,
        ChartVolume
    }
}
</script>
<style lang="scss">
.grafic{
    position: relative;
    &__weight{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    &__volume{
        position: absolute;
        bottom: 0;
        right: 0;
    }
}

</style>