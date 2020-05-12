import React, {
  useEffect,
  useRef,
  forwardRef,
  Suspense,
  Fragment,
} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import BackWall from "./BackWall/BackWall";
import GroundPlane from "./GroundPlane/GroundPlane";
import Loading from "./Loading/Loading";
import "./MediaCanvas.scss";
import KeyLight from "./Light/KeyLight";
import Camera from "../../Edit/Camera/Camera";
import Model from "../../Edit/Model/Model";
import Environment from "../../Edit/Enivronment/Environment";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Test = (props) => {
  const reeef = useRef();
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    reeef.current.rotation.y += 0.2;
  });
  console.log("model", props.model);
  return (
    <primitive
      object={props.model}
      ref={reeef}
      dispose={null}
      castshadow
      rotation={[0, 0, 0]}
    />
  );
};

const MediaCanvas = (props) => {
  // console.log(exportModel);
  // console.log(props.model);

  const result = props.model ? (
    <Fragment>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.gammaFactor = 2.2;

          // scene.background = new THREE.Color("#ff0000");
        }}
      >
        <Camera
          position={[-0.459, 0.512, 0.824]}
          fov={45}
          far={132}
          near={0.013}
          rotation
        />
        <ambientLight intensity={0.3} />
        <hemisphereLight intensity={1} />
        )}
        <directionalLight intensity={0.8 * Math.PI} position={[0.5, 0, 0.86]} />
        <CameraControls />
        {/* <axesHelper scale={[1, 1, 1]} /> */}
        <Environment
          // bgEnvironment
          bgSolid
          bgColor="000000"
          mapEnvironment
        />
        {/* <KeyLight brightness={10} color="white" /> */}
        {/* <Loading capturer={props.capturer} /> */}
        {/* <BackWall /> */}
        {/* <GroundPlane /> */}
        <Test model={props.model} />
      </Canvas>
    </Fragment>
  ) : null;

  // return (
  //   <div className="media-canvas">
  //     <Model url="./models/duck.glb" />
  //   </div>
  // );
  return <div className="media-canvas">{result}</div>;
};

Canvas.propTypes = {};

const mapStateToProps = (state) => ({
  model: state.currentModel.model,
});

export default connect(mapStateToProps, null)(MediaCanvas);
