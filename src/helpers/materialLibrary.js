import * as THREE from "three";

const createMaterial = config => {
  const textureConfiguration = {};
  const initialPath = `/appearances/${config.group}/`;

  if (config.color) {
    textureConfiguration.color = config.color;
  }

  if (config.colorMap) {
    textureConfiguration.map = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/color.png`
    );
    textureConfiguration.map.encoding = THREE.sRGBEncoding;
  }

  if (config.alphaMap) {
    textureConfiguration.map = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/alpha.png`
    );
  }

  if (config.roughnessMap) {
    textureConfiguration.roughnessMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/roughness.png`
    );
  }

  if (config.roughness) {
    textureConfiguration.roughness = config.roughness;
  }

  if (config.displacementMap) {
    textureConfiguration.displacementMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/displacement.png`
    );
    textureConfiguration.displacementScale = config.displacementScale;
  }

  if (config.bumpMap) {
    textureConfiguration.bumpMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/normal.png`
    );
    textureConfiguration.bumpScale = config.bumpScale;
  }

  if (config.ambientOcclusionMap) {
    textureConfiguration.aoMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/ao.png`
    );
  }

  if (config.specularMap) {
    textureConfiguration.aoMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/specular.png`
    );
  }

  if (config.reflectivity) {
    textureConfiguration.reflectivity = config.reflectivity;
  }

  if (config.shininess) {
    textureConfiguration.shininess = config.shininess;
  }

  if (config.metalness) {
    textureConfiguration.metalness = config.metalness;
  }

  if (config.clearcoat) {
    textureConfiguration.clearcoat = config.clearcoat;
  }

  if (config.clearcoatRoughness) {
    textureConfiguration.clearcoatRoughness = config.clearcoatRoughness;
  }

  if (config.metalnessMap) {
    textureConfiguration.metalnessMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/metalness.psd`
    );
  }

  switch (config.group) {
    case "metals":
      return new THREE.MeshStandardMaterial(textureConfiguration);
    case "ceramics":
      return new THREE.MeshPhysicalMaterial(textureConfiguration);
    case "woods":
      return new THREE.MeshStandardMaterial(textureConfiguration);
    default:
      return new THREE.MeshStandardMaterial(textureConfiguration);
  }
};

const materialLibrary = () => {
  const materials = {};

  // ? Default
  materials.default = createMaterial({
    name: "default",
    group: "default",
    color: "#363636"
  });
  // ?

  // ? Metals

  // Basic

  const BASICMETALS = {
    gold: "#DAA520",
    aluminum: "#C0C0C0",
    // steel: "#808080",
    steel: "#43464B",
    copper: "#CB6D51",
    brass: "#b5a642"
  };

  // eslint-disable-next-line
  for (const metal in BASICMETALS) {
    console.log(metal);
    materials[`${metal}Polished`] = createMaterial({
      name: `${metal}-polished`,
      group: "metals",
      roughness: 0.01,
      metalness: 1,
      // color: "#ff0000"
      color: BASICMETALS[metal]
    });
  }

  console.log(materials);

  materials.alien = createMaterial({
    name: "alien",
    group: "metals",
    colorMap: true,
    roughnessMap: true,
    ambientOcclusionMap: true,
    metalness: 1,
    bumpMap: true,
    bumpScale: 100
  });

  materials.scuffedAluminumPBR = createMaterial({
    name: "scuffed-aluminum-pbr",
    group: "metals",
    colorMap: true,
    color: "#222222",
    roughnessMap: true,
    metalness: 1,
    bumpMap: true,
    bumpScale: 200
  });

  materials.metalGrid = createMaterial({
    name: "metal-grid",
    group: "metals",
    colorMap: true,
    roughnessMap: true,
    metalness: 1,
    bumpMap: true,
    bumpScale: 300,
    ambientOcclusionMap: true
  });

  materials.rust = createMaterial({
    name: "rust",
    group: "metals",
    colorMap: true,
    roughnessMap: true,
    metalness: 1,
    bumpMap: true,
    bumpScale: 50
  });

  materials.brushedMetal = createMaterial({
    name: "brushed-metal",
    group: "metals",
    colorMap: true,
    roughnessMap: true,
    metalness: 1,
    bumpMap: true,
    bumpScale: 25,
    ambientOcclusionMap: true
  });

  // ?

  // ? Ceramics
  materials.marbleOne = createMaterial({
    name: "marble-one",
    group: "ceramics",
    colorMap: true,
    bumpMap: true,
    bumpScale: 200,
    clearcoat: 0.2,
    specularMap: true,
    roughnessMap: true
  });

  materials.fleshyGranite = createMaterial({
    name: "fleshy-granite",
    group: "ceramics",
    colorMap: true,
    bumpMap: true,
    bumpScale: 10,
    roughnessMap: true,
    ambientOcclusionMap: true
  });

  materials.polishedGranite = createMaterial({
    name: "polished-granite",
    group: "ceramics",
    colorMap: true,
    bumpMap: true,
    bumpScale: 10,
    clearcoat: 0.1
  });

  materials.marbleTwo = createMaterial({
    name: "marble-two",
    group: "ceramics",
    colorMap: true,
    bumpMap: true,
    bumpScale: 200,
    clearcoat: 0.2,
    roughnessMap: true
  });

  materials.marbleThree = createMaterial({
    name: "marble-three",
    group: "ceramics",
    colorMap: true,
    bumpMap: true,
    bumpScale: 200,
    clearcoat: 0.2,
    roughnessMap: true
  });
  // ?

  // ? Woods
  materials.woodOne = createMaterial({
    name: "wood-one",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 200,
    roughnessMap: true,
    displacementMap: true,
    displacementScale: 200
  });

  materials.woodFlooringOne = createMaterial({
    name: "wood-flooring-one",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 50,
    roughnessMap: true,
    displacementMap: true,
    displacementScale: 200
  });

  materials.woodFlooringTwo = createMaterial({
    name: "wood-flooring-two",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 100,
    roughnessMap: true,
    ambientOcclusionMap: true,
    displacementMap: true,
    displacementScale: 1
  });
  // ?

  return materials;
};

export default materialLibrary;
