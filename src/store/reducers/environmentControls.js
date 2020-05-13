import * as actionTypes from "../actions/actionTypes";
import { environmentOptions } from "./reducersHelpers/environmentControlsHelpers";

const initialState = {
  bgEnvironment: false,
  bgSolid: true,
  bgColor: "262326",
  environmentOptions
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_BACKGROUND:
      return {
        ...state,
        bgEnvironment: !state.bgEnvironment,
        bgSolid: !state.bgSolid
      };
    case actionTypes.SET_BACKGROUND_COLOR:
      return {
        ...state,
        bgColor: action.color
      };
    default:
      return state;
  }
};

export default reducer;
