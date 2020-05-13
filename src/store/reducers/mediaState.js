import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mediaModel: null,
  mediaFov: null,
  mediaFar: null,
  mediaNear: null,
  mediaSizeBounding: null,
  mediaBox: null,
  mediaSolidBackground: "#000",
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
    case actionTypes.SET_MEDIA_SOLID_BACKGROUND:
      return {
        ...state,
        mediaSolidBackground: action.solidBackground,
      };
    case actionTypes.RESET_MEDIA_STATE:
      return {
        ...state,
        mediaModel: null,
        mediaFov: null,
        mediaFar: null,
        mediaNear: null,
        mediaSizeBounding: null,
        mediaBox: null,
        mediaSolidBackground: "#000",
      };
    default:
      return state;
  }
};

export default reducer;
