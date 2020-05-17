import React, { useState } from "react";
import PropTypes from "prop-types";
import { Paper, ThemeProvider } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import themeCreator from "../../../helpers/themeCreator";

import "./ObjectsBar.scss";

const ObjectsBar = (props) => {
  const theme = themeCreator("#ffffff", "#212121");
  // const [object, setObject] = useState({ name: "", params: {} });

  const handleWsphereGrab = () => {
    // console.log("box",props.boxRadius.geometry.boundingSphere.radius)
    const roundRadius = Math.ceil(
      props.boxRadius.geometry.boundingSphere.radius
    );
    let vol;

    if (roundRadius > 50) {
      vol = (4 * Math.PI * roundRadius * 2) / 100;
    } else {
      vol = 4 * Math.PI * roundRadius * 2;
    }

    props.onSetMediaSphere({
      args: [roundRadius, vol, vol],
      color: "00CCAA",
      scale: [1, 1, 1],
      position: { x: 0, y: 0, z: 0 },
      rotateX: false,
      rotateY: false,
      rotateZ: false,
    });
  };
  const handleLsphereGrab = () => {
    const roundRadius = Math.ceil(
      props.boxRadius.geometry.boundingSphere.radius
    );
    let vol;

    if (roundRadius > 50) {
      vol = (4 * Math.PI * roundRadius * 2) / 100;
    } else {
      vol = 4 * Math.PI * roundRadius * 2;
    }

    props.onSetMediaLSphere({
      args: [roundRadius, vol, vol],
      color: "00CCAA",
      scale: [1, 1, 1],
      position: { x: -1, y: 0, z: 0 },
      rotateX: false,
      rotateY: false,
      rotateZ: false,
    });
  };

  const handleKeyLightGrab = () => {
    const radius = Math.ceil(props.boxRadius.geometry.boundingSphere.radius);
    let vol;
    if (radius > 50) {
      vol = (4 * Math.PI * radius) / 100;
    } else {
      vol = 4 * Math.PI * radius;
    }
    const initPosition = radius > 100 ? radius : radius * 0.3;
    props.onSetMediaKeyLight({
      args: [radius / 4, vol, vol],
      color: "fff",
      brightness: 0.1,
      scale: [0.3, 0.3, 0.3],
      initPosition,
      power: 0.1,
      rotate: { x: false, y: false, z: false },
      orbit: { x: false, y: false, z: false },
    });
  };

  const handleDLightGrab = () => {
    const radius = Math.ceil(props.boxRadius.geometry.boundingSphere.radius);
    let vol;
    if (radius > 50) {
      vol = (4 * Math.PI * radius) / 100;
    } else {
      vol = 4 * Math.PI * radius;
    }
    const initPosition = radius > 100 ? radius : radius * 0.3;
    props.onSetMediaDLight({
      args: [radius / 4, vol, vol],
      color: "fff",
      brightness: 0.1,
      scale: [0.3, 0.3, 0.3],
      initPosition,
      power: 0.5,
      rotate: { x: false, y: false, z: false },
      orbit: { x: false, y: false, z: false },
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="objects-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          <div
            id="w-sphere"
            draggable
            onDragEnd={(e) => {
              e.dataTransfer.dropEffect = "link";
              handleWsphereGrab();
            }}
            className="object sphere"
          >
            W-SPHERE
          </div>
          <div
            id="l-sphere"
            draggable
            onDragEnd={(e) => {
              e.dataTransfer.dropEffect = "link";
              handleLsphereGrab();
            }}
            className="object lSphere"
          >
            L-SPHERE
          </div>
          <div
            id="Key-Light"
            draggable
            onDragEnd={(e) => {
              e.dataTransfer.dropEffect = "link";
              handleKeyLightGrab();
            }}
            className="object klight"
          >
            K-LIGHT
          </div>
          <div
            id="diamond-Light"
            draggable
            onDragEnd={(e) => {
              e.dataTransfer.dropEffect = "link";
              handleDLightGrab();
            }}
            className="object dlight"
          >
            K-LIGHT
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

ObjectsBar.propTypes = {
  boxRadius: PropTypes.object,
  onSetMediaSphere: PropTypes.func,
  onSetMediaKeyLight: PropTypes.func,
  onSetMediaLSphere: PropTypes.func,
  onSetMediaDLight: PropTypes.func,
};

const mapStateToProps = (state) => ({
  boxRadius: state.currentModel.box,
});
const mapDispatchToProps = (dispatch) => ({
  onSetMediaSphere: (sphere) => dispatch(actions.setMediaSphere(sphere)),
  onSetMediaLSphere: (lSphere) => dispatch(actions.setMediaLSphere(lSphere)),
  onSetMediaKeyLight: (kLight) => dispatch(actions.setMediaKeyLight(kLight)),
  onSetMediaDLight: (dLight) => dispatch(actions.setMediaKeyLight(dLight)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ObjectsBar);
