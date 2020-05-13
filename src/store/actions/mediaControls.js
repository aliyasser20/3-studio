import * as actionTypes from "./actionTypes";

export const toggleMediaLock = () => ({
  type: actionTypes.TOGGLE_MEDIA_LOCK,
});

export const toggleBoundingBox = () => ({
  type: actionTypes.TOGGLE_MEDIA_BOUNDING_BOX,
});

export const toggleMediaAxis = () => ({
  type: actionTypes.TOGLLE_MEDIA_AXIS,
});

export const toggleMediaAutoRotate = () => ({
  type: actionTypes.TOGGLE_MEDIA_AUTOROTATE,
});

export const setMediaSphere = (sphere) => ({
  type: actionTypes.SET_MEDIA_SPHERE,
  sphere,
});

export const setMediaKeyLight = (keyLight) => ({
  type: actionTypes.SET_MEDIA_KEY_LIGHT,
  keyLight,
});

export const setMediaBackWall = (backWall) => ({
  type: actionTypes.SET_MEDIA_BACK_WALL,
  backWall,
});

export const setMediaGroundPole = (groundPole) => ({
  type: actionTypes.SET_MEDIA_GROUND_POLE,
  groundPole,
});
