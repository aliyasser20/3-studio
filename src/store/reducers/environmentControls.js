import * as actionTypes from "../actions/actionTypes";
import { environmentOptions } from "./reducersHelpers/environmentControlsHelpers";

const initialState = {
  bgEnvironment: false,
  bgSolid: true,
  bgColor: "525252",
  mapEnvironment: true,
  environmentOptions,
  currentEnvironmentOption: {
    name: "studio-1",
    hdrPath:
      "https://res.cloudinary.com/aajfinal/raw/upload/v1589352709/environments/studio-1_ugueaj.hdr",
    imgPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589352866/environments/studio-1_sl7xag.jpg"
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BACKGROUND_SOLID:
      return {
        ...state,
        bgEnvironment: false,
        bgSolid: true
      };
    case actionTypes.SET_BACKGROUND_ENVIRONMENT:
      return {
        ...state,
        bgEnvironment: true,
        bgSolid: false
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
    case actionTypes.TOGGLE_MAP_ENVIRONMENT:
      return {
        ...state,
        mapEnvironment: !state.mapEnvironment
      };
    case actionTypes.RESET_ENVIRONMENT_CONTROLS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
