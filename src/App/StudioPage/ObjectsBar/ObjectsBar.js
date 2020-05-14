import React, { useState } from "react";
import PropTypes from "prop-types";
import * as actions from "../../../store/actions/index";
import { Paper, ThemeProvider } from "@material-ui/core";

import themeCreator from "../../../helpers/themeCreator";

import "./ObjectsBar.scss";
import { connect } from "react-redux";

const ObjectsBar = (props) => {
  const theme = themeCreator("#ffffff", "#212121");
  // const [object, setObject] = useState({ name: "", params: {} });

  const handleWsphereGrab = () => {
    // console.log("box",props.boxRadius.geometry.boundingSphere.radius)
    const roundRadius = Math.ceil(props.boxRadius);
    let vol;

    if (roundRadius > 10 && roundRadius < 100) {
      vol = (4 * Math.PI * roundRadius * 2) / 100;
    } else if (roundRadius > 100) {
      vol = (4 * Math.PI * roundRadius * 2) / 1000;
    }

    props.onSetMediaSphere({
      args: [roundRadius, vol, vol],
      color: "hsl(170,100%,40%)",
      scale: [1, 1, 1],
      position: { x: 0, y: 0, z: 0 },
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
            className="material sphere"
          >
            W-SPHERE
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

ObjectsBar.propTypes = {
  boxRadius: PropTypes.object,
  onSetMediaSphere: PropTypes.func,
};

const mapStateToProps = (state) => ({
  boxRadius: state.currentModel.box.geometry.boundingSphere.radius,
});
const mapDispatchToProps = (dispatch) => ({
  onSetMediaSphere: (sphere) => dispatch(actions.setMediaSphere(sphere)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ObjectsBar);
