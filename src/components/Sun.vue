<template>
  <div class="sun">
  </div>
</template>
<script>
import * as THREE from "three";
export default{
  name: 'Sun',
   data(){
    return{
      camera: null,
      scene: null,
      renderer: null,
      sun: null
    }
  },
  methods:{
    init: function(){
      const sunDiv = document.querySelector('.sun');
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
      sunDiv.appendChild(this.renderer.domElement);

      //sun
      const geometry = new THREE.SphereGeometry(100, 40, 40);
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('/sun.jpg')
      });
      this.sun = new THREE.Mesh(geometry, material);

      this.scene.add(this.sun);
    },

    animate: function(){
      requestAnimationFrame(this.animate);
      this.sun.rotation.y -= .005;
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