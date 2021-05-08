<template>
  <div class="earth" id="earth3D" @mousemove="move">
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
      earth: null,
      group: null
    }
  },
  methods:{
    init: function(){
        const earthDiv = document.getElementById('earth3D');

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.5,
        1000
        );
        this.camera.position.z = 200;

        this.group = new THREE.Group();

        //Earth3D
        const geometry = new THREE.SphereGeometry(100, 40, 40);
        const material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load('/earth.jpg'),
            overdraw: 0.5,
        });
        this.earth = new THREE.Mesh(geometry, material);
        this.group.add(this.earth);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth /2, window.innerHeight/2); 
        earthDiv.appendChild(this.renderer.domElement);

        this.scene.add(this.group);
    },

    render: function(){
        this.camera.lookAt(this.scene.position);
      this.group.rotation.y -= 0.01;
      this.renderer.render(this.scene, this.camera);
    },
        animate: function(){
      requestAnimationFrame(this.animate);
        this.render();
    },
    move(){
        this.group.rotation.y += event.movementX / 100;
        this.group.rotation.x += event.movementY / 100;
    }
  },
  mounted(){
    this.init();
    this.animate();
  },
}
</script>
<style>
 
</style>