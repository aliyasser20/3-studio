import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useThree, useFrame, Dom } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

import Controls from "../Controls/Controls";
import Scene from "../Scene/Scene";
import Environment from "../Enivronment/Environment";

import createModel from "../../helpers/create_model";

const Model = props => {
  const [model, setModel] = useState(null);
  const [box, setBox] = useState();
  const [far, setFar] = useState(0);
  const [near, setNear] = useState(0);
  const [sizeBounding, setSizeBounding] = useState({ x: 0, y: 0, z: 0 });
  const [environment, setEnvironment] = useState(null);

  useEffect(() => {
    new GLTFLoader().load(props.url, gltf =>
      createModel(
        gltf,
        setBox,
        setFar,
        setModel,
        setSizeBounding,
        setNear,
        setEnvironment
      )
    );
  }, [props.url]);

  console.log(environment);

  // function Main() {
  //   const scene = useRef();
  //   const { camera } = useThree();
  //   useFrame(
  //     ({ gl }) =>
  //       void ((gl.autoClear = true), gl.render(scene.current, camera)),
  //     100
  //   );
  //   return <scene ref={scene}>{/* ... */}</scene>;
  // }

  const fallback = (
    <Dom>
      <div>🤤</div>
    </Dom>
  );

  const output = model ? (
    <Canvas
      // environment={environment}
      // shadowMap
      // gl={{ toneMapping: 0.1 }}
      // gl={{ environment }}
      camera={{
        position: [-sizeBounding.x, sizeBounding.y, sizeBounding.z],
        fov: 45,
        far,
        near
      }}
      onCreated={({ gl, scene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        scene.background = new THREE.Color("#373737");
        // scene.background = new THREE.Color("#cacaca");
        // scene.background = environment;
        // scene.environment = environment;
        // scene.background.convertSRGBToLinear()
      }}
    >
      {/* <pointLight intensity={1} position={[1000, 1000, 1000]} /> */}
      {/* <spotLight intensity={1} position={[1000, 1000, 1000]} />
      <spotLight intensity={1} position={[-1000, -1000, -1000]} /> */}
      <directionalLight intensity={0.8 * Math.PI} position={[0.5, 0, 0.86]} />
      {/* <directionalLight intensity={0.8 * Math.PI} position={[-0.5, 0, -0.86]} /> */}
      {/* <pointLight intensity={1} position={[-1000, -1000, -1000]} /> */}
      {/* <hemisphereLight /> */}
      <ambientLight intensity={0.3} color={0xffffff} />
      {/* <pointLight intensity={1} position={[-50, 50, -50]} /> */}
      {/* <pointLight intensity={1} position={[0, 100, -500]} /> */}
      <Controls />
      {/* <axesHelper scale={[200, 200, 200]} /> */}
      <primitive object={model} />
      <Suspense fallback={fallback}>
        {/* <Scene /> */}
        <Environment />
      </Suspense>
      {/* <primitive object={environment} /> */}
      {/* <boxHelper object={box} /> */}
    </Canvas>
  ) : null;

  return <div>{output}</div>;
  // return <Main />;
};

export default Model;
