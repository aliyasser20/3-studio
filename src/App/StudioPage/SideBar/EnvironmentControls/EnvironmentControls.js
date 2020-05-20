import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import EnvironmentOptions from "./EnvironmentOptions/EnvironmentOptions";
import ColorPickPopover from "../ColorPickerPopover/ColorPickerPopover";

import * as actions from "../../../../store/actions/index";

import "./EnvironmentControls.scss";

const EnvironmentControls = props => (
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
        <Typography>Environment</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details-section">
        <FormControlLabel
          className="custom-label"
          control={
            <Checkbox
              className="custom-checkbox"
              checked={props.mapEnvironment}
              onChange={() => {
                // Trigger unsaved changes
                props.onSetConfigurationUnsaved();
                //
                props.onToggleMapEnvironment();
              }}
              name="environmentMap"
            />
          }
          label="Environment Map"
        />
        <EnvironmentOptions />
        <h5 className="section-title">Background</h5>
        <div className="background-color-section">
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.bgSolid}
                onChange={() => {
                  // Trigger unsaved changes
                  props.onSetConfigurationUnsaved();
                  //
                  props.onSetBackgroundSolid();
                }}
                name="solidBackground"
              />
            }
            label="Solid"
          />
          <ColorPickPopover
            color={props.bgColor}
            visible={props.bgSolid}
            setColor={color => {
              // Trigger unsaved changes
              props.onSetConfigurationUnsaved();
              //
              props.onSetBackgroundColor(color);
            }}
          />
        </div>
        <FormControlLabel
          className="custom-label"
          control={
            <Checkbox
              className="custom-checkbox"
              checked={props.bgEnvironment}
              onChange={() => {
                // Trigger unsaved changes
                props.onSetConfigurationUnsaved();
                //
                props.onSetBackgroundEnvironment();
              }}
              name="environmentBackground"
            />
          }
          label="Environment"
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

EnvironmentControls.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  mapEnvironment: PropTypes.bool.isRequired,
  onToggleMapEnvironment: PropTypes.func.isRequired,
  bgSolid: PropTypes.bool.isRequired,
  bgEnvironment: PropTypes.bool.isRequired,
  onSetBackgroundEnvironment: PropTypes.func.isRequired,
  onSetBackgroundSolid: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  onSetBackgroundColor: PropTypes.func.isRequired,
  onSetConfigurationUnsaved: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mapEnvironment: state.environmentControls.mapEnvironment,
  bgSolid: state.environmentControls.bgSolid,
  bgEnvironment: state.environmentControls.bgEnvironment,
  bgColor: state.environmentControls.bgColor
});

const mapDispatchToProps = dispatch => ({
  onSetBackgroundSolid: () => dispatch(actions.setBackgroundSolid()),
  onSetBackgroundEnvironment: () =>
    dispatch(actions.setBackgroundEnvironment()),
  onToggleMapEnvironment: () => dispatch(actions.toggleMapEnvironment()),
  onSetBackgroundColor: color => dispatch(actions.setBackgroundColor(color)),
  onSetConfigurationUnsaved: () => dispatch(actions.setConfigurationUnsaved())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnvironmentControls);
