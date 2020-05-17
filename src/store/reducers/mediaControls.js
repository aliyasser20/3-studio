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
  lSphere: null,
  wBox: null,
  mBox: null,
  keyLight: null,
  dLight: null,
  bLight: null,
  pWall: null,
  pGround: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Controls
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
    // Background
    case actionTypes.TOGGLE_MEDIA_ENV_B:
      return {
        ...state,
        mediaEnvBackground: !state.mediaEnvBackground,
        mediaSolidBackground:
          state.mediaSolidBackground && !state.mediaSolidBackground,
      };

    case actionTypes.TOGGLE_MEDIA_SOLID_B:
      return {
        ...state,
        mediaSolidBackground: !state.mediaSolidBackground,
        mediaEnvBackground:
          state.mediaEnvBackground && !state.mediaEnvBackground,
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

    // Object
    // sphere
    case actionTypes.SET_MEDIA_SPHERE:
      return {
        ...state,
        sphere: action.sphere,
      };

    case actionTypes.SET_MEDIA_L_SPHERE:
      return {
        ...state,
        lSphere: action.lSphere,
      };
    // lights
    case actionTypes.SET_MEDIA_KEY_LIGHT:
      return {
        ...state,
        keyLight: action.keyLight,
      };
    case actionTypes.SET_MEDIA_D_LIGHT:
      return {
        ...state,
        dLight: action.dLight,
      };

    case actionTypes.SET_MEDIA_B_LIGHT:
      return {
        ...state,
        bLight: action.bLight,
      };
    // plain objects
    case actionTypes.SET_MEDIA_P_WALL:
      return {
        ...state,
        backWall: action.backWall,
      };
    case actionTypes.SET_MEDIA_P_GROUND:
      return {
        ...state,
        pWall: action.pGround,
      };
    // box
    case actionTypes.SET_MEDIA_M_BOX:
      return {
        ...state,
        mBox: action.mBox,
      };
    case actionTypes.SET_MEDIA_W_BOX:
      return {
        ...state,
        wBox: action.wBox,
      };
    case actionTypes.RESET_MEDIA_CONTROLS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
