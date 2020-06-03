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
      "https://res.cloudinary.com/cloud3studio/raw/upload/v1591147171/environments/studio-1_gihmwv.hdr",
    imgPath:
      "https://res.cloudinary.com/cloud3studio/image/upload/v1591147462/environments/studio-1_sl7xag_pmeaql.jpg"
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
    case actionTypes.BULK_SET_ENVIRONMENT_CONTROLS:
      return {
        ...state,
        bgEnvironment: action.config.bgEnvironment,
        bgSolid: action.config.bgSolid,
        bgColor: action.config.bgColor,
        mapEnvironment: action.config.mapEnvironment,
        currentEnvironmentOption: action.config.currentEnvironmentOption
      };
    default:
      return state;
  }
};

export default reducer;
