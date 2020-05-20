import React from "react";

import ScreenshotsBar from "../ScreenshotsBar/ScreenshotsBar";
import EditCanvas from "../../Edit/EditCanvas/EditCanvas";

import "./ViewContainer.scss";

const ViewContainer = () => (
  <div className="view-container">
    <div className="canvas-picture-area">
      <EditCanvas />
    </div>
    <ScreenshotsBar />
  </div>
);

export default ViewContainer;
