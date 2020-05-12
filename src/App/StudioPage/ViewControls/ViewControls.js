import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup, Button } from "@material-ui/core/";

const ViewControls = props => (
  <div className="view-controls">
    <ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="vertical outlined primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="vertical contained primary button group"
      variant="contained"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="vertical contained primary button group"
      variant="text"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
);

ViewControls.propTypes = {};

export default ViewControls;
