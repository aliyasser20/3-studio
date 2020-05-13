import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import UserModel from "../Models/UserModel";

import Environment from "../../Edit/Enivronment/Environment";
import Controls from "../../Edit/Controls/Controls";

import "./MediaCanvas.scss";

const MediaCanvas = (props) => {
  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.gammaFactor = 2.2;
        }}
      >
        {/* control <Camera
          position={[-0.459, 0.512, 0.824]}
          fov={45}
          far={132}
          near={0.013}
          rotation
        /> */}
        {/* <ambientLight intensity={0.3} />
        <hemisphereLight intensity={1} />
        <directionalLight intensity={0.8 * Math.PI} position={[0.5, 0, 0.86]} />
        <Environment
          // bgEnvironment
          bgSolid
          bgColor="000000"
          mapEnvironment
        /> */}
        <Controls />
      </Canvas>
      <UserModel model={props.modelSetings.model} />

    </>
  );
};

MediaCanvas.propTypes = {
  modelSetings: PropTypes.object,
  currentProject: PropTypes.object,
};

const mapStateToProps = (state) => ({
  modelSetings: state.currentModel,
  currentProject: state.projects.currentProject,
});

export default connect(mapStateToProps, null)(MediaCanvas);
