import React from "react";
import PropTypes from "prop-types";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import ColorPickerPopover from "../ColorPickerPopover/ColorPickerPopover";

import "./MediaBackGroundControl.scss";

const MediaBackGroundControl = props => (
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
        <Typography>Global Control</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details-section">
        <FormControlLabel
          className="custom-label"
          control={
            <Checkbox
              className="custom-checkbox"
              checked={props.mediaAutorotate}
              onChange={props.onToggleMediaAutoRotate}
              name="autoRotate"
            />
          }
          label="Auto rotation"
        />
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
              checked={props.defaultLight}
              onChange={props.onToggleDefaultLight}
              name="Lights"
            />
          }
          label="Default Light"
        />

        <h5 className="section-title">User model</h5>
        <div className="background-color-section">
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.mediaControls.mediaUserModelDrag}
                onChange={props.onToggleUserModelDarg}
                name="userModelDrag"
              />
            }
            label="User model Drag"
          />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

MediaBackGroundControl.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  solidBackground: PropTypes.bool.isRequired,
  envBackground: PropTypes.bool.isRequired,
  onToggleMediaEnvB: PropTypes.func.isRequired,
  onToggleMediaSolidB: PropTypes.func.isRequired,
  onSetMediaSolidBackground: PropTypes.func.isRequired,
  solidBgColor: PropTypes.func.isRequired,
  mediaMapEnv: PropTypes.bool.isRequired,
  onToggleMapEnv: PropTypes.func.isRequired,
  defaultLight: PropTypes.bool.isRequired,
  onToggleDefaultLight: PropTypes.func.isRequired,
  onToggleMediaAutoRotate: PropTypes.func.isRequired,
  mediaAutorotate: PropTypes.bool.isRequired,
  mediaControls: PropTypes.object.isRequired,
  onToggleUserModelDarg: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  envBackground: state.mediaControls.mediaEnvBackground,
  solidBackground: state.mediaControls.mediaSolidBackground,
  noBackground: state.mediaControls.mediaNoBackground,
  solidBgColor: state.mediaState.mediaSolidBackground,
  mediaMapEnv: state.mediaControls.mediaMapEnvironment,
  defaultLight: state.mediaControls.defaultLight,
  mediaAutorotate: state.mediaControls.mediaAutorotate,
  mediaControls: state.mediaControls,
});
const mapDispatchToProps = dispatch => ({
  onToggleMediaEnvB: () => dispatch(actions.toggleMediaEnvB()),
  onToggleMediaSolidB: () => dispatch(actions.toggleMediaSolidB()),
  onToggleMediaNoB: () => dispatch(actions.toggleMediaNoB()),
  onToggleMapEnv: () => dispatch(actions.toggleMapEnv()),
  onSetMediaSolidBackground: hexColor =>
    dispatch(actions.setMediaSolidBackground(hexColor)),
  onToggleDefaultLight: () => dispatch(actions.toggleDefaultLight()),
  onToggleMediaAutoRotate: () => dispatch(actions.toggleMediaAutoRotate()),
  onToggleUserModelDarg: () => dispatch(actions.toggleUserModelDrag())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBackGroundControl);
