import React, { useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Controls from "../Controls/Controls";

import createModel from "../../helpers/create_model";

const Model = props => {
  const [model, setModel] = useState(null);
  const [box, setBox] = useState();
  const [far, setFar] = useState(0);
  const [near, setNear] = useState(0);
  const [sizeBounding, setSizeBounding] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    new GLTFLoader().load(props.url, gltf =>
      createModel(gltf, setBox, setFar, setModel, setSizeBounding, setNear)
    );
  }, [props.url]);

  const output = model ? (
    <Canvas
      camera={{
        position: [-sizeBounding.x, sizeBounding.y, sizeBounding.z],
        fov: 45,
        far,
        near
      }}
    >
      <pointLight intensity={1} position={[0, 300, 500]} />
      <pointLight intensity={5} position={[0, 100, -500]} />
      <pointLight intensity={5} position={[0, 100, -500]} />
      <Controls />
      {/* <axesHelper scale={[200, 200, 200]} /> */}
      <primitive object={model} />
      {/* <boxHelper object={box} /> */}
    </Canvas>
  ) : null;

  return <div>{output}</div>;
};

export default Model;
