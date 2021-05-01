<template>
  <div class="jupiter">
  </div>
</template>
<script>
import * as THREE from "three";
export default{
  name: 'Jupiter',
   data(){
    return{
      camera: null,
      scene: null,
      renderer: null,
      jupiter: null
    }
  },
  methods:{
    init: function(){
      const jupiterDiv = document.querySelector('.jupiter');
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
      jupiterDiv.appendChild(this.renderer.domElement);

      //jupiter
      const geometry = new THREE.SphereGeometry(100, 40, 40);
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('/jupiter.jpg')
      });
      this.jupiter = new THREE.Mesh(geometry, material);

      this.scene.add(this.jupiter);
    },

    animate: function(){
      requestAnimationFrame(this.animate);
      this.jupiter.rotation.y -= .005;
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