import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Controls from "../Controls/Controls";

import "./PartCanvas.scss";

const PartCanvas = props => {
  // ! State ------------------------------------------------- //
  const [directionalPosition] = useState([0.5, 0, 0.86]);
  // ! ------------------------------------------------- //

  // ? Canvas output
  const canvasElement = props.partModel ? (
    <Canvas
      camera={{
        position: [
          -props.partSizeBounding.x,
          props.partSizeBounding.y,
          props.partSizeBounding.z
        ],
        fov: props.partFov,
        far: props.partFar,
        near: props.partNear
      }}
      onCreated={({ gl, scene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        gl.gammaFactor = 2.2;

        scene.background = new THREE.Color("#ffffff");
      }}
    >
      <primitive object={props.partModel} dispose={null} />
      <directionalLight
        intensity={0.8 * Math.PI}
        position={directionalPosition}
      />
      <ambientLight intensity={0.3} />
      <Controls />
    </Canvas>
  ) : null;

  return <div className="part-canvas">{canvasElement}</div>;
};

PartCanvas.propTypes = {
  partModel: PropTypes.object,
  partFar: PropTypes.number.isRequired,
  partFov: PropTypes.number.isRequired,
  partNear: PropTypes.number.isRequired,
  partSizeBounding: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  partModel: state.partModel.currentPartModel,
  partNear: state.partModel.partNear,
  partSizeBounding: state.partModel.partSizeBounding,
  partFar: state.partModel.partFar,
  partFov: state.partModel.partFov
});

export default connect(mapStateToProps, null)(PartCanvas);
