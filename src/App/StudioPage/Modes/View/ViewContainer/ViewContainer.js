import React from "react";
import PropTypes from "prop-types";

import ScreenshotsBar from "../ScreenshotsBar/ScreenshotsBar";
import EditCanvas from "../../Edit/EditCanvas/EditCanvas";

import "./ViewContainer.scss";

const ViewContainer = props => {
  let classes;
  return (
    <div className="view-container">
      <div className="canvas-picture-area">
        <EditCanvas />
      </div>
      <ScreenshotsBar />
    </div>
  );
};

ViewContainer.propTypes = {};

export default ViewContainer;
