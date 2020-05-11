import * as THREE from "three";

// Function that creates THREE material based on inputs
const createMaterial = config => {
  const textureConfiguration = {};

  // Path to group folder inside appearances
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
    case "stones":
      return new THREE.MeshStandardMaterial(textureConfiguration);
    default:
      return new THREE.MeshStandardMaterial(textureConfiguration);
  }
};

export default createMaterial;
