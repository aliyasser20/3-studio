import * as actionTypes from "./actionTypes";

export const toggleLock = () => ({
  type: actionTypes.TOGGLE_LOCK
});

export const toggleBoundingBox = () => ({
  type: actionTypes.TOGGLE_BOUNDING_BOX
});

export const toggleAxis = () => ({
  type: actionTypes.TOGGLE_AXIS
});

export const toggleAutorotate = () => ({
  type: actionTypes.TOGGLE_AUTOROTATE
});
