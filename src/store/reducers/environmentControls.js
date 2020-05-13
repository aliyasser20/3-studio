import * as actionTypes from "../actions/actionTypes";
import { environmentOptions } from "./reducersHelpers/environmentControlsHelpers";

const initialState = {
  bgEnvironment: false,
  bgSolid: true,
  bgColor: "262326",
  environmentOptions,
  currentEnvironmentOption: {
    name: "studio-1",
    path: "./environments/studio-1.hdr"
  }
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
    case actionTypes.SET_ENVIRONMENT_OPTION:
      return {
        ...state,
        currentEnvironmentOption: { ...action.option }
      };
    default:
      return state;
  }
};

export default reducer;
