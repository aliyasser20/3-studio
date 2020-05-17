import React from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import PartCanvas from "../Modes/Edit/PartCanvas/PartCanvas";

import "./PartCanvasArea.scss";

const PartCanvasArea = props => {
  let classes;
  return (
    <div className="part-canvas-area">
      <Paper classes={{ root: "custom-paper" }} elevation={3}>
        <div className="canvas-container">
          <PartCanvas />
        </div>
      </Paper>
    </div>
  );
};

PartCanvasArea.propTypes = {};

export default PartCanvasArea;
