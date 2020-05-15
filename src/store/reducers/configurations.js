import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allConfigurations: [],
  currentConfigurationId: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.SET_CAMERA_MODE:
    //   return {
    //     ...state,
    //     cameraMode: action.mode
    //   };
    default:
      return state;
  }
};

export default reducer;
