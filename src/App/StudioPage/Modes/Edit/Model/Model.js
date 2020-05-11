import React, { useState, useEffect, Suspense, Fragment } from "react";
import { Canvas, Dom } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Controls from "../Controls/Controls";
import Environment from "../Enivronment/Environment";
import Bridge from "../Bridge/Bridge";
import Camera from "../Camera/Camera";

import createModel from "../../../../../helpers/createModel";
import orthoViewPositions from "../../../../../helpers/orthoViewsPositions";

import * as actions from "../../../../../store/actions/index";

const Model = props => {
  // ! State ------------------------------------------------- //
  // ? Model, bounding box, zoom, center states //
  // const [model, setModel] = useState(null);
  const [box, setBox] = useState();
  const [fov, setFov] = useState(45);
  const [far, setFar] = useState(0);
  const [near, setNear] = useState(0);
  const [sizeBounding, setSizeBounding] = useState({ x: 0, y: 0, z: 0 });

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

  // ? Additional helpers and controls states //
  const [showAxis, setShowAxis] = useState(true);
  const [showBoundingBox, setShowBoundingBox] = useState(true);
  const [allowOrbitControls, setAllowOrbitControls] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);

  // ? Cameras
  const [perspective, setPerspective] = useState(true);
  const [ortho, setOrtho] = useState(null);

  // ! ------------------------------------------------- //
  // ? Load model with materials
  useEffect(() => {
    new GLTFLoader().load(props.url, gltf =>
      createModel(
        gltf,
        setBox,
        setFar,
        props.onSetModel,
        setSizeBounding,
        setNear
      )
    );
  }, [props.onSetModel, props.url]);

  // ? Fallback case
  const fallbackElement = (
    <Dom>
      <div></div>
    </Dom>
  );

  // ? Update camera to ortho with selected side handler
  const generateOrthoCamera = side => {
    setPerspective(false);
    setOrtho(orthoViewPositions(sizeBounding)[side]);
    setFov(30);
  };

  // ? Update camera to perspective handler
  const generatePerspectiveCamera = () => {
    setPerspective(true);
    setOrtho(null);
    setFov(45);
  };

  // ? Canvas output
  const canvasElement = props.model ? (
    <Fragment>
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
              ? [-sizeBounding.x, sizeBounding.y, sizeBounding.z]
              : ortho
          }
          fov={fov}
          far={far}
          near={near}
        />
        <primitive object={props.model} />
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
          <ambientLight
            intensity={ambientIntensity}
            color={`#${ambientColor}`}
          />
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
        {allowOrbitControls && <Controls autoRotate={autoRotate} />}
        {showAxis && (
          <axesHelper
            scale={[
              0.75 * sizeBounding.x,
              0.75 * sizeBounding.y,
              0.75 * sizeBounding.z
            ]}
          />
        )}
        {showBoundingBox && <boxHelper object={box} />}
      </Canvas>
      {/* Testing Buttons */}
      <button type="button" onClick={() => generateOrthoCamera("front")}>
        Front
      </button>
      <button type="button" onClick={() => generateOrthoCamera("back")}>
        Back
      </button>
      <button type="button" onClick={() => generateOrthoCamera("top")}>
        Top
      </button>
      <button type="button" onClick={() => generateOrthoCamera("bottom")}>
        Bottom
      </button>
      <button type="button" onClick={() => generateOrthoCamera("right")}>
        Right
      </button>
      <button type="button" onClick={() => generateOrthoCamera("left")}>
        Left
      </button>
      <button type="button" onClick={generatePerspectiveCamera}>
        Perspective
      </button>
      <button
        type="button"
        onClick={() => {
          props.onToggleBackground();
        }}
      >
        Toggle Background
      </button>
      <button
        type="button"
        onClick={() => {
          props.onBgSolidColor("0000ff");
        }}
      >
        Set Background Blue
      </button>
      <button
        type="button"
        onClick={() => {
          setShowAxis(!showAxis);
        }}
      >
        Show Axis
      </button>
      <button
        type="button"
        onClick={() => {
          setShowBoundingBox(!showBoundingBox);
        }}
      >
        Toggle Bounding Box
      </button>
    </Fragment>
  ) : null;

  return <div>{canvasElement}</div>;
};

Model.propTypes = {
  bgEnvironment: PropTypes.bool.isRequired,
  bgSolid: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
  onToggleBackground: PropTypes.func.isRequired,
  onBgSolidColor: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  bgEnvironment: state.environmentControls.bgEnvironment,
  bgSolid: state.environmentControls.bgSolid,
  bgColor: state.environmentControls.bgColor,
  model: state.currentModel.model
});

const mapDispatchToProps = dispatch => ({
  onToggleBackground: () => dispatch(actions.toggleBackground()),
  onBgSolidColor: color => dispatch(actions.setBackgroundColor(color)),
  onSetModel: model => dispatch(actions.setModel(model))
});

export default connect(mapStateToProps, mapDispatchToProps)(Model);
