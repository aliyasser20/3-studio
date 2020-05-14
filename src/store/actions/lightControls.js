import * as actionTypes from "./actionTypes";

export const toggleAmbientLight = () => ({
  type: actionTypes.TOGGLE_AMBIENT_LIGHT
});

export const toggleDirectionalLight = () => ({
  type: actionTypes.TOGGLE_DIRECTIONAL_LIGHT
});

export const toggleHemisphereLight = () => ({
  type: actionTypes.TOGGLE_HEMISPHERE_LIGHT
});

export const setAmbientLightIntensity = intensity => ({
  type: actionTypes.SET_AMBIENT_LIGHT_INTENSITY,
  intensity
});

export const setAmbientLightColor = color => ({
  type: actionTypes.SET_AMBIENT_LIGHT_COLOR,
  color
});

export const setDirectionalLightIntensity = intensity => ({
  type: actionTypes.SET_DIRECTIONAL_LIGHT_INTENSITY,
  intensity
});

export const setDirectionalLightColor = color => ({
  type: actionTypes.SET_DIRECTIONAL_LIGHT_COLOR,
  color
});

export const setHemisphereLightIntensity = intensity => ({
  type: actionTypes.SET_HEMISPHERE_LIGHT_INTENSITY,
  intensity
});

export const setHemisphereLightColor = color => ({
  type: actionTypes.SET_HEMISPHERE_LIGHT_COLOR,
  color
});
