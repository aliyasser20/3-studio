import React from "react";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const Stepper = props => (
  <div className="stepper">
    <IconButton aria-label="next" onClick={props.previous}>
      <ArrowBackIosRoundedIcon />
    </IconButton>
    <IconButton aria-label="next" onClick={props.next}>
      <ArrowForwardIosRoundedIcon />
    </IconButton>
  </div>
);

Stepper.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired
};

export default Stepper;
