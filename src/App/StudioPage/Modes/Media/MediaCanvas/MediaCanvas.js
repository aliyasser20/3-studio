import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Canvas } from "react-three-fiber";

import * as THREE from "three";
import UserModel from "../Models/UserModel";
import Environment from "../../Edit/Enivronment/Environment";
import Camera from "../../Edit/Camera/Camera";

import Controls from "../../Edit/Controls/Controls";

import "./MediaCanvas.scss";
import Loading from "../OldCanvas/Loading/Loading";

const MediaCanvas = (props) => {
  const { fov , far, near, box, sizeBounding } = props.modelSettings;
  console.log(props.modelSettings)
  return (
    <>
      <Canvas
        className="media-canvas"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.gammaFactor = 2.2;
        }}
      >
        <Camera
          position={[-sizeBounding.x, sizeBounding.y, sizeBounding.z]}
          fov={fov}
          far={far}
          near={near}
        />
        <ambientLight intensity={0.3} />
        <hemisphereLight intensity={1} />
        <directionalLight intensity={0.8 * Math.PI} position={[0.5, 0, 0.86]} />
        <Environment
          // bgEnvironment
          bgSolid
          bgColor="000000"
          mapEnvironment
        />
        <Controls autoRotate/>
        <UserModel model={props.modelSettings.model} />
        <Loading />
      </Canvas>
    </>
  );
};

MediaCanvas.propTypes = {
  modelSettings: PropTypes.object,
  currentProject: PropTypes.object,
};

const mapStateToProps = (state) => ({
  modelSettings: state.currentModel,
  currentProject: state.projects.currentProject,
});

export default connect(mapStateToProps, null)(MediaCanvas);
