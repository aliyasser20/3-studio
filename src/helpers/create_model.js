import * as THREE from "three";

const createModel = (
  gltf,
  setBox,
  setFar,
  setModel,
  setSizeBounding,
  setNear
) => {
  const theModel = gltf.scene;

  // ? This is where we change materials
  // const INITIAL_MTL = new THREE.MeshPhongMaterial({
  //   color: 0x008000,
  //   shininess: 2
  // });

  // const INITIAL_MTL_METAL = new THREE.MeshStandardMaterial({
  //   color: 0xffff00,
  //   metalness: 1,
  //   roughness: 0.5
  // });

  const texture = new THREE.TextureLoader().load(
    "/appearances/metals/Alien/color.png"
  );

  const textureRoughness = new THREE.TextureLoader().load(
    "/appearances/metals/Alien/roughness.png"
  );

  const textureNormal = new THREE.TextureLoader().load(
    "/appearances/metals/Alien/normal.png"
  );

  const textureHeight = new THREE.TextureLoader().load(
    "/appearances/metals/Alien/height.png"
  );

  const textureAO = new THREE.TextureLoader().load(
    "/appearances/metals/Alien/ao.png"
  );

  const textureMetalness = new THREE.TextureLoader().load(
    "/appearances/metals/Alien/metalness.png"
  );

  const texturedMaterial = new THREE.MeshStandardMaterial({
    // map: texture,
    // roughnessMap: textureRoughness,
    roughness: 0.1,
    // normalMap: textureNormal
    // metalnessMap: textureMetalness,
    color: 0xffff00,
    // envMap: textureCube
    metalness: 1
    // alphaMap: texture,
    // aoMap: textureAO
    // bumpMap: textureNormal,
    // bumpScale: 1500
    // displacementScale: 100,
    // displacementMap: textureHeight
  });

  // let part;

  // console.log("model position ", theModel);

  theModel.traverse(o => {
    if (o.isMesh) {
      console.log(o.material);
      // part = o;
      o.material = texturedMaterial;
      // o.material = INITIAL_MTL_METAL;
    }
  });
  // ?

  // ? Math for a few things including size, center, far, near
  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(theModel);

  const centerNew = new THREE.Vector3();
  boundingBox.getCenter(centerNew);

  const size = new THREE.Vector3();
  boundingBox.getSize(size);

  const maxSize = Math.max(size.x, size.y, size.z);
  const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * 45) / 360));
  const fitWidthDistance = fitHeightDistance / 1;
  const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);
  // ?

  // ? Set center of model to center of canvas
  theModel.position.x -= centerNew.x;
  theModel.position.y -= centerNew.y;
  theModel.position.z -= centerNew.z;
  // ?

  // ? Create visual bounding box
  const visualBoundingBox = new THREE.BoxHelper(theModel, 0xffff00);
  // ?

  // ? Set states
  setBox(visualBoundingBox);
  setFar(distance * 100);
  setNear(distance / 100);
  setSizeBounding(size);
  setModel(theModel);
  // ?
};

export default createModel;
