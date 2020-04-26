import React from "react";
import { Canvas } from "react-three-fiber";

import Model from "../../Model/Model";
import Controls from "../../Controls/Controls";

const Car = () => (
  <Canvas camera={{ position: [0, 0, -900] }}>
    <ambientLight intensity={1} />
    <pointLight intensity={10} position={[0, 300, 500]} />
    <pointLight intensity={10} position={[500, 100, 0]} />
    <pointLight intensity={10} position={[0, 100, -500]} />
    <pointLight intensity={10} position={[-500, 300, 500]} />

    <Controls />
    <Model url="/models/car/car.glb" />
  </Canvas>
);

export default Car;
