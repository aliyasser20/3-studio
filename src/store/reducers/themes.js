import * as actionTypes from "../actions/actionTypes";
import {
  availableThemes,
  toggleCSSGlobalColors
} from "./reducersHelpers/themesHelpers";

const initialState = {
  currentTheme: "cherry"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROJECT_DETAILS:
      toggleCSSGlobalColors(availableThemes, action.theme);

      return {
        ...state,
        currentTheme: action.theme
      };
    default:
      return state;
  }
};

export default reducer;
