import React, { useEffect, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame } from "react-three-fiber";

import Loading from "./Loading/Loading";

import "./MediaCanvas.scss";

const MediaCanvas = (props) => {
  useEffect(() => {
    const canvasElement = document.getElementsByTagName("canvas")[0];
    
  });

  return (
    <div className="media-canvas">
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        style={{ background: "#171717" }}
      >
        <Loading capturer={props.capturer} />
      </Canvas>
    </div>
  );
};

Canvas.propTypes = {};

export default MediaCanvas;