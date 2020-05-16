import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allConfigurations: [],
  currentConfigurationId: NaN,
  currentConfigurationName: "",
  configurationSaved: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CONFIGURATION_ID:
      return {
        ...state,
        currentConfigurationId: action.id
      };
    case actionTypes.SET_CURRENT_CONFIGURATION_NAME:
      return {
        ...state,
        currentConfigurationName: action.name
      };
    case actionTypes.SET_CONFIGURATION_SAVED:
      return {
        ...state,
        configurationSaved: true
      };
    case actionTypes.SET_ALL_CONFIGURATIONS:
      return {
        ...state,
        allConfigurations: action.configs
      };
    case actionTypes.ADD_CONFIGURATION:
      return {
        ...state,
        allConfigurations: [...state.allConfigurations, action.config]
      };
    default:
      return state;
  }
};

export default reducer;
