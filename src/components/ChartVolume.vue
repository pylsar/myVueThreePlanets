<template>
  <div class="chart">
    <svg :width="width" :height="height">
      <rect
        v-for="(chart, index) in getPlanetsWeight"
        :key="index"
        :fill="`#8a${Number((255 / getPlanetsWeight.length) * (index + 1)).toString(16)}00`"
        style="transition: all 1s ease-in"
        :x="(index * width) / getPlanetsWeight.length"
        :y="height - chart"
        :height="chart"
        :width="width / getPlanetsWeight.length"
      ></rect>
    </svg>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: "Chart",
  data() {
    return {
      width: 500,
      height: 500,
    };
  },
  computed:{
      ...mapGetters(['getPlanetsWeight'])
  },
  mounted() {
    this.getPlanetsWeight;
  },
};
</script>
<style>
.chart {
  box-shadow: 10px 5px 5px black;
}
</style>