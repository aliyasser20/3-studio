import React from "react";
import PropTypes from "prop-types";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./ObjectControl.scss";
import ObjectListItem from "./Objects/ObjectListItem";

const ObjectControl = (props) => (
  <div className="material-details">
    <ExpansionPanel
      className="custom-panel"
      expanded={props.expanded.includes("MATERIAL-DETAILS")}
      onChange={() => props.handleChange("MATERIAL-DETAILS")}
    >
      <ExpansionPanelSummary
        className="summary-section"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="material-details-summary"
        id="material-details-summary"
      >
        <Typography>Objects</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details-section">
        <ObjectListItem />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

ObjectControl.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ObjectControl;
