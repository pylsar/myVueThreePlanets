<template>
  <div class="mars">
  </div>
</template>
<script>
import * as THREE from "three";
export default{
  name: 'Mars',
   data(){
    return{
      camera: null,
      scene: null,
      renderer: null,
      mars: null
    }
  },
  methods:{
    init: function(){
      const marsDiv = document.querySelector('.mars');
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
      marsDiv.appendChild(this.renderer.domElement);

      //mars
      const geometry = new THREE.SphereGeometry(100, 40, 40);
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('/mars.jpg')
      });
      this.mars = new THREE.Mesh(geometry, material);

      this.scene.add(this.mars);
    },

    animate: function(){
      requestAnimationFrame(this.animate);
      this.mars.rotation.y -= .005;
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