import * as THREE from "three";

const createMetalMaterial = config => {
  const textureConfiguration = {};
  const initialPath = "/appearances/metals/";

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

  if (config.metalness) {
    textureConfiguration.metalness = config.metalness;
  }

  if (config.metalnessMap) {
    textureConfiguration.metalnessMap = new THREE.TextureLoader().load(
      `${initialPath}${config.name}/metalness.psd`
    );
  }

  return new THREE.MeshStandardMaterial(textureConfiguration);
};

const materialLibrary = () => {
  const materials = {};

  materials.alien = createMetalMaterial({
    name: "alien",
    colorMap: true,
    roughnessMap: true,
    ambientOcclusionMap: true,
    metalness: 1,
    bumpMap: true,
    bumpScale: 100
  });

  return materials;
};

export default materialLibrary;
