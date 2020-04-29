import React, { useState, useEffect, Fragment } from "react";
import { Canvas, useThree, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

import Model from "../../Model/Model";
import Controls from "../../Controls/Controls";

const TestCenter = props => {
  const [model, setModel] = useState();
  const [center, setCenter] = useState({ x: 0, y: 0, z: 0 });
  const [z, setZ] = useState(0);
  const [box, setBox] = useState();
  const [far, setFar] = useState(0);
  const [near, setNear] = useState(0);
  // const [newOrigin, setNewOrigin] = useState({ x: 0, y: 0, z: 0 });

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

    console.log("size", size);

    // const fov = 75 * (Math.PI / 180);
    // const maxDim = Math.max(size.x, size.y, size.z);
    // let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));

    // const offset = 1;

    // cameraZ *= offset;

    // const minZ = boundingBox.min.z;
    // const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;

    // ! -------------------

    // const camera = new THREE.PerspectiveCamera();
    // console.log(camera);

    const maxSize = Math.max(size.x, size.y, size.z);

    const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * 75) / 360));

    const fitWidthDistance = fitHeightDistance / 1;
    const distance = 0.5 * Math.max(fitHeightDistance, fitWidthDistance);

    // const direction = controls.target
    //   .clone()
    //   .sub(camera.position)
    //   .normalize()
    //   .multiplyScalar(distance);

    // controls.maxDistance = distance * 10;
    // controls.target.copy( center );

    // camera.near = distance / 100;
    // camera.far = distance * 100;
    // camera.updateProjectionMatrix();

    // camera.position.copy( controls.target ).sub(direction);

    // controls.update();
    // ! -------------------

    console.log(boundingBox);
    // console.log(centerNew);

    theModel.position.x -= centerNew.x;
    theModel.position.y -= centerNew.y;
    theModel.position.z -= centerNew.z;

    const boxNew = new THREE.BoxHelper(theModel, 0xffff00);
    console.log("boxNew", boxNew);

    setCenter(centerNew);
    // setZ(cameraZ);
    setBox(boxNew);
    // setFar(cameraToFarEdge * 3);
    setFar(distance * 100);
    setNear(distance / 100);

    // setModel(part);
    setModel(theModel);
  };

  useEffect(() => {
    new GLTFLoader().load(props.url, createModel);
  }, [props.url]);

  // console.log("center", center);
  // console.log("newOrigin", newOrigin);

  return (
    <Canvas camera={{ position: [center.x, center.y, z], far, near }}>
      {/* <ambientLight intensity={100} /> */}
      <pointLight intensity={1} position={[0, 300, 500]} />
      <pointLight intensity={5} position={[0, 100, -500]} />
      <pointLight intensity={5} position={[0, 100, -500]} />
      <Controls />
      <axesHelper scale={[200, 200, 200]} />
      {model ? (
        <Fragment>
          <primitive object={model} />
          <boxHelper object={box} />
        </Fragment>
      ) : null}
    </Canvas>
  );
};

export default TestCenter;

// <perspectiveCamera
//         position={[10, center.y, z]}
//         // lookAt={center}
//         // onUpdate={self => self.updateProjectionMatrix()}
//       />
