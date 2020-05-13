import React from "react";
import PropTypes from "prop-types";

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./MaterialDetails.scss";

const MaterialDetails = props => {
  let classes;
  return (
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

MaterialDetails.propTypes = {
  expanded: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MaterialDetails;
