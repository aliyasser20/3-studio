import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SingleLightControl from "./SingleLightControl/SingleLightControl";

import * as actions from "../../../../store/actions/index";

import "./LightControls.scss";

const LightControls = props => {
  let classes;

  return (
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
          <Typography>Light</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details-section">
          <SingleLightControl
            name="ambientLight"
            label="Ambient"
            checked={props.ambientLight}
            changeChecked={props.onToggleAmbientLight}
            onChange={props.onSetAmbientLightIntensity}
            value={props.ambientIntensity}
            color={props.ambientColor}
            setColor={props.onSetAmbientLightColor}
            visible={props.ambientLight}
            step={0.2}
            max={4}
            min={0.2}
          />
          <SingleLightControl
            name="directionalLight"
            label="Directional"
            checked={props.directionalLight}
            changeChecked={props.onToggleDirectionalLight}
            onChange={props.onSetDirectionalLightIntensity}
            value={props.directionalIntensity}
            color={props.directionalColor}
            setColor={props.onSetDirectionalLightColor}
            visible={props.directionalLight}
            step={0.5}
            max={10}
            min={0.5}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

// LightControls.propTypes = {
//   expanded: PropTypes.array.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   mapEnvironment: PropTypes.bool.isRequired,
//   onToggleMapEnvironment: PropTypes.func.isRequired,
//   bgSolid: PropTypes.bool.isRequired,
//   bgEnvironment: PropTypes.bool.isRequired,
//   onSetBackgroundEnvironment: PropTypes.func.isRequired,
//   onSetBackgroundSolid: PropTypes.func.isRequired,
//   ambientLight: PropTypes.bool.isRequired,
//   directionalLight: PropTypes.bool.isRequired,
//   hemisphereLight: PropTypes.bool.isRequired,
//   ambientIntensity: PropTypes.number.isRequired,
//   hemisphereIntensity: PropTypes.number.isRequired,
//   directionalIntensity: PropTypes.number.isRequired,
//   directionalColor: PropTypes.string.isRequired,
//   hemisphereColor: PropTypes.string.isRequired,
//   ambientColor: PropTypes.string.isRequired,
//   onToggleAmbientLight: PropTypes.func.isRequired,
//   onToggleDirectionalLight: PropTypes.func.isRequired,
//   onToggleHemisphereLight: PropTypes.func.isRequired,
//   onSetAmbientLightIntensity: PropTypes.func.isRequired,
//   onSetDirectionalLightIntensity: PropTypes.func.isRequired,
//   onSetHemisphereLightIntensity: PropTypes.func.isRequired,
//   onSetHemisphereLightColor: PropTypes.func.isRequired,
//   onSetAmbientLightColor: PropTypes.func.isRequired,
//   onSetDirectionalLightColor: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  ambientLight: state.lightControls.ambientLight,
  directionalLight: state.lightControls.directionalLight,
  hemisphereLight: state.lightControls.hemisphereLight,
  ambientIntensity: state.lightControls.ambientLightIntensity,
  directionalIntensity: state.lightControls.directionalLightIntensity,
  hemisphereIntensity: state.lightControls.hemisphereLightIntensity,
  ambientColor: state.lightControls.ambientLightColor,
  directionalColor: state.lightControls.directionalLightColor,
  hemisphereColor: state.lightControls.hemisphereLightColor
});

const mapDispatchToProps = dispatch => ({
  onSetBackgroundSolid: () => dispatch(actions.setBackgroundSolid()),
  onSetBackgroundEnvironment: () =>
    dispatch(actions.setBackgroundEnvironment()),
  onToggleMapEnvironment: () => dispatch(actions.toggleMapEnvironment()),
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
    dispatch(actions.setDirectionalLightColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(LightControls);
