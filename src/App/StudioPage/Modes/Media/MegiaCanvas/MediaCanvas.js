import React from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame } from "react-three-fiber";
import Loading from "./Loading/Loading";

import "./MediaCanvas.scss";

const MediaCanvas = (props) => {
  // useFrame(() => {});
  return (
    <div className="media-canvas">
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        style={{ background: "#171717" }}
      >
        <Loading />
      </Canvas>
    </div>
  );
};

Canvas.propTypes = {};

export default MediaCanvas;
