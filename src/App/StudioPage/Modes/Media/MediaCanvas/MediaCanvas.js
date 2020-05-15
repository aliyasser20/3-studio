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
import WSphere from "../Models/WSphere";
import TestingDrag from "../Models/TestingDrag";
import DControls from "../DragControls/DControls";
import GroundPlane from "../OldCanvas/GroundPlane/GroundPlane";
import KLight from "../Models/KLight";

const MediaCanvas = (props) => {
  const [loading, setLoading] = useState(true);
  const { mediaFov, mediaFar, mediaNear, mediaBox, mediaSizeBounding } = props;
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

  const lights = props.defaultLight ? (
    <>
      <ambientLight intensity={0.1} />
      <hemisphereLight intensity={0.1} />
      <directionalLight intensity={0.1 * Math.PI} position={[0.5, 0, 0.86]} />
    </>
  ) : null;

  return !loading || !props.modelSettings.model || !props.mediaModel ? (
    <>
      <Canvas
        className="media-canvas"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.shadowMap.enabled = true;
          gl.gammaFactor = 2.2;
        }}
      >
        {camere}
        {lights}
        <Environment
          bgEnvironment={props.mediaControls.mediaEnvBackground}
          bgSolid={props.mediaControls.mediaSolidBackground}
          bgColor={props.solidBgColor}
          mapEnvironment={props.mediaMapEnv}
          environmentPath={props.currentEnvOption.hdrPath}
        />
        {!props.mediaControls.mediaLock && <Controls />}
        <DControls dragObjects={props.mediaState.dragObjects} />
        <UserModel
          model={props.mediaModel}
          toggleMediaLock={props.onToggleMediaLock}
          setDrag={props.onSetMediaDragObjects}
          dragObjects={props.mediaState.dragObjects}
        />
        {props.mediaControls.sphere && (
          <WSphere
            sphere={props.mediaControls.sphere}
            toggleMediaLock={props.onToggleMediaLock}
            setDrag={props.onSetMediaDragObjects}
            dragObjects={props.mediaState.dragObjects}
          />
        )}
        {props.mediaControls.keyLight && (
          <KLight
            kLight={props.mediaControls.keyLight}
            toggleMediaLock={props.onToggleMediaLock}
            setDrag={props.onSetMediaDragObjects}
            dragObjects={props.mediaState.dragObjects}
          />
        )}
        {/* <GroundPlane /> */}
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
  mediaControls: PropTypes.object.isRequired,
  currentEnvOption: PropTypes.object.isRequired,
  solidBgColor: PropTypes.string.isRequired,
  mediaMapEnv: PropTypes.bool.isRequired,
  defaultLight: PropTypes.bool.isRequired,
  onToggleDefaultLight: PropTypes.func.isRequired,
  mediaState: PropTypes.object.isRequired,
  onSetMediaDragObjects: PropTypes.func.isRequired,
  onToggleMediaLock: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  modelSettings: state.currentModel,
  currentProject: state.projects.currentProject,
  mediaModel: state.mediaState.mediaModel,
  mediaFov: state.mediaState.mediaFov,
  mediaFar: state.mediaState.mediaFar,
  mediaNear: state.mediaState.mediaNear,
  mediaSizeBounding: state.mediaState.mediaSizeBounding,
  mediaControls: state.mediaControls,
  currentEnvOption: state.environmentControls.currentEnvironmentOption,
  solidBgColor: state.mediaState.mediaSolidBackground,
  mediaMapEnv: state.mediaControls.mediaMapEnvironment,
  mediaState: state.mediaState,
  defaultLight: state.mediaControls.defaultLight,
});

const mapDispatchToProps = (dispatch) => ({
  onSetMediaModel: (model) => dispatch(actions.setMediaModel(model)),
  onSetMediaFov: (fov) => dispatch(actions.setMediaFov(fov)),
  onSetMediaFar: (far) => dispatch(actions.setMediaFar(far)),
  onSetMediaNear: (near) => dispatch(actions.setMediaNear(near)),
  onSetMediaSizeBounding: (sizeBounding) =>
    dispatch(actions.setMediaSizeBounding(sizeBounding)),
  onToggleMediaLock: () => dispatch(actions.toggleMediaLock()),
  onSetMediaDragObjects: (dragObject) =>
    dispatch(actions.setMediaDragObjects(dragObject)),
  onToggleDefaultLight: () => dispatch(actions.toggleDefaultLight()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaCanvas);
