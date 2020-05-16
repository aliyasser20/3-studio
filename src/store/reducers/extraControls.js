import * as actionTypes from "../actions/actionTypes";

const initialState = {
  lock: false,
  boundingBox: false,
  axis: false,
  autorotate: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LOCK:
      return {
        ...state,
        lock: !state.lock
      };
    case actionTypes.TOGGLE_BOUNDING_BOX:
      return {
        ...state,
        boundingBox: !state.boundingBox
      };
    case actionTypes.TOGGLE_AXIS:
      return {
        ...state,
        axis: !state.axis
      };
    case actionTypes.TOGGLE_AUTOROTATE:
      return {
        ...state,
        autorotate: !state.autorotate
      };
    case actionTypes.RESET_EXTRA_CONTROLS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
