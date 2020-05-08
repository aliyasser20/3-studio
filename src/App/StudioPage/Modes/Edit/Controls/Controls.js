import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from "react-three-fiber";
import PropTypes from "prop-types";

extend({ OrbitControls });

const Controls = props => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate={props.autoRotate}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

Controls.propTypes = {
  autoRotate: PropTypes.bool
};

export default Controls;
