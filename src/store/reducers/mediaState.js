import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mediaModel: null,
  mediaFov: 45,
  mediaFar: 0,
  mediaNear: 0,
  mediaSizeBounding: { x: 0, y: 0, z: 0 },
  mediaBox: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MEDIA_MODEL:
      return {
        ...state,
        mediaModel: action.mediaModel,
      };
    case actionTypes.SET_MEDIA_FOV:
      return {
        ...state,
        mediaFov: action.mediaFov,
      };
    case actionTypes.SET_MEDIA_FAR:
      return {
        ...state,
        mediaFar: action.mediaFar,
      };
    case actionTypes.SET_MEDIA_NEAR:
      return {
        ...state,
        mediaNear: action.mediaNear,
      };
    case actionTypes.SET_MEDIA_SIZE_BOUNDING:
      return {
        ...state,
        mediaSizeBounding: action.mediaSizeBounding,
      };
    case actionTypes.SET_MEDIA_BOX:
      return {
        ...state,
        mediaBox: action.mediaBox,
      };
    default:
      return state;
  }
};

export default reducer;
