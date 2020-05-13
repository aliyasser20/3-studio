import * as actionTypes from "../actions/actionTypes";
import { environmentOptions } from "./reducersHelpers/environmentControlsHelpers";

const initialState = {
  bgEnvironment: true,
  bgSolid: false,
  bgColor: "262326",
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
