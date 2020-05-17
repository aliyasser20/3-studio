import * as actionTypes from "./actionTypes";

export const setModel = model => ({
  type: actionTypes.SET_MODEL,
  model
});

export const setFov = fov => ({
  type: actionTypes.SET_FOV,
  fov
});

export const setFar = far => ({
  type: actionTypes.SET_FAR,
  far
});

export const setNear = near => ({
  type: actionTypes.SET_NEAR,
  near
});

export const setSizeBounding = sizeBounding => ({
  type: actionTypes.SET_SIZE_BOUNDING,
  sizeBounding
});

export const setBox = box => ({
  type: actionTypes.SET_BOX,
  box
});

export const resetEditState = () => ({
  type: actionTypes.RESET_EDIT_STATE
});

export const setSelectedPart = selectedPart => ({
  type: actionTypes.SET_SELECTED_PART,
  selectedPart
});
