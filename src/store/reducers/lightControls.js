import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ambientLight: true,
  directionalLight: true,
  hemisphereLight: true,
  ambientLightIntensity: 0.3,
  directionalLightIntensity: 0.8 * Math.PI,
  hemisphereLightIntensity: 1,
  ambientLightColor: "ffffff",
  directionalLightColor: "ffffff",
  hemisphereLightColor: "ffffff"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_AMBIENT_LIGHT:
      return {
        ...state,
        ambientLight: !state.ambientLight
      };
    case actionTypes.TOGGLE_DIRECTIONAL_LIGHT:
      return {
        ...state,
        directionalLight: !state.directionalLight
      };
    case actionTypes.TOGGLE_HEMISPHERE_LIGHT:
      return {
        ...state,
        hemisphereLight: !state.hemisphereLight
      };
    case actionTypes.SET_HEMISPHERE_LIGHT_INTENSITY:
      return {
        ...state,
        hemisphereLightIntensity: action.intensity
      };
    case actionTypes.SET_DIRECTIONAL_LIGHT_INTENSITY:
      return {
        ...state,
        directionalLightIntensity: action.intensity
      };
    case actionTypes.SET_AMBIENT_LIGHT_INTENSITY:
      return {
        ...state,
        ambientLightIntensity: action.intensity
      };
    case actionTypes.SET_HEMISPHERE_LIGHT_COLOR:
      return {
        ...state,
        hemisphereLightColor: action.color
      };
    case actionTypes.SET_DIRECTIONAL_LIGHT_COLOR:
      return {
        ...state,
        directionalLightColor: action.color
      };
    case actionTypes.SET_AMBIENT_LIGHT_COLOR:
      return {
        ...state,
        ambientLightColor: action.color
      };
    case actionTypes.RESET_LIGHTS:
      return {
        ...state,
        ambientLight: true,
        directionalLight: true,
        hemisphereLight: true,
        ambientLightIntensity: 0.3,
        directionalLightIntensity: 0.8 * Math.PI,
        hemisphereLightIntensity: 1,
        ambientLightColor: "ffffff",
        directionalLightColor: "ffffff",
        hemisphereLightColor: "ffffff"
      };
    default:
      return state;
  }
};

export default reducer;
