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
        <ExpansionPanelDetails className="details-section"></ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

LightControls.propTypes = {
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
  mapEnvironment: state.LightControls.mapEnvironment,
  bgSolid: state.LightControls.bgSolid,
  bgEnvironment: state.LightControls.bgEnvironment
});

const mapDispatchToProps = dispatch => ({
  onSetBackgroundSolid: () => dispatch(actions.setBackgroundSolid()),
  onSetBackgroundEnvironment: () =>
    dispatch(actions.setBackgroundEnvironment()),
  onToggleMapEnvironment: () => dispatch(actions.toggleMapEnvironment())
});

export default connect(mapStateToProps, mapDispatchToProps)(LightControls);
