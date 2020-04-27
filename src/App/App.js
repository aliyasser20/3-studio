import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Car from "./Models/Car/Car";
import Rocket from "./Models/Rocket/Rocket";
import Duck from "./Models/Duck/Duck";

const App = () => (
  // let scene;
  // let camera;
  // let renderer;
  // let controls;

  // const animate = () => {
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animate);
  // };

  // const init = () => {
  //   scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0xdddddd);

  //   camera = new THREE.PerspectiveCamera(
  //     60,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     5000
  //   );
  //   camera.position.set(0, 0, 25);
  //   // controls = new OrbitControls(camera);
  //   scene.add(new THREE.AxesHelper(500));
  //   renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   document.body.appendChild(renderer.domElement);
  //   animate();
  // };

  // init();

  // new GLTFLoader().load("/models/rocket/rocket.glb", result => {
  //   const model = result.scene.children[0];
  //   console.log(model);
  //   scene.add(model);
  //   animate();
  // });

  // const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
  // scene.add(hemiLight);

  <div className="App">
    {/* <Duck /> */}
    <Car />
    {/* <Rocket /> */}
  </div>
);
export default App;

// <div className="App">
//   <Duck />
//   {/* <Car /> */}
//   {/* <Rocket /> */}
// </div>
