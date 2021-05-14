<template>
  <div class="chart-weight">
    <svg :width="width" :height="height">
      <g>
        <rect
          v-for="(chart, index) in getPlanets"
          :key="index"
          :fill="chart.fill"
          :x="(index * width) / getPlanets.length"
          :y="height - chart.weightCof"
          :height="chart.weightCof"
          :width="width / getPlanets.length"
          class="chart-weight__rect"
          >
        </rect>
        <text x="10" y="50" font-family="Verdana" font-size="35" fill="white">
          Масса
        </text>
      </g>  
    </svg>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import { TimelineMax } from "gsap/all";
export default {
  name: "ChartWeight",
  data() {
    return {
      width: 300,
      height: 300,
    };
  },
  computed:{
      ...mapGetters(['getPlanets'])
  },
  methods:{
    animationChart(){
      const tl = new TimelineMax();
      
      tl
      .from(".chart-weight__rect",2,{y:200})
    }
  },
  mounted(){
    this.animationChart();
  }
};
</script>
<style lang="scss">
.chart-weight {
  & svg{
    border-left: 1px solid white;
    border-bottom: 1px solid white;
  }
}
</style>