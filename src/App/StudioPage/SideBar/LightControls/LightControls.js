import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

import SingleLightControl from "./SingleLightControl/SingleLightControl";

import * as actions from "../../../../store/actions/index";

import "./LightControls.scss";

const LightControls = props => (
  <div className="light-controls">
    <ExpansionPanel
      className="custom-panel"
      expanded={props.expanded.includes("LIGHT-CONTROLS")}
      onChange={() => props.handleChange("LIGHT-CONTROLS")}
    >
      <ExpansionPanelSummary
        className="summary-section"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="light-controls-summary"
        id="light-controls-summary"
      >
        <Typography>Lights</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details-section">
        <div className="light-controls-area">
          <div className="reset-area">
            <span className="gradient-button">
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  // Trigger unsaved changes
                  props.onSetConfigurationUnsaved();
                  props.onResetLights();
                }}
                endIcon={<SettingsBackupRestoreIcon />}
              >
                Reset
              </Button>
            </span>
          </div>
          <SingleLightControl
            name="ambientLight"
            label="Ambient"
            checked={props.ambientLight}
            changeChecked={() => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onToggleAmbientLight();
            }}
            onChange={intensity => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onSetAmbientLightIntensity(intensity);
            }}
            value={props.ambientIntensity}
            color={props.ambientLightColor}
            setColor={color => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onSetAmbientLightColor(color);
            }}
            visible={props.ambientLight}
            step={0.2}
            max={4}
            min={0.2}
          />
          <SingleLightControl
            name="hemisphereLight"
            label="Hemisphere"
            checked={props.hemisphereLight}
            changeChecked={() => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onToggleHemisphereLight();
            }}
            onChange={intensity => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onSetHemisphereLightIntensity(intensity);
            }}
            value={props.hemisphereIntensity}
            color={props.hemisphereLightColor}
            setColor={color => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onSetHemisphereLightColor(color);
            }}
            visible={props.hemisphereLight}
            step={0.5}
            max={10}
            min={0.5}
          />
          <SingleLightControl
            name="directionalLight"
            label="Directional"
            checked={props.directionalLight}
            changeChecked={() => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onToggleDirectionalLight();
            }}
            onChange={intensity => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onSetDirectionalLightIntensity(intensity);
            }}
            value={props.directionalIntensity}
            color={props.directionalLightColor}
            setColor={color => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onSetDirectionalLightColor(color);
            }}
            visible={props.directionalLight}
            step={0.5}
            max={10}
            min={0.5}
          />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

LightControls.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  ambientLight: PropTypes.bool.isRequired,
  directionalLight: PropTypes.bool.isRequired,
  hemisphereLight: PropTypes.bool.isRequired,
  ambientIntensity: PropTypes.number.isRequired,
  hemisphereIntensity: PropTypes.number.isRequired,
  directionalIntensity: PropTypes.number.isRequired,
  directionalLightColor: PropTypes.string.isRequired,
  hemisphereLightColor: PropTypes.string.isRequired,
  ambientLightColor: PropTypes.string.isRequired,
  onToggleAmbientLight: PropTypes.func.isRequired,
  onToggleDirectionalLight: PropTypes.func.isRequired,
  onToggleHemisphereLight: PropTypes.func.isRequired,
  onSetAmbientLightIntensity: PropTypes.func.isRequired,
  onSetDirectionalLightIntensity: PropTypes.func.isRequired,
  onSetHemisphereLightIntensity: PropTypes.func.isRequired,
  onSetHemisphereLightColor: PropTypes.func.isRequired,
  onSetAmbientLightColor: PropTypes.func.isRequired,
  onSetDirectionalLightColor: PropTypes.func.isRequired,
  onResetLights: PropTypes.func.isRequired,
  onSetConfigurationUnsaved: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ambientLight: state.lightControls.ambientLight,
  directionalLight: state.lightControls.directionalLight,
  hemisphereLight: state.lightControls.hemisphereLight,
  ambientIntensity: state.lightControls.ambientLightIntensity,
  directionalIntensity: state.lightControls.directionalLightIntensity,
  hemisphereIntensity: state.lightControls.hemisphereLightIntensity,
  ambientLightColor: state.lightControls.ambientLightColor,
  directionalLightColor: state.lightControls.directionalLightColor,
  hemisphereLightColor: state.lightControls.hemisphereLightColor
});

const mapDispatchToProps = dispatch => ({
  onToggleAmbientLight: () => dispatch(actions.toggleAmbientLight()),
  onToggleDirectionalLight: () => dispatch(actions.toggleDirectionalLight()),
  onToggleHemisphereLight: () => dispatch(actions.toggleHemisphereLight()),
  onSetAmbientLightIntensity: intensity =>
    dispatch(actions.setAmbientLightIntensity(intensity)),
  onSetHemisphereLightIntensity: intensity =>
    dispatch(actions.setHemisphereLightIntensity(intensity)),
  onSetDirectionalLightIntensity: intensity =>
    dispatch(actions.setDirectionalLightIntensity(intensity)),
  onSetAmbientLightColor: color =>
    dispatch(actions.setAmbientLightColor(color)),
  onSetHemisphereLightColor: color =>
    dispatch(actions.setHemisphereLightColor(color)),
  onSetDirectionalLightColor: color =>
    dispatch(actions.setDirectionalLightColor(color)),
  onResetLights: () => dispatch(actions.resetLights()),
  onSetConfigurationUnsaved: () => dispatch(actions.setConfigurationUnsaved())
});

export default connect(mapStateToProps, mapDispatchToProps)(LightControls);
