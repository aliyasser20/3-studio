import * as THREE from "three";

import materialLibrary from "./materialLibrary";

// Functions that creates model and other canvas factors and sets them as state using the setters input
const createModel = (
  gltf,
  setBox,
  setFar,
  setModel,
  setSizeBounding,
  setNear,
  materials
) => {
  const theModel = gltf.scene;

  // ? This is where we change materials
  // let part;

  // Loop over model components
  theModel.traverse(o => {
    // If component is a part
    if (o.isMesh) {
      // eslint-disable-next-line
      for (const part in materials) {
        if (o.name === part) {
          o.material = materialLibrary()[materials[part].name];
        }
      }
      // part = o;
      // ? Default
      // o.material = materialLibrary().blackDefault;
      // ? Metals
      // o.material = materialLibrary().purpleRough;
      // o.material = materialLibrary().cherryPolished;
      // o.material = materialLibrary().alien;
      // o.material = materialLibrary().scuffedAluminumPBR;
      // o.material = materialLibrary().metalGrid;
      // o.material = materialLibrary().rust;
      // o.material = materialLibrary().brushedMetal;
      // o.material = materialLibrary().painted;
      // ? Ceramics
      // o.material = materialLibrary().marbleOne;
      // o.material = materialLibrary().fleshyGranite;
      // o.material = materialLibrary().polishedGranite;
      // o.material = materialLibrary().marbleTwo;
      // o.material = materialLibrary().marbleThree;
      // ? Woods
      // o.material = materialLibrary().woodOne;
      // o.material = materialLibrary().woodFlooringOne;
      // o.material = materialLibrary().woodFlooringTwo;
      // ? Stones
      // o.material = materialLibrary().bricks;
      // o.material = materialLibrary().wallMedieval;
      // o.material = materialLibrary().cobbleStoneCurved;
      // ? Tiles
      // o.material = materialLibrary().tilesOne;
      // o.material = materialLibrary().tilesTwo;
      // o.material = materialLibrary().tilesThree;
      // o.material = materialLibrary().tilesFour;
      // o.material = materialLibrary().tilesFive;
      // ? Fabrics
      // o.material = materialLibrary().fleece;
      // o.material = materialLibrary().leather;
      // o.material = materialLibrary().carpetOne;
      // o.material = materialLibrary().leatherButtoned;
      // o.material = materialLibrary().leatherButtonedTwo;
      // o.material = materialLibrary().basketWeave;
      // ? Plastics
      // o.material = materialLibrary().redRoughPlastic;
      // o.material = materialLibrary().scuffedPlastic;
      // o.material = materialLibrary().gridPatternPlastic;
      // ? Synthetics
      // o.material = materialLibrary().rubber;
      // o.material = materialLibrary().foam;
      // ? Other
      // o.material = materialLibrary().solarPanel;
      // o.material = materialLibrary().mixedMoss;
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
