import * as THREE from "three";

// Function that creates THREE material based on inputs
const createMaterial = config => {
  const textureConfiguration = {};

  if (config.color) {
    textureConfiguration.color = config.color;
  }

  if (config.emissive) {
    textureConfiguration.emissive = config.emissive;
  }

  if (config.specular) {
    textureConfiguration.specular = config.specular;
  }

  if (config.colorMap) {
    textureConfiguration.map = new THREE.TextureLoader().load(
      config.colorMapPath
    );
    textureConfiguration.map.encoding = THREE.sRGBEncoding;
  }

  if (config.alphaMap) {
    textureConfiguration.map = new THREE.TextureLoader().load(
      config.alphaMapPath
    );
  }

  if (config.roughnessMetalnessMap) {
    textureConfiguration.roughnessMap = new THREE.TextureLoader().load(
      config.roughnessMetalnessMapPath
    );

    textureConfiguration.metalnessMap = textureConfiguration.roughnessMap;
  }

  if (config.roughness) {
    textureConfiguration.roughness = config.roughness;
  }

  if (config.displacementMap) {
    textureConfiguration.displacementMap = new THREE.TextureLoader().load(
      config.displacementMapPath
    );
    textureConfiguration.displacementScale = config.displacementScale;
  }

  if (config.bumpMap) {
    textureConfiguration.bumpMap = new THREE.TextureLoader().load(
      config.bumpMapPath
    );
    textureConfiguration.bumpScale = config.bumpScale;
  }

  if (config.normalMap) {
    textureConfiguration.normalMap = new THREE.TextureLoader().load(
      config.normalMapPath
    );
  }

  if (config.ambientOcclusionMap) {
    textureConfiguration.aoMap = new THREE.TextureLoader().load(
      config.ambientOcclusionMapPath
    );
  }

  if (config.specularMap) {
    textureConfiguration.specularMap = new THREE.TextureLoader().load(
      config.specularMapPath
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
    case "metallic-paint":
      return new THREE.MeshPhysicalMaterial(textureConfiguration);
    case "woods":
      return new THREE.MeshStandardMaterial(textureConfiguration);
    case "stones":
      return new THREE.MeshStandardMaterial(textureConfiguration);
    case "tiles":
      return new THREE.MeshStandardMaterial(textureConfiguration);
    case "plastics":
      return new THREE.MeshStandardMaterial(textureConfiguration);
    default:
      return new THREE.MeshStandardMaterial(textureConfiguration);
  }
};

export default createMaterial;
