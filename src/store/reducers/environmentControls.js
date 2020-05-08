import * as actionTypes from "../actions/actionTypes";

const initialState = {
  bgEnvironment: false,
  bgSolid: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BACKGROUND_ENVIRONMENT:
      return {
        ...state,
        bgEnvironment: true,
        bgSolid: false
      };
    default:
      return state;
  }
};

export default reducer;
