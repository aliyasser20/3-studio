import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currentMode: "VIEW"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODE_SELECT:
      return {
        ...state,
        currentMode: action.mode
      };
    default:
      return state;
  }
};

export default reducer;
