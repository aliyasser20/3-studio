import React, { useState } from "react";
import PropTypes from "prop-types";
import * as actions from "../../../../store/actions/index";
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

import "./MediaBackGroundControl.scss";

// import "../EnvironmentControls/EnvironmentControls"
const MediaBackGroundControl = (props) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#000");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.onSetMediaSolidBackground(color);
    setOpen(false);
  };

  const handleColorPick = (hex) => {
    setColor(hex.hex.slice(1));
  };
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
          <div className="custom-color-picker">
            <Button
              classes={{ label: "color-picker-btn" }}
              onClick={handleOpen}
              style={{ color: "#FFF" }}
              color="primary"
            >
              Background Color
            </Button>
            <Dialog
              classes={{ root: "color-picker" }}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Color Picker</DialogTitle>
              <DialogContent>
                <SketchPicker
                  color={color}
                  onChangeComplete={(hex) => handleColorPick(hex)}
                />
              </DialogContent>
              <Button
                classes={{ label: "picker" }}
                onClick={handleClose}
                color="error"
                autoFocus
              >
                Confirm
              </Button>
            </Dialog>
          </div>
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
};

const mapStateToProps = (state) => ({
  envBackground: state.mediaControls.mediaEnvBackground,
  solidBackground: state.mediaControls.mediaSolidBackground,
  noBackground: state.mediaControls.mediaNoBackground,
});
const mapDispatchToProps = (dispatch) => ({
  onToggleMediaEnvB: () => dispatch(actions.toggleMediaEnvB()),
  onToggleMediaSolidB: () => dispatch(actions.toggleMediaSolidB()),
  onToggleMediaNoB: () => dispatch(actions.toggleMediaNoB()),
  onSetMediaSolidBackground: (hexColor) =>
    dispatch(actions.setMediaSolidBackground(hexColor)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBackGroundControl);
