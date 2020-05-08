import * as THREE from "three";
import { useEffect, useState } from "react";
import { useThree, useLoader } from "react-three-fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const Environment = props => {
  const { gl, scene } = useThree();

  // const [image, setImage] = useState(
  //   "https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=1Nvg2o_QLf1kw_BmzN_rpZByJrtZO6sFj"
  // );

  // const [image, setImage] = useState(
  //   "https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=1uBOBR40ovXh-Nu2V33SxqUzKX2YRrEez"
  // );

  const [image, setImage] = useState("/environments/venice.hdr");

  // ? Load HDR file
  const texture = useLoader(RGBELoader, image, loader => {
    loader.setDataType(THREE.UnsignedByteType);
  });

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

export default Environment;
