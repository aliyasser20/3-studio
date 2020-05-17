import React from "react";
import PropTypes from "prop-types";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PartCanvas from "../../Modes/Edit/PartCanvas/PartCanvas";

import "./MaterialDetails.scss";

const MaterialDetails = props => (
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
        <Typography>Material Details</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details-section">
        {/* <Typography>
          Material stuff to be included here. Material stuff to be included
          here. Material stuff to be included here. Material stuff to be
          included here. Material stuff to be included here. Material stuff to
          be included here. Material stuff to be included here. Material stuff
          to be included here. Material stuff to be included here. Material
          stuff to be included here. Material stuff to be included here.
        </Typography> */}
        <PartCanvas />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

MaterialDetails.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MaterialDetails;
