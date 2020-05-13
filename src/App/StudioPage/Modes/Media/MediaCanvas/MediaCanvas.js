import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Canvas } from "react-three-fiber";

import * as actions from "../../../../../store/actions/index";
import * as THREE from "three";
import UserModel from "../Models/UserModel";
import Environment from "../../Edit/Enivronment/Environment";
import Camera from "../../Edit/Camera/Camera";

import Controls from "../../Edit/Controls/Controls";

import "./MediaCanvas.scss";
import Loading from "../OldCanvas/Loading/Loading";
import LoaderModel from "../../../LoaderModal/LoaderModel";

const MediaCanvas = (props) => {
  const [loading, setLoading] = useState(true);
  const { mediaFov, mediaFar, mediaNear, mediaBox, mediaSizeBounding } = props;
  console.log(props.modelSettings);

  useEffect(() => {
    !props.mediaFov && props.onSetMediaFov(props.modelSettings.fov);
    !props.mediaFar && props.onSetMediaFar(props.modelSettings.far);
    !props.mediaNear && props.onSetMediaNear(props.modelSettings.near);
    !props.mediaSizeBounding &&
      props.onSetMediaSizeBounding(props.modelSettings.sizeBounding);
    !props.mediaModel && props.onSetMediaModel(props.modelSettings.model);
  }, []);

  setTimeout(() => setLoading(false), 1500);

  const camere = props.mediaSizeBounding ? (
    <Camera
      position={[
        -mediaSizeBounding.x,
        mediaSizeBounding.y,
        mediaSizeBounding.z,
      ]}
      fov={mediaFov}
      far={mediaFar}
      near={mediaNear}
    />
  ) : null;

  return !loading || !props.modelSettings.model || !props.mediaModel ? (
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
        {camere}
        <ambientLight intensity={0.3} />
        <hemisphereLight intensity={1} />
        <directionalLight intensity={0.8 * Math.PI} position={[0.5, 0, 0.86]} />
        <Environment
          // bgEnvironment
          bgSolid
          bgColor="000000"
          mapEnvironment
        />
        <Controls autoRotate />
        <UserModel model={props.mediaModel} />
        <Loading />
      </Canvas>
    </>
  ) : (
    <LoaderModel />
  );
};

MediaCanvas.propTypes = {
  modelSettings: PropTypes.object,
  currentProject: PropTypes.object,
  onSetMediaModel: PropTypes.func.isRequired,
  onSetMediaFov: PropTypes.func.isRequired,
  onSetMediaFar: PropTypes.func.isRequired,
  onSetMediaNear: PropTypes.func.isRequired,
  mediaModel: PropTypes.object,
  mediaFov: PropTypes.number,
  mediaFar: PropTypes.number,
  mediaNear: PropTypes.number,
  mediaSizeBounding: PropTypes.object,
};

const mapStateToProps = (state) => ({
  modelSettings: state.currentModel,
  currentProject: state.projects.currentProject,
  mediaModel: state.mediaState.mediaModel,
  mediaFov: state.mediaState.mediaFov,
  mediaFar: state.mediaState.mediaFar,
  mediaNear: state.mediaState.mediaNear,
  mediaSizeBounding: state.mediaState.mediaSizeBounding,
});

const mapDispatchToProps = (dispatch) => ({
  onSetMediaModel: (model) => dispatch(actions.setMediaModel(model)),
  onSetMediaFov: (fov) => dispatch(actions.setMediaFov(fov)),
  onSetMediaFar: (far) => dispatch(actions.setMediaFar(far)),
  onSetMediaNear: (near) => dispatch(actions.setMediaNear(near)),
  onSetMediaSizeBounding: (sizeBounding) =>
    dispatch(actions.setMediaSizeBounding(sizeBounding)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaCanvas);
