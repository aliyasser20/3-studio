import React from "react";
import { Canvas } from "react-three-fiber";

import Controls from "./Controls/Controls";
import Rocket from "./Rocket/Rocket";

const CanvasArea = () => (
  // <Canvas camera={{ position: [0, 0, -900] }}>
  <Canvas camera={{ position: [20, 20, -20] }}>
    <ambientLight intensity={1} />
    {/* <pointLight intensity={1} position={[0, 0, 5]} /> */}
    {/* 
    <pointLight intensity={10} position={[0, 300, 500]} />
    <pointLight intensity={10} position={[500, 100, 0]} />
    <pointLight intensity={10} position={[0, 100, -500]} />
    <pointLight intensity={10} position={[-500, 300, 500]} /> */}

    {/* <spotLight position={[15, 20, 5]} penumbra={1} castShadow /> */}
    <Controls />
    <Rocket url="/models/rocket/scene.gltf" />
    {/* <Rocket url="/models/car/scene.gltf" /> */}
  </Canvas>
);

export default CanvasArea;
