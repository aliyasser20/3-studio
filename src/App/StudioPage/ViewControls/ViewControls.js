import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ButtonGroup, Button, ThemeProvider } from "@material-ui/core/";

import PerspectiveIcon from "../../UI/SVGIcons/PerspectiveIcon";
import TopIcon from "../../UI/SVGIcons/TopIcon";
import FrontIcon from "../../UI/SVGIcons/FrontIcon";
import BackIcon from "../../UI/SVGIcons/BackIcon";
import RightIcon from "../../UI/SVGIcons/RightIcon";
import LeftIcon from "../../UI/SVGIcons/LeftIcon";
import BottomIcon from "../../UI/SVGIcons/BottomIcon";

import themeCreator from "../../../helpers/themeCreator";
import * as actions from "../../../store/actions/index";

import "./ViewControls.scss";

const ViewControls = props => {
  const theme = themeCreator("#ffffff", "#212121");

  return (
    <ThemeProvider theme={theme}>
      <div className="view-controls">
        <ButtonGroup
          classes={{ root: "button-group-custom" }}
          orientation="vertical"
          color="primary"
          aria-label="view controls"
        >
          <Button
            onClick={() => props.onSetCameraMode("PERSPECTIVE")}
            classes={{ root: props.cameraMode === "PERSPECTIVE" && "selected" }}
          >
            <PerspectiveIcon />
            Perspec
          </Button>
          <Button
            onClick={() => props.onSetCameraMode("TOP")}
            classes={{ root: props.cameraMode === "TOP" && "selected" }}
          >
            <TopIcon />
            Top
          </Button>
          <Button
            onClick={() => props.onSetCameraMode("FRONT")}
            classes={{ root: props.cameraMode === "FRONT" && "selected" }}
          >
            <FrontIcon />
            Front
          </Button>
          <Button
            onClick={() => props.onSetCameraMode("RIGHT")}
            classes={{ root: props.cameraMode === "RIGHT" && "selected" }}
          >
            <RightIcon />
            Right
          </Button>
          <Button
            onClick={() => props.onSetCameraMode("BOTTOM")}
            classes={{ root: props.cameraMode === "BOTTOM" && "selected" }}
          >
            <BottomIcon />
            Bottom
          </Button>
          <Button
            onClick={() => props.onSetCameraMode("BACK")}
            classes={{ root: props.cameraMode === "BACK" && "selected" }}
          >
            <BackIcon />
            Back
          </Button>
          <Button
            onClick={() => props.onSetCameraMode("LEFT")}
            classes={{ root: props.cameraMode === "LEFT" && "selected" }}
          >
            <LeftIcon />
            Left
          </Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
};

ViewControls.propTypes = {
  cameraMode: PropTypes.string.isRequired,
  onSetCameraMode: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cameraMode: state.cameraControls.cameraMode
});

const mapDispatchToProps = dispatch => ({
  onSetCameraMode: mode => dispatch(actions.setCameraMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewControls);
