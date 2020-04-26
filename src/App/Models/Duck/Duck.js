import React from "react";
import { Canvas } from "react-three-fiber";

import Model from "../../Model/Model";
import Controls from "../../Controls/Controls";

const Duck = () => (
  <Canvas camera={{ position: [20, 20, -20] }}>
    <ambientLight intensity={1} />
    <Controls />
    <Model url="/models/duck/duck.glb" />
  </Canvas>
);

export default Duck;
