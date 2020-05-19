import * as actionTypes from "../actions/actionTypes";
import {
  availableThemes,
  toggleCSSGlobalColors,
  setCurrentThemeDetailed
} from "./reducersHelpers/themesHelpers";

const initialState = {
  currentTheme: "cherry",
  currentThemeDetailed: {
    name: "cherry",
    hslColor: {
      topFirst: "8",
      topSecond: "89%",
      topThird: "61%",
      bottomFirst: "353",
      bottomSecond: "82%",
      bottomThird: "56%"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      toggleCSSGlobalColors(availableThemes, action.theme);

      return {
        ...state,
        currentTheme: action.theme,
        currentThemeDetailed: setCurrentThemeDetailed(
          availableThemes,
          action.theme
        )
      };
    default:
      return state;
  }
};

export default reducer;
