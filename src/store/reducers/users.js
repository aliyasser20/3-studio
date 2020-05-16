import * as actionTypes from "../actions/actionTypes";

const initialState = {
  imagePath: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE_IMAGE:
      return {
        ...state,
        imagePath: action.image
      };
    default:
      return state;
  }
};

export default reducer;
