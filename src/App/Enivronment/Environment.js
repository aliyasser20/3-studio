import * as THREE from "three";
import { useEffect } from "react";
import { useThree, useLoader } from "react-three-fiber";
import { HDRCubeTextureLoader } from "three/examples/jsm/loaders/HDRCubeTextureLoader";

const Environment = props => {
  const { gl, scene } = useThree();
  const [cubeMap] = useLoader(
    HDRCubeTextureLoader,
    [["px.hdr", "nx.hdr", "py.hdr", "ny.hdr", "pz.hdr", "nz.hdr"]],
    loader => {
      loader.setDataType(THREE.UnsignedByteType);
      loader.setPath("/pisaHDR/");
    }
  );
  useEffect(() => {
    const gen = new THREE.PMREMGenerator(gl);
    gen.compileEquirectangularShader();
    const hdrCubeRenderTarget = gen.fromCubemap(cubeMap);
    cubeMap.dispose();
    gen.dispose();
    if (props.background) scene.background = hdrCubeRenderTarget.texture;
    scene.environment = hdrCubeRenderTarget.texture;
    return () => {
      scene.environment = null;
      scene.background = null;
    };
  }, [props.background, cubeMap, gl, scene.background, scene.environment]);
  return null;
};

export default Environment;
