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
            onClick={() => props.onToggleLock()}
            classes={{ root: props.lock && "selected" }}
          >
            <span className="lock-icon">
              <LockIcon />
            </span>
            Lock
          </Button>
          <Button
            onClick={() => props.onToggleBoundingBox()}
            classes={{ root: props.boundingBox && "selected" }}
          >
            <span className="bounding-box-icon">
              <BoundingBoxIcon />
            </span>
            Bound
          </Button>
          <Button
            onClick={() => props.onToggleAxis()}
            classes={{ root: props.axis && "selected" }}
          >
            <span className="axis-icon">
              <AxisIcon />
            </span>
            Axis
          </Button>
          <Button
            onClick={() => props.onToggleAutorotate()}
            classes={{ root: props.autorotate && "selected" }}
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
  lock: PropTypes.bool.isRequired,
  boundingBox: PropTypes.bool.isRequired,
  axis: PropTypes.bool.isRequired,
  autorotate: PropTypes.bool.isRequired,
  onToggleAutorotate: PropTypes.func.isRequired,
  onToggleLock: PropTypes.func.isRequired,
  onToggleAxis: PropTypes.func.isRequired,
  onToggleBoundingBox: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lock: state.extraControls.lock,
  boundingBox: state.extraControls.boundingBox,
  axis: state.extraControls.axis,
  autorotate: state.extraControls.autorotate
});

const mapDispatchToProps = dispatch => ({
  onToggleLock: () => dispatch(actions.toggleLock()),
  onToggleBoundingBox: () => dispatch(actions.toggleBoundingBox()),
  onToggleAxis: () => dispatch(actions.toggleAxis()),
  onToggleAutorotate: () => dispatch(actions.toggleAutorotate())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExtraControls);
