import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allConfigurations: [],
  currentConfigurationId: NaN
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CONFIGURATION_ID:
      return {
        ...state,
        currentConfigurationId: action.id
      };
    default:
      return state;
  }
};

export default reducer;
