import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const Stepper = props => (
  <Fragment>
    <IconButton
      size="small"
      classes={{ root: "previous-button" }}
      aria-label="previous"
      onClick={props.previous}
      // disabled={props.previousDisabled}
    >
      <ArrowBackIosRoundedIcon />
    </IconButton>
    <IconButton
      size="small"
      classes={{ root: "next-button" }}
      aria-label="next"
      // disabled={props.nextDisabled}
      onClick={props.next}
    >
      <ArrowForwardIosRoundedIcon />
    </IconButton>
  </Fragment>
);

Stepper.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired
  // previousDisabled: PropTypes.bool.isRequired,
  // nextDisabled: PropTypes.bool.isRequired
};

export default Stepper;
