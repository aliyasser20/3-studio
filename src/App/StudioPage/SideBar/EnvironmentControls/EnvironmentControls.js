import React from "react";
import PropTypes from "prop-types";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./EnvironmentControls.scss";

const EnvironmentControls = props => {
  let classes;
  return (
    <div className="environment-controls">
      <ExpansionPanel
        className="custom-panel"
        expanded={props.expanded === "panel1"}
        onChange={props.handleChange("panel1")}
      >
        <ExpansionPanelSummary
          className="summary-section"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Environment Controls</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details-section">
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

EnvironmentControls.propTypes = {};

export default EnvironmentControls;
