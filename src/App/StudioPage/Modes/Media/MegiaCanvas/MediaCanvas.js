import React, { useEffect, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import BackWall from "./BackWall/BackWall";
import GroundPlane from "./GroundPlane/GroundPlane";
import Loading from "./Loading/Loading";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./MediaCanvas.scss";
import KeyLight from "./Light/KeyLight";

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

const MediaCanvas = (props) => {
  return (
    <div className="media-canvas">
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <CameraControls />
        {/* <KeyLight brightness={10} color="white" /> */}
        <Loading capturer={props.capturer}/>
        <BackWall />
        <GroundPlane />
      </Canvas>
    </div>
  );
};

Canvas.propTypes = {};

export default MediaCanvas;
