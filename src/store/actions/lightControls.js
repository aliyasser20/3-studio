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

export const SetAmbientLightIntensity = intensity => ({
  type: actionTypes.SET_AMBIENT_LIGHT_INTENSITY,
  intensity
});

export const SetAmbientLightColor = color => ({
  type: actionTypes.SET_AMBIENT_LIGHT_COLOR,
  color
});

export const SetDirectionalLightIntensity = intensity => ({
  type: actionTypes.SET_DIRECTIONAL_LIGHT_INTENSITY,
  intensity
});

export const SetDirectionalLightColor = color => ({
  type: actionTypes.SET_DIRECTIONAL_LIGHT_COLOR,
  color
});

export const SetHemisphereLightIntensity = intensity => ({
  type: actionTypes.SET_HEMISPHERE_LIGHT_INTENSITY,
  intensity
});

export const SetHemisphereLightColor = color => ({
  type: actionTypes.SET_HEMISPHERE_LIGHT_COLOR,
  color
});
