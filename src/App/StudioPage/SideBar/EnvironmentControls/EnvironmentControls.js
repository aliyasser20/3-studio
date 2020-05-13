import React from "react";
import PropTypes from "prop-types";

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
                checked={false}
                // onChange={}
                name="environmentMap"
              />
            }
            label="Environment Map"
          />
          <div className="environment-buttons">
            <button type="button"></button>
          </div>
          <h5 className="section-title">Background</h5>
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked
                // onChange={}
                name="solidBackground"
              />
            }
            label="Solid"
          />
          <FormControlLabel
            className="custom-label"
            control={
              <Checkbox
                className="custom-checkbox"
                checked={false}
                // onChange={}
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
  handleChange: PropTypes.func.isRequired
};

export default EnvironmentControls;
