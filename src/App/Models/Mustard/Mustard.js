import React from "react";
import { Canvas } from "react-three-fiber";

import Model from "../../Model/Model";
import Controls from "../../Controls/Controls";

const Mustard = () => (
  <Canvas camera={{ position: [-150, -50, -50] }}>
    <ambientLight intensity={1} />
    <pointLight intensity={1} position={[0, 300, 500]} />
    <pointLight intensity={1} position={[500, 100, 0]} />
    <Controls />
    <Model url="/models/Mustard/mustard.glb" />
  </Canvas>
);

export default Mustard;
