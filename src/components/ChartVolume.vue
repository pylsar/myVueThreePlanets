<template>
  <div class="chart-volume">
    <svg :width="width" :height="height">
      <g>
        <rect
          v-for="(chart, index) in getPlanets"
          :key="index"
          :fill="chart.fill"
          :x="(index * width) / getPlanets.length"
          :y="height - chart.volumeCof"
          :height="chart.volumeCof"
          :width="width / getPlanets.length"
          class="chart-volume__rect"
          >
        </rect>
        <text x="100" y="50" font-family="Verdana" font-size="35" fill="white">
          Плотность
        </text>
      </g>  
    </svg>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import { TimelineMax } from "gsap/all";
export default {
  name: "ChartVolume",
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
    animationVolume(){
      const tl = new TimelineMax();
      
      tl
      .from(".chart-volume__rect",2,{y:500})
    }
  },
  mounted(){
    this.animationVolume();
  }
};
</script>
<style lang="scss">
.chart-volume {
  & svg {
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    & rect{
      transition: all 5s ease;
    }
  }
}
</style>