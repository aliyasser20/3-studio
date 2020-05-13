import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mediaLock: false,
  mediaBoundingBox: false,
  mediaAxis: false,
  mediaAutorotate: false,
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
    default:
      return state;
  }
};

export default reducer;
