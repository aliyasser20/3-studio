import React, { useState, Suspense, useEffect } from "react";
import { Canvas, Dom } from "react-three-fiber";
import * as THREE from "three";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Controls from "../Controls/Controls";
import Environment from "../Enivronment/Environment";
import Bridge from "../Bridge/Bridge";
import Camera from "../Camera/Camera";

import orthoViewPositions from "../../../../../helpers/orthoViewsPositions";

import * as actions from "../../../../../store/actions/index";

import "./EditCanvas.scss";

const EditCanvas = props => {
  // ! State ------------------------------------------------- //
  // ? Environment & background states //
  const [mapEnvironment, setMapEnvironment] = useState(true);

  // ? Lights states //
  // Ambient
  const [ambient, setAmbient] = useState(true);
  const [ambientColor, setAmbientColor] = useState("ffffff");
  const [ambientIntensity, setAmbientIntensity] = useState(0.3);

  // Hemisphere
  const [hemisphere, setHemisphere] = useState(true);
  const [hemisphereColor, setHemisphereColor] = useState("ffffff");
  const [hemisphereIntensity, setHemisphereIntensity] = useState(1);

  // Directional
  const [directional, setDirectional] = useState(true);
  const [directionalColor, setDirectionalColor] = useState("ffffff");
  const [directionalIntensity, setDirectionalIntensity] = useState(
    0.8 * Math.PI
  );
  const [directionalPosition, setDirectionalPosition] = useState([
    0.5,
    0,
    0.86
  ]);

  // ? Cameras
  const [perspective, setPerspective] = useState(true);
  const [ortho, setOrtho] = useState(null);

  // ! ------------------------------------------------- //

  // ? Fallback case
  const fallbackElement = (
    <Dom>
      <div></div>
    </Dom>
  );

  useEffect(() => {
    // ? Update camera to ortho with selected side handler
    const generateOrthoCamera = side => {
      setPerspective(false);
      setOrtho(orthoViewPositions(props.sizeBounding)[side]);
      props.onSetFov(30);
    };

    // ? Update camera to perspective handler
    const generatePerspectiveCamera = () => {
      setPerspective(true);
      setOrtho(null);
      props.onSetFov(45);
    };

    if (props.cameraMode === "PERSPECTIVE") {
      generatePerspectiveCamera();
    } else {
      generateOrthoCamera(props.cameraMode.toLowerCase());
    }
  }, [props, props.cameraMode]);

  // ? Canvas output
  const canvasElement = props.model ? (
    <Canvas
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        gl.gammaFactor = 2.2;
      }}
    >
      <Camera
        position={
          perspective
            ? [
                -props.sizeBounding.x,
                props.sizeBounding.y,
                props.sizeBounding.z
              ]
            : ortho
        }
        fov={props.fov}
        far={props.far}
        near={props.near}
      />
      <primitive object={props.model} dispose={null} />
      {directional && (
        <directionalLight
          intensity={directionalIntensity}
          color={`#${directionalColor}`}
          position={directionalPosition}
        />
      )}
      {hemisphere && (
        <hemisphereLight
          intensity={hemisphereIntensity}
          color={`#${hemisphereColor}`}
        />
      )}
      {ambient && (
        <ambientLight intensity={ambientIntensity} color={`#${ambientColor}`} />
      )}
      <Suspense fallback={fallbackElement}>
        <Environment
          bgEnvironment={props.bgEnvironment}
          bgSolid={props.bgSolid}
          bgColor={props.bgColor}
          mapEnvironment={mapEnvironment}
        />
        <Bridge />
      </Suspense>
      {!props.lock && <Controls autoRotate={props.autorotate} />}
      {props.axis && (
        <axesHelper
          scale={[
            0.75 * props.sizeBounding.x,
            0.75 * props.sizeBounding.y,
            0.75 * props.sizeBounding.z
          ]}
        />
      )}
      {props.boundingBox && <boxHelper object={props.box} />}
    </Canvas>
  ) : null;

  return <div className="edit-canvas">{canvasElement}</div>;
};

EditCanvas.propTypes = {
  bgEnvironment: PropTypes.bool.isRequired,
  bgSolid: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
  onToggleBackground: PropTypes.func.isRequired,
  onBgSolidColor: PropTypes.func.isRequired,
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
  boundingBox: PropTypes.bool.isRequired
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
  autorotate: state.extraControls.autorotate
});

const mapDispatchToProps = dispatch => ({
  onToggleBackground: () => dispatch(actions.toggleBackground()),
  onBgSolidColor: color => dispatch(actions.setBackgroundColor(color)),
  onSetFov: fov => dispatch(actions.setFov(fov))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCanvas);
