import React, { Fragment } from "react";
import { useThree, useLoader } from "react-three-fiber";
import * as THREE from "three";

function Scene() {
  // const { gl, scene, camera } = useThree();
  const { scene } = useThree();
  // const scene = useRef();
  const r = "https://threejs.org/examples/textures/cube/Bridge2/";
  const urls = [
    `${r}posx.jpg`,
    `${r}negx.jpg`,
    `${r}posy.jpg`,
    `${r}negy.jpg`,
    `${r}posz.jpg`,
    `${r}negz.jpg`
  ];

  // const textureCube = new THREE.CubeTextureLoader();
  // const textureCube = new THREE.CubeTextureLoader().load(urls);
  // console.log(textureCube.format);
  // textureCube.format = THREE.RGBFormat;

  // const sceneNew = new THREE.Scene();
  // sceneNew.environment = textureCube;

  const obj = useLoader(THREE.CubeTextureLoader, [urls]);

  const textureCube = obj[0];
  console.log(textureCube);

  // console.log(obj[0].format);
  // console.log(obj);
  textureCube.format = THREE.RGBEFormat;
  console.log(textureCube.format);
  // const [cubeMapTexture] = useLoader(textureCube, [urls]);

  // let envMap;

  // new THREE.DataTextureLoader()
  //   .setDataType(THREE.UnsignedByteType)
  //   .load("/environments/venice.hdr", envTexture => {
  //     envMap = THREE.PMREMGenerator.fromEquirectangular(envTexture).texture;
  //     THREE.PMREMGenerator.dispose();
  //   });

  // console.log("envMap", envMap);
  // cubeMapTexture.format = THREE.RGBFormat;
  scene.environment = textureCube;
  // scene.background = cubeMapTexture;

  // console.log(sceneNew.environment);

  // console.log(sceneNew);

  // console.log(scene);

  // return (
  //   <mesh layers={1} scale={[1, 1, 1]}>
  //     <planeBufferGeometry attach="geometry" />
  //     <meshBasicMaterial
  //       attach="material"
  //       map={textureCube}
  //       depthTest={false}
  //     />
  //   </mesh>
  // );

  return <Fragment />;
}

export default Scene;
