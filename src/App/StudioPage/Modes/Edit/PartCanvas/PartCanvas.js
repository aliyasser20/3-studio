import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Camera from "../Camera/Camera";

import materialLibrary from "../../../../../helpers/materialLibrary";
import * as actions from "../../../../../store/actions/index";

import "./PartCanvas.scss";

const PartCanvas = props => {
  // ! State ------------------------------------------------- //
  const [directionalPosition, setDirectionalPosition] = useState([
    0.5,
    0,
    0.86
  ]);

  // ? Cameras
  // const [perspective, setPerspective] = useState(true);
  // const [ortho, setOrtho] = useState(null);

  // ! ------------------------------------------------- //

  // useEffect(() => {
  // ? Update camera to ortho with selected side handler
  // const generateOrthoCamera = side => {
  //   setPerspective(false);
  //   setOrtho(orthoViewPositions(props.sizeBounding)[side]);
  //   props.onSetFov(30);
  // };

  // ? Update camera to perspective handler
  //   const generatePerspectiveCamera = () => {
  //     setPerspective(true);
  //     setOrtho(null);
  //     props.onSetFov(45);
  //   };

  //   if (props.cameraMode === "PERSPECTIVE") {
  //     generatePerspectiveCamera();
  //   } else {
  //     generateOrthoCamera(props.cameraMode.toLowerCase());
  //   }
  // }, [props, props.cameraMode]);

  const handleDrop = e => {
    // console.log(e);
    if (props.selectedMaterial) {
      // console.log(e.object);

      props.onUpdateMaterial(e.object.name, {
        name: props.selectedMaterial
      });

      e.object.material = materialLibrary()[props.selectedMaterial];
      props.onSetSelectedMaterial("");

      // Trigger unsaved changes
      props.onSetConfigurationUnsaved();
    }
  };

  // ? Canvas output
  const canvasElement = props.model ? (
    <Canvas
      onCreated={({ gl, scene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        gl.gammaFactor = 2.2;

        scene.background = new THREE.Color("#ffffff");
      }}
    >
      <Camera
        position={[
          -props.sizeBounding.x,
          props.sizeBounding.y,
          props.sizeBounding.z
        ]}
        fov={props.fov}
        far={props.far}
        near={props.near}
      />
      <primitive
        object={props.model}
        dispose={null}
        onPointerMove={e => handleDrop(e)}
      />
      <directionalLight
        intensity={0.8 * Math.PI}
        position={directionalPosition}
      />
      <hemisphereLight intensity={1} />
      <ambientLight intensity={0.3} />
    </Canvas>
  ) : null;

  return <div className="part-canvas">{canvasElement}</div>;
};

PartCanvas.propTypes = {
  bgEnvironment: PropTypes.bool.isRequired,
  bgSolid: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
  fov: PropTypes.number.isRequired,
  far: PropTypes.number.isRequired,
  near: PropTypes.number.isRequired,
  sizeBounding: PropTypes.object.isRequired,
  onSetFov: PropTypes.func.isRequired,
  box: PropTypes.object,
  model: PropTypes.object,
  cameraMode: PropTypes.string.isRequired,
  lock: PropTypes.bool.isRequired,
  autorotate: PropTypes.bool.isRequired,
  axis: PropTypes.bool.isRequired,
  boundingBox: PropTypes.bool.isRequired,
  currentEnvironmentOption: PropTypes.object.isRequired,
  onSetSelectedMaterial: PropTypes.func.isRequired,
  mapEnvironment: PropTypes.bool.isRequired,
  ambientLight: PropTypes.bool.isRequired,
  directionalLight: PropTypes.bool.isRequired,
  hemisphereLight: PropTypes.bool.isRequired,
  ambientIntensity: PropTypes.number.isRequired,
  hemisphereIntensity: PropTypes.number.isRequired,
  directionalIntensity: PropTypes.number.isRequired,
  directionalLightColor: PropTypes.string.isRequired,
  hemisphereLightColor: PropTypes.string.isRequired,
  ambientLightColor: PropTypes.string.isRequired,
  onUpdateMaterial: PropTypes.func.isRequired,
  materials: PropTypes.object.isRequired,
  onSetConfigurationUnsaved: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bgEnvironment: state.environmentControls.bgEnvironment,
  bgSolid: state.environmentControls.bgSolid,
  bgColor: state.environmentControls.bgColor,
  model: state.currentModel.model,
  fov: state.currentModel.fov,
  far: state.currentModel.far,
  near: state.currentModel.near,
  sizeBounding: state.currentModel.sizeBounding,
  box: state.currentModel.box,
  cameraMode: state.cameraControls.cameraMode,
  lock: state.extraControls.lock,
  boundingBox: state.extraControls.boundingBox,
  axis: state.extraControls.axis,
  autorotate: state.extraControls.autorotate,
  currentEnvironmentOption: state.environmentControls.currentEnvironmentOption,
  selectedMaterial: state.appearanceControls.selectedMaterial,
  mapEnvironment: state.environmentControls.mapEnvironment,
  ambientLight: state.lightControls.ambientLight,
  directionalLight: state.lightControls.directionalLight,
  hemisphereLight: state.lightControls.hemisphereLight,
  ambientIntensity: state.lightControls.ambientLightIntensity,
  directionalIntensity: state.lightControls.directionalLightIntensity,
  hemisphereIntensity: state.lightControls.hemisphereLightIntensity,
  ambientLightColor: state.lightControls.ambientLightColor,
  directionalLightColor: state.lightControls.directionalLightColor,
  hemisphereLightColor: state.lightControls.hemisphereLightColor,
  materials: state.appearanceControls.materials
});

const mapDispatchToProps = dispatch => ({
  onSetFov: fov => dispatch(actions.setFov(fov)),
  onSetSelectedMaterial: material =>
    dispatch(actions.setSelectedMaterial(material)),
  onUpdateMaterial: (partName, material) =>
    dispatch(actions.updateMaterials(partName, material)),
  onSetConfigurationUnsaved: () => dispatch(actions.setConfigurationUnsaved())
});

export default connect(mapStateToProps, mapDispatchToProps)(PartCanvas);
