import * as THREE from "three";
import { useEffect } from "react";
import { useThree, useLoader } from "react-three-fiber";
import PropTypes from "prop-types";

import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const Environment = props => {
  const { gl, scene } = useThree();

  // ? Load HDR file
  const texture = useLoader(
    RGBELoader,
    props.environmentPath ||
      "https://res.cloudinary.com/aajfinal/raw/upload/v1589352709/environments/studio-1_ugueaj.hdr",
    loader => {
      loader.setDataType(THREE.UnsignedByteType);
    }
  );

  // ? Set HDR to canvas
  useEffect(() => {
    const gen = new THREE.PMREMGenerator(gl);
    const envMap = gen.fromEquirectangular(texture).texture;
    texture.dispose();
    gen.dispose();

    if (props.bgEnvironment) scene.background = envMap;

    if (props.bgSolid) {
      scene.background = new THREE.Color(`#${props.bgColor}`);
      scene.background.convertSRGBToLinear();
    }

    if (props.mapEnvironment) scene.environment = envMap;

    return () => {
      scene.environment = null;
      scene.background = null;
    };
  }, [
    props.background,
    gl,
    scene.background,
    scene.environment,
    texture,
    props.bgEnvironment,
    props.bgSolid,
    props.bgColor,
    props.mapEnvironment
  ]);

  return null;
};

Environment.propTypes = {
  environmentPath: PropTypes.string.isRequired
};

export default Environment;
