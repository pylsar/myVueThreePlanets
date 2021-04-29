<template>
  <div class="mars">
  </div>
</template>
<script>
import * as THREE from "three";
export default{
  name: 'Mars',
  mounted(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      1000
    );
    camera.position.z = 400;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth /2, window.innerHeight/2);
    this.$el.appendChild(renderer.domElement);

    //Mars
    const geometry = new THREE.SphereGeometry(100, 40, 40);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('mars.jpg')
    });
    const mars = new THREE.Mesh(geometry, material);

    scene.add(mars);
    function animate() {
      requestAnimationFrame(animate);
      mars.rotation.y -= .01;
      renderer.render(scene, camera);
    }
    animate();

  }
}
</script>
<style>
 
</style>