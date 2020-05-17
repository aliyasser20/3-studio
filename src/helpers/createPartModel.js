import * as THREE from "three";

import materialLibrary from "./materialLibrary";

export const createPartModel = (
  partModel,
  setPartFar,
  setPartSizeBounding,
  setPartNear,
  setPartModel
) => {
  // ? Math for a few things including size, center, far, near
  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(partModel);

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
  partModel.position.x -= centerNew.x;
  partModel.position.y -= centerNew.y;
  partModel.position.z -= centerNew.z;
  // ?

  // ? Set model material to default
  partModel.material = materialLibrary().greyDefault;
  // ?

  // ? Set states
  setPartFar(distance * 100);
  setPartNear(distance / 100);
  setPartSizeBounding(size);
  setPartModel(partModel);
  // ?
};
