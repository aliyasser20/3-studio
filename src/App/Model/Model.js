import React, { useState, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = props => {
  const [model, setModel] = useState();

  const createModel = gltf => {
    const theModel = gltf.scene;
    const INITIAL_MTL = new THREE.MeshPhongMaterial({
      color: 0x008000,
      shininess: 10
    });

    console.log(theModel);
    theModel.traverse(o => {
      if (o.isMesh && o.name === "Body_carbon_fibre_0") {
        console.log(o);
        o.material = INITIAL_MTL;
      }
    });

    setModel(gltf.scene);
  };

  useEffect(() => {
    new GLTFLoader().load(props.url, createModel);
  }, [props.url]);

  return model ? <primitive object={model} /> : null;
};

export default Model;
