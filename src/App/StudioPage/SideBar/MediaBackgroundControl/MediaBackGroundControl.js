import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import ColorPicker from "material-ui-color-picker";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { SketchPicker } from "react-color";
import * as actions from "../../../../store/actions/index";
import ColorPickerPopover from "../ColorPickerPopover/ColorPickerPopover";

import "./MediaBackGroundControl.scss";

// import "../EnvironmentControls/EnvironmentControls"
const MediaBackGroundControl = (props) => {
  const [open, setOpen] = useState(false);
  // const [color, setColor] = useState("#000");

  const handleOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   props.onSetMediaSolidBackground(color);
  //   setOpen(false);
  // };

  // const handleColorPick = (hex) => {
  //   setColor(hex.hex.slice(1));
  // };
  return (
    <div className="environment-controls">
      <ExpansionPanel
        className="custom-panel"
        expanded={props.expanded.includes("ENVIRONMENT-CONTROLS")}
        onChange={() => props.handleChange("ENVIRONMENT-CONTROLS")}
      >
        <ExpansionPanelSummary
          className="summary-section"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="environment-controls-summary"
          id="environment-controls-summary"
        >
          <Typography>Background Control</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details-section">
          <h5 className="section-title">Background</h5>
          <div className="background-color-section">
            <FormControlLabel
              className="custom-label"
              control={
                <Checkbox
                  className="custom-checkbox"
                  checked={props.solidBackground}
                  onChange={props.onToggleMediaSolidB}
                  name="solidBackground"
                />
              }
              label="Solid Background"
            />
            <ColorPickerPopover
              color={props.solidBgColor}
              visible={props.solidBackground}
              setColor={props.onSetMediaSolidBackground}
            />
          </div>
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.envBackground}
                onChange={props.onToggleMediaEnvB}
                name="environmentBackground"
              />
            }
            label="Environment Background"
          />
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.mediaMapEnv}
                onChange={props.onToggleMapEnv}
                name="mapEnvironment"
              />
            }
            label="Map Environment"
          />
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={false}
                // onChange={props.onToggleLights}
                name="Lights"
              />
            }
            label="Default Light"
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

MediaBackGroundControl.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  solidBackground: PropTypes.bool.isRequired,
  envBackground: PropTypes.bool.isRequired,
  // noBackground: PropTypes.bool.isRequired,
  onToggleMediaEnvB: PropTypes.func.isRequired,
  onToggleMediaSolidB: PropTypes.func.isRequired,
  // onToggleMediaNoB: PropTypes.func.isRequired,
  onSetMediaSolidBackground: PropTypes.func.isRequired,
  solidBgColor: PropTypes.func.isRequired,
  mediaMapEnv: PropTypes.bool.isRequired,
  onToggleMapEnv: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  envBackground: state.mediaControls.mediaEnvBackground,
  solidBackground: state.mediaControls.mediaSolidBackground,
  noBackground: state.mediaControls.mediaNoBackground,
  solidBgColor: state.mediaState.mediaSolidBackground,
  mediaMapEnv: state.mediaControls.mediaMapEnvironment,
});
const mapDispatchToProps = (dispatch) => ({
  onToggleMediaEnvB: () => dispatch(actions.toggleMediaEnvB()),
  onToggleMediaSolidB: () => dispatch(actions.toggleMediaSolidB()),
  onToggleMediaNoB: () => dispatch(actions.toggleMediaNoB()),
  onToggleMapEnv: () => dispatch(actions.toggleMapEnv()),
  onSetMediaSolidBackground: (hexColor) =>
    dispatch(actions.setMediaSolidBackground(hexColor)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBackGroundControl);
