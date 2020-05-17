import * as actionTypes from "./actionTypes";

export const setPartModel = model => ({
  type: actionTypes.SET_PART_MODEL,
  model
});

export const setPartFov = fov => ({
  type: actionTypes.SET_PART_FOV,
  fov
});

export const setPartFar = far => ({
  type: actionTypes.SET_PART_FAR,
  far
});

export const setPartNear = near => ({
  type: actionTypes.SET_PART_NEAR,
  near
});

export const setPartSizeBounding = sizeBounding => ({
  type: actionTypes.SET_PART_SIZE_BOUNDING,
  sizeBounding
});

export const resetPartState = () => ({
  type: actionTypes.RESET_PART_STATE
});
