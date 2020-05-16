import * as actionTypes from "./actionTypes";

export const setSelectedMaterial = material => ({
  type: actionTypes.SET_SELECTED_MATERIAL,
  material
});

export const updateMaterials = (partName, material) => ({
  type: actionTypes.UPDATE_MATERIALS,
  partName,
  material
});

export const updateEntireMaterials = materials => ({
  type: actionTypes.UPDATE_ENTIRE_MATERIALS,
  materials
});
