// import React from "react";
import { useThree } from "react-three-fiber";

// eslint-disable-next-line
export let sceneExport;

const Bridge = () => {
  const { scene } = useThree();

  sceneExport = scene;
  return null;
};

export default Bridge;
