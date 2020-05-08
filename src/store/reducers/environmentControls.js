import * as actionTypes from "../actions/actionTypes";

const initialState = {
  bgEnvironment: false,
  bgSolid: true,
  bgColor: "ffffff"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BACKGROUND_ENVIRONMENT:
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
