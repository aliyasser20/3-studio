import * as actionTypes from "../actions/actionTypes";

const initialState = {
  selectedMaterial: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_MATERIAL:
      return {
        ...state,
        selectedMaterial: action.material
      };
    default:
      return state;
  }
};

export default reducer;
