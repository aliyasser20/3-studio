import * as actionTypes from "../actions/actionTypes";
import { updateMaterials } from "./reducersHelpers/appearanceControlsHelpers";

const initialState = {
  selectedMaterial: null,
  materials: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_MATERIAL:
      return {
        ...state,
        selectedMaterial: action.material
      };
    case actionTypes.UPDATE_MATERIALS:
      return {
        ...state,
        materials: updateMaterials(
          { ...state.materials },
          action.partName,
          action.material
        )
      };
    case actionTypes.UPDATE_ENTIRE_MATERIALS:
      return {
        ...state,
        materials: { ...action.materials }
      };
    default:
      return state;
  }
};

export default reducer;
