import React, { useEffect, useRef, forwardRef, Suspense } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BackWall from "./BackWall/BackWall";
import GroundPlane from "./GroundPlane/GroundPlane";
import Loading from "./Loading/Loading";
import "./MediaCanvas.scss";
import KeyLight from "./Light/KeyLight";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();
  const controls = useRef();
  useFrame(state => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const MediaCanvas = props => {
  // console.log(exportModel);
  console.log(props.model);

  return (
    <div className="media-canvas">
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        {/* <Suspense>
          <primitive object={exportModel} />
        </Suspense> */}
        <CameraControls />
        <KeyLight brightness={10} color="white" />
        {/* <Loading capturer={props.capturer} /> */}
        <BackWall />
        <GroundPlane />
      </Canvas>
    </div>
  );
};
Canvas.propTypes = {};

const mapStateToProps = state => ({
  model: state.currentModel.model
});

export default connect(mapStateToProps, null)(MediaCanvas);
