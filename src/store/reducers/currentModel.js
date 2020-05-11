import * as actionTypes from "../actions/actionTypes";

const initialState = {
  model: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODEL:
      return {
        ...state,
        model: action.model
      };
    default:
      return state;
  }
};

export default reducer;
