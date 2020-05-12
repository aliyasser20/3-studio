import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ButtonGroup, Button, ThemeProvider } from "@material-ui/core/";

import BoundingBoxIcon from "../../UI/SVGIcons/BoundingBoxIcon";
import LockIcon from "../../UI/SVGIcons/LockIcon";
import AutorotateIcon from "../../UI/SVGIcons/AutorotateIcon";
import AxisIcon from "../../UI/SVGIcons/AxisIcon";

import themeCreator from "../../../helpers/themeCreator";
import * as actions from "../../../store/actions/index";

import "./ExtraControls.scss";

const ExtraControls = props => {
  const theme = themeCreator("#ffffff", "#212121");

  return (
    <ThemeProvider theme={theme}>
      <div className="extra-controls">
        <ButtonGroup
          classes={{ root: "button-group-custom" }}
          orientation="vertical"
          color="primary"
          aria-label="view controls"
        >
          <Button
          // onClick={() => props.onSetCameraMode("PERSPECTIVE")}
          // classes={{ root: props.cameraMode === "PERSPECTIVE" && "selected" }}
          >
            <span className="lock-icon">
              <LockIcon />
            </span>
            Lock
          </Button>
          <Button
          // onClick={() => props.onSetCameraMode("TOP")}
          // classes={{ root: props.cameraMode === "TOP" && "selected" }}
          >
            <span className="bounding-box-icon">
              <BoundingBoxIcon />
            </span>
            Bound
          </Button>
          <Button
          // onClick={() => props.onSetCameraMode("FRONT")}
          // classes={{ root: props.cameraMode === "FRONT" && "selected" }}
          >
            <span className="axis-icon">
              <AxisIcon />
            </span>
            Axis
          </Button>
          <Button
          // onClick={() => props.onSetCameraMode("FRONT")}
          // classes={{ root: props.cameraMode === "FRONT" && "selected" }}
          >
            <span className="autorotate-icon">
              <AutorotateIcon />
            </span>
            Rotate
          </Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
};

ExtraControls.propTypes = {
  cameraMode: PropTypes.string.isRequired,
  onSetCameraMode: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cameraMode: state.cameraControls.cameraMode
});

const mapDispatchToProps = dispatch => ({
  onSetCameraMode: mode => dispatch(actions.setCameraMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExtraControls);
