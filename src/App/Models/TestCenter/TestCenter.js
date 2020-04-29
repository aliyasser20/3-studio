import React, { useState, useEffect, Fragment } from "react";
import { Canvas, useThree, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

import Model from "../../Model/Model";
import Controls from "../../Controls/Controls";

const Mustard = props => {
  const [model, setModel] = useState();
  const [center, setCenter] = useState({ x: 0, y: 0, z: 0 });
  const [z, setZ] = useState(0);
  const [box, setBox] = useState();
  const [newOrigin, setNewOrigin] = useState({ x: 0, y: 0, z: 0 });

  const createModel = gltf => {
    const theModel = gltf.scene;
    const INITIAL_MTL = new THREE.MeshPhongMaterial({
      color: 0x008000,
      shininess: 2
    });

    const INITIAL_MTL_METAL = new THREE.MeshStandardMaterial({
      color: 0x008000,
      metalness: 1,
      roughness: 0.5
    });

    let part;

    // console.log("model position ", theModel);

    theModel.traverse(o => {
      if (o.isMesh) {
        // console.log(o);
        part = o;
        o.material = INITIAL_MTL_METAL;
      }
    });

    const boundingBox = new THREE.Box3();
    boundingBox.setFromObject(theModel);

    const centerNew = new THREE.Vector3();
    boundingBox.getCenter(centerNew);

    const size = new THREE.Vector3();
    boundingBox.getSize(size);

    const fov = 75 * (Math.PI / 180);
    const maxDim = Math.max(size.x, size.y, size.z);
    const cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));

    // console.log(boundingBox);
    // console.log(centerNew);

    const boxNew = new THREE.BoxHelper(theModel, 0xffff00);

    // setNewOrigin({
    //   x: (boundingBox.max.x - boundingBox.min.x) / 2,
    //   y: (boundingBox.max.y - boundingBox.min.y) / 2,
    //   z: (boundingBox.max.z - boundingBox.min.z) / 2
    // });

    setNewOrigin({
      x: theModel.position.x - centerNew.x,
      y: theModel.position.y - centerNew.y,
      z: theModel.position.z - centerNew.z
    });
    // const sizeBoxNew = new THREE.Vector3();
    // boxNew.getSize(sizeBoxNew);

    // console.log(boundingBox.max.y - boundingBox.min.y);
    setCenter(centerNew);
    setZ(cameraZ);
    setBox(boxNew);

    // setModel(part);
    setModel(theModel);
  };

  useEffect(() => {
    new GLTFLoader().load(props.url, createModel);
  }, [props.url]);

  console.log("center", center);
  console.log("newOrigin", newOrigin);

  return (
    <Canvas>
      <perspectiveCamera
        position={[center.x, center.y, z]}
        lookAt={center}
        onUpdate={self => self.updateProjectionMatrix()}
      />
      {/* <ambientLight intensity={100} /> */}
      <pointLight intensity={1} position={[0, 300, 500]} />
      <pointLight intensity={5} position={[0, 100, -500]} />
      <pointLight intensity={5} position={[0, 100, -500]} />
      <Controls />
      <axesHelper scale={[200, 200, 200]} />
      {model ? (
        <Fragment>
          <primitive
            object={model}
            position={[newOrigin.x, newOrigin.y, newOrigin.z]}
            scale={[1, 1, 1]}
          />
          <boxHelper object={box} />
        </Fragment>
      ) : null}
    </Canvas>
  );
};

export default Mustard;

// const boundingBox = new THREE.Box3();
// boundingBox.setFromObject(cube);

// const center = new THREE.Vector3();
// boundingBox.getCenter(center);

// camera.position.y = center.y;
// camera.position.x = center.x;
// // camera.updateProjectionMatrix()

// const size = new THREE.Vector3();
// boundingBox.getSize(size);

// const fov = camera.fov * (Math.PI / 180);
// const maxDim = Math.max(size.x, size.y, size.z);
// const cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));

// camera.position.z = cameraZ;
// camera.updateProjectionMatrix();

// camera.lookAt(center);
