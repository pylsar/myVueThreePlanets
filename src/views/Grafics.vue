<template>
    <div class="grafic">
        <!-- <Earth3D/> -->
        <div class="grafic__chart">
            <chart-volume />
        </div>
    </div>
</template>
<script>
// import Earth3D from '@/components/Earth3D';
import ChartVolume from '../components/ChartVolume.vue';
export default{
    name: 'Grafics',
    components: {
        // Earth3D,
        ChartVolume
    }
}
</script>
<style lang="scss">
.grafic{
    position: relative;
    &__chart{
        position: absolute;
        top: 0;
        left: 0;
    }
}

</style>