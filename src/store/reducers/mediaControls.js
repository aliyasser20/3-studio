import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mediaLock: false,
  mediaBoundingBox: false,
  mediaAxis: false,
  mediaAutorotate: false,
  mediaEnvBackground: false,
  mediaSolidBackground: true,
  mediaNoBakground: false,
  mediaMapEnvironment: false,
  defaultLight: true,
  sphere: null,
  keyLight: null,
  backWall: null,
  groundPole: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MEDIA_LOCK:
      return {
        ...state,
        mediaLock: !state.mediaLock,
      };
    case actionTypes.TOGGLE_MEDIA_BOUNDING_BOX:
      return {
        ...state,
        mediaBoundingBox: !state.mediaBoundingBox,
      };
    case actionTypes.TOGGLE_MEDIA_AXIS:
      return {
        ...state,
        mediaAxis: !state.mediaAxis,
      };
    case actionTypes.TOGGLE_MEDIA_AUTOROTATE:
      return {
        ...state,
        mediaAutorotate: !state.mediaAutorotate,
      };
    case actionTypes.TOGGLE_MEDIA_ENV_B:
      return {
        ...state,
        mediaEnvBackground: !state.mediaEnvBackground,
        mediaSolidBackground: !state.mediaSolidBackground,
      };

    case actionTypes.TOGGLE_MEDIA_SOLID_B:
      return {
        ...state,
        mediaSolidBackground: !state.mediaSolidBackground,
        mediaEnvBackground: !state.mediaEnvBackground,
      };
    case actionTypes.TOGGLE_MAP_ENV:
      return {
        ...state,
        mediaMapEnvironment: !state.mediaMapEnvironment,
      };
    case actionTypes.TOGGLE_DEFAULT_LIGHT:
      return {
        ...state,
        defaultLight: !state.defaultLight,
      };
    case actionTypes.SET_MEDIA_SPHERE:
      return {
        ...state,
        sphere: action.sphere,
      };
    case actionTypes.SET_MEDIA_KEY_LIGHT:
      return {
        ...state,
        keyLight: action.keyLight,
      };
    case actionTypes.SET_MEDIA_BACK_WALL:
      return {
        ...state,
        backWall: action.backWall,
      };
    case actionTypes.SET_MEDIA_GROUND_POLE:
      return {
        ...state,
        backWall: action.backWall,
      };
    case actionTypes.RESET_MEDIA_CONTROLS:
      return {
        ...state,
        mediaLock: false,
        mediaBoundingBox: false,
        mediaAxis: false,
        mediaAutorotate: false,
        mediaEnvBackground: false,
        mediaSolidBackground: true,
        mediaNoBakground: false,
        mediaMapEnvironment: false,
        defaultLight: true,
        sphere: null,
        keyLight: null,
        backWall: null,
        groundPole: null,
      };
    default:
      return state;
  }
};

export default reducer;
