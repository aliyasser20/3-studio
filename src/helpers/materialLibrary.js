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
      `${initialPath}${config.name}/height.png`
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
    // return new THREE.MeshBasicMaterial(textureConfiguration);
    default:
      break;
  }
};

const materialLibrary = () => {
  const materials = {};

  // ? Metals
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
    bumpScale: 100
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
  // ?

  return materials;
};

export default materialLibrary;
