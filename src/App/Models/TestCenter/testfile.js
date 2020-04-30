const createModel = gltf => {
  const theModel = gltf.scene;
  const INITIAL_MTL = new THREE.MeshPhongMaterial({
    color: 0x008000,
    shininess: 2
  });

  const INITIAL_MTL_METAL = new THREE.MeshStandardMaterial({
    color: 0xffff00,
    metalness: 1,
    roughness: 0.5
  });

  let part;

  // console.log("model position ", theModel);

  theModel.traverse(o => {
    if (o.isMesh) {
      // console.log(o);
      part = o;
      // o.material = INITIAL_MTL_METAL;
    }
  });

  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(theModel);

  const centerNew = new THREE.Vector3();
  boundingBox.getCenter(centerNew);

  const size = new THREE.Vector3();
  boundingBox.getSize(size);

  console.log("size", size);

  // const fov = 75 * (Math.PI / 180);
  // const maxDim = Math.max(size.x, size.y, size.z);
  // let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));

  // const offset = 1;

  // cameraZ *= offset;

  // const minZ = boundingBox.min.z;
  // const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;

  // ! -------------------

  // const camera = new THREE.PerspectiveCamera();
  // console.log(camera);

  const maxSize = Math.max(size.x, size.y, size.z);

  const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * 75) / 360));

  const fitWidthDistance = fitHeightDistance / 1;
  const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);

  console.log(fitHeightDistance, distance);

  const fov = 2 * Math.atan(fitHeightDistance / (2 * size.y)) * (180 / Math.PI);

  console.log(fov);
  // const direction = controls.target
  //   .clone()
  //   .sub(camera.position)
  //   .normalize()
  //   .multiplyScalar(distance);

  // controls.maxDistance = distance * 10;
  // controls.target.copy( center );

  // camera.near = distance / 100;
  // camera.far = distance * 100;
  // camera.updateProjectionMatrix();

  // camera.position.copy( controls.target ).sub(direction);

  // controls.update();
  // ! -------------------

  console.log(boundingBox);
  // console.log(centerNew);

  theModel.position.x -= centerNew.x;
  theModel.position.y -= centerNew.y;
  theModel.position.z -= centerNew.z;

  const boxNew = new THREE.BoxHelper(theModel, 0xffff00);
  console.log("boxNew", boxNew);

  // setCenter(centerNew);
  // setZ(cameraZ);
  setBox(boxNew);
  // setFar(cameraToFarEdge * 3);
  // setFar(distance * 100);
  // setNear(distance / 100);
  setSizeBounding(size);

  // setModel(part);
  setModel(theModel);
};
