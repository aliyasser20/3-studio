import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currentPartModel: null,
  partFov: 40,
  partFar: 0,
  partNear: 0,
  partSizeBounding: { x: 0, y: 0, z: 0 }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PART_MODEL:
      return {
        ...state,
        currentPartModel: action.model
      };
    case actionTypes.SET_PART_FOV:
      return {
        ...state,
        partFov: action.fov
      };
    case actionTypes.SET_PART_FAR:
      return {
        ...state,
        partFar: action.far
      };
    case actionTypes.SET_PART_NEAR:
      return {
        ...state,
        partNear: action.near
      };
    case actionTypes.SET_PART_SIZE_BOUNDING:
      return {
        ...state,
        partSizeBounding: action.sizeBounding
      };
    case actionTypes.RESET_PART_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
