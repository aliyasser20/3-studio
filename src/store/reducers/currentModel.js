import * as actionTypes from "../actions/actionTypes";

const initialState = {
  model: null,
  fov: 45,
  far: 0,
  near: 0,
  sizeBounding: { x: 0, y: 0, z: 0 },
  box: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODEL:
      return {
        ...state,
        model: action.model
      };
    case actionTypes.SET_FOV:
      return {
        ...state,
        fov: action.fov
      };
    case actionTypes.SET_FAR:
      return {
        ...state,
        far: action.far
      };
    case actionTypes.SET_NEAR:
      return {
        ...state,
        near: action.near
      };
    case actionTypes.SET_SIZE_BOUNDING:
      return {
        ...state,
        sizeBounding: action.sizeBounding
      };
    case actionTypes.SET_BOX:
      return {
        ...state,
        box: action.box
      };
    default:
      return state;
  }
};

export default reducer;
