import React from "react";
import PropTypes from "prop-types";

import ScreenshotsBar from "../ScreenshotsBar/ScreenshotsBar";

import "./ViewContainer.scss";

const ViewContainer = props => {
  let classes;
  return (
    <div className="view-container">
      <div className="canvas-picture-area"></div>
      <ScreenshotsBar />
    </div>
  );
};

ViewContainer.propTypes = {};

export default ViewContainer;
