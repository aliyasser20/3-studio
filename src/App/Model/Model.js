import React, { useState, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = props => {
  const [model, setModel] = useState();

  const createModel = (geometry, materials) => {
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshFaceMaterial(materials)
    );
    mesh.scale.set(150, 150, 150);
    mesh.position.y = 0;
    mesh.position.x = 0;
    mesh.rotation.x = 340;

    console.log(geometry);

    setModel(mesh);
  };

  useEffect(() => {
    new GLTFLoader().load(props.url, setModel);
  }, [props.url]);

  console.log(model);

  // const { nodes, materials, animations } = useLoader(GLTFLoader, props.url);
  // console.log(nodes, materials, animations);

  return model ? (
    <primitive object={model.scene} position={[5, 10, 0]} />
  ) : null;
};

export default Model;
