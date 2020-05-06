import * as THREE from "three";

const createMaterial = config => {
  const textureConfiguration = {};
  const initialPath = `/appearances/${config.group}/`;

  if (config.color) {
    textureConfiguration.color = config.color;
  }

  // if (config.colorMap) {
  //   textureConfiguration.map = new THREE.TextureLoader().load(
  //     "https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=18aWRn6RBLUcN8MZGbSc5c5VIwtSpMF_B"
  //   );
  //   textureConfiguration.map.encoding = THREE.sRGBEncoding;
  // }

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

  // if (config.roughnessMetalnessMap) {
  //   textureConfiguration.roughnessMap = new THREE.TextureLoader().load(
  //     "https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=1qAo1F1PAic0kaYx2TjDburnlmIl7HPzE"
  //   );
  // }

  if (config.roughnessMetalnessMap) {
    textureConfiguration.roughnessMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/roughness-metalness.png`
    );

    textureConfiguration.metalnessMap = textureConfiguration.roughnessMap;
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

  // if (config.normalMap) {
  //   textureConfiguration.bumpMap = new THREE.TextureLoader().load(
  //     "https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=1GkBaobd1XdsO7plo9AraGE8TODqCNRn-"
  //   );
  // }

  if (config.normalMap) {
    textureConfiguration.normalMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/normal.png`
    );
  }

  if (config.ambientOcclusionMap) {
    textureConfiguration.aoMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/ao.png`
    );
  }

  if (config.specularMap) {
    textureConfiguration.specularMap = new THREE.TextureLoader().load(
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
  const DEFAULTCOLORS = {
    black: "#000000",
    white: "#ffffff",
    grey: "#808080"
  };

  // eslint-disable-next-line
    for (const color in DEFAULTCOLORS) {
    materials[`${color}Default`] = createMaterial({
      name: `${color}Default`,
      group: "defaults",
      color: DEFAULTCOLORS[color]
    });
  }
  // ?

  // ? Metals
  // Basic
  const BASICMETALS = {
    gold: "#DAA520",
    aluminum: "#C0C0C0",
    steel: "#43464B",
    copper: "#CB6D51",
    brass: "#b5a642",
    blue: "#2d5b7d",
    graphite: "#1e1d19",
    black: "#000000",
    green: "#008000",
    lightGreen: "#8bc34a",
    lightBlue: "#03a9f4",
    purple: "#673ab7",
    cherry: "#AE2321"
  };

  // eslint-disable-next-line
  for (const metal in BASICMETALS) {
    // Basic polished
    materials[`${metal}Polished`] = createMaterial({
      name: `${metal}-polished`,
      group: "metals",
      roughness: 0.01,
      metalness: 1,
      color: BASICMETALS[metal]
    });

    // Basic rough
    materials[`${metal}Rough`] = createMaterial({
      name: `${metal}-rough`,
      group: "metals",
      roughness: 0.2,
      metalness: 1,
      color: BASICMETALS[metal]
    });
  }

  materials.alien = createMaterial({
    name: "alien",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    ambientOcclusionMap: true,
    metalness: 1,
    normalMap: true
  });

  materials.scuffedAluminumPBR = createMaterial({
    name: "scuffed-aluminum-pbr",
    group: "metals",
    colorMap: true,
    color: "#222222",
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true
  });

  materials.metalGrid = createMaterial({
    name: "metal-grid",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true,
    ambientOcclusionMap: true
  });

  materials.rust = createMaterial({
    name: "rust",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true
  });

  materials.brushedMetal = createMaterial({
    name: "brushed-metal",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true,
    ambientOcclusionMap: true
  });

  // ?

  // ? Ceramics
  materials.marbleOne = createMaterial({
    name: "marble-one",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.1,
    roughnessMetalnessMap: true
  });

  materials.fleshyGranite = createMaterial({
    name: "fleshy-granite",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    roughnessMetalnessMap: true,
    ambientOcclusionMap: true
  });

  materials.polishedGranite = createMaterial({
    name: "polished-granite",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.1
  });

  materials.marbleTwo = createMaterial({
    name: "marble-two",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.2,
    roughnessMetalnessMap: true
  });

  materials.marbleThree = createMaterial({
    name: "marble-three",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.2,
    roughnessMetalnessMap: true
  });
  // ?

  // ? Woods
  materials.woodOne = createMaterial({
    name: "wood-one",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 200,
    roughnessMetalnessMap: true,
    displacementMap: true,
    displacementScale: 200
  });

  materials.woodFlooringOne = createMaterial({
    name: "wood-flooring-one",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 50,
    roughnessMetalnessMap: true,
    displacementMap: true,
    displacementScale: 200
  });

  materials.woodFlooringTwo = createMaterial({
    name: "wood-flooring-two",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 100,
    roughnessMetalnessMap: true,
    ambientOcclusionMap: true,
    displacementMap: true,
    displacementScale: 1
  });
  // ?

  return materials;
};

export default materialLibrary;
