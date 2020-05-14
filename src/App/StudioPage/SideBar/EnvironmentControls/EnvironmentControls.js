import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import EnvironmentOptions from "./EnvironmentOptions/EnvironmentOptions";
import ColorPickPopover from "./ColorPickerPopover/ColorPickerPopover";

import * as actions from "../../../../store/actions/index";

import "./EnvironmentControls.scss";

const EnvironmentControls = props => {
  let classes;
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
          <Typography>Environment</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details-section">
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.mapEnvironment}
                onChange={() => props.onToggleMapEnvironment()}
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
                  onChange={() => props.onSetBackgroundSolid()}
                  name="solidBackground"
                />
              }
              label="Solid"
            />
            <ColorPickPopover />
          </div>
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={props.bgEnvironment}
                onChange={() => props.onSetBackgroundEnvironment()}
                name="environmentBackground"
              />
            }
            label="Environment"
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

EnvironmentControls.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  mapEnvironment: PropTypes.bool.isRequired,
  onToggleMapEnvironment: PropTypes.func.isRequired,
  bgSolid: PropTypes.bool.isRequired,
  bgEnvironment: PropTypes.bool.isRequired,
  onSetBackgroundEnvironment: PropTypes.func.isRequired,
  onSetBackgroundSolid: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mapEnvironment: state.environmentControls.mapEnvironment,
  bgSolid: state.environmentControls.bgSolid,
  bgEnvironment: state.environmentControls.bgEnvironment
});

const mapDispatchToProps = dispatch => ({
  onSetBackgroundSolid: () => dispatch(actions.setBackgroundSolid()),
  onSetBackgroundEnvironment: () =>
    dispatch(actions.setBackgroundEnvironment()),
  onToggleMapEnvironment: () => dispatch(actions.toggleMapEnvironment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnvironmentControls);
