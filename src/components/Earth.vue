<template>
  <div class="earth" id="earth">
  </div>
</template>
<script>
import * as THREE from "three";
export default{
  name: 'Earth',
  data(){
    return{
      camera: null,
      scene: null,
      renderer: null,
      earth: null
    }
  },
  methods:{
    init: function(){
      const earthDiv = document.getElementById('earth');

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.5,
        1000
      );
      this.camera.position.z = 200;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth /2, window.innerHeight/2); 
      earthDiv.appendChild(this.renderer.domElement);

      //Earth
      const geometry = new THREE.SphereGeometry(100, 40, 40);
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('earth.jpg')
      });
      this.earth = new THREE.Mesh(geometry, material);

      this.scene.add(this.earth);
    },
    animate: function(){
      requestAnimationFrame(this.animate);
      this.earth.rotation.y -= .01;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted(){
    this.init();
    
    this.animate();
    
  }
}
</script>
<style>
 
</style>