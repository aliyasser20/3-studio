import React, { useRef, Fragment } from "react";
import { Canvas, useThree } from "react-three-fiber";

import * as THREE from "three";
import Model from "../../Model/Model";
import Controls from "../../Controls/Controls";

const Mustard = () => (
  <Canvas camera={{ position: [300, 0, 0] }} orthographic>
    {/* <ambientLight intensity={100} /> */}
    <pointLight intensity={1} position={[0, 300, 500]} />
    <pointLight intensity={5} position={[0, 100, -500]} />
    <pointLight intensity={5} position={[0, 100, -500]} />
    {/* <hemispheralLight position={[0, 50, 0]} /> */}
    <Controls />
    <axesHelper scale={[200, 200, 200]} />
    {/* <cameraHelper /> */}
    <Model url="/models/Mustard/mustard.glb" />
  </Canvas>
);

export default Mustard;
