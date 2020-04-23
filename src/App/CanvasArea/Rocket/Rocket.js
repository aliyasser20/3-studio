import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Rocket = props => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load(props.url, setModel);
  }, [props.url]);

  return model ? (
    <primitive object={model.scene} position={[5, 10, 0]} />
  ) : null;
};

export default Rocket;
