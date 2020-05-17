import * as actionTypes from "./actionTypes";

// Backgrounds
export const toggleMapEnv = () => ({
  type: actionTypes.TOGGLE_MAP_ENV,
});

export const toggleMediaEnvB = () => ({
  type: actionTypes.TOGGLE_MEDIA_ENV_B,
});

export const toggleMediaSolidB = () => ({
  type: actionTypes.TOGGLE_MEDIA_SOLID_B,
});

export const toggleMediaNoB = () => ({
  type: actionTypes.TOGGLE_MEDIA_NO_B,
});

export const toggleDefaultLight = () => ({
  type: actionTypes.TOGGLE_DEFAULT_LIGHT,
});
//

// Camera
export const toggleMediaLock = () => ({
  type: actionTypes.TOGGLE_MEDIA_LOCK,
});

export const toggleMediaBoundingBox = () => ({
  type: actionTypes.TOGGLE_MEDIA_BOUNDING_BOX,
});

export const toggleMediaAxis = () => ({
  type: actionTypes.TOGGLE_MEDIA_AXIS,
});

export const toggleMediaAutoRotate = () => ({
  type: actionTypes.TOGGLE_MEDIA_AUTOROTATE,
});

// Objects

// Spheres
export const setMediaSphere = (sphere) => ({
  type: actionTypes.SET_MEDIA_SPHERE,
  sphere,
});

export const setMediaLSphere = (lSphere) => ({
  type: actionTypes.SET_MEDIA_L_SPHERE,
  lSphere,
});

// Lights
export const setMediaKeyLight = (keyLight) => ({
  type: actionTypes.SET_MEDIA_KEY_LIGHT,
  keyLight,
});

export const setMediaDLight = (dLight) => ({
  type: actionTypes.SET_MEDIA_D_LIGHT,
  dLight,
});

export const setMediaBLight = (bLight) => ({
  type: actionTypes.SET_MEDIA_B_LIGHT,
  bLight,
});

// Plain objects
export const setMediaPWall = (pWall) => ({
  type: actionTypes.SET_MEDIA_P_WALL,
  pWall,
});

export const setMediaPGround = (pGround) => ({
  type: actionTypes.SET_MEDIA_P_GROUND,
  pGround,
});

// Box
export const setMediaMBox = (mBox) => ({
  type: actionTypes.SET_MEDIA_M_BOX,
  mBox,
});

export const setMediaWBox = (wBox) => ({
  type: actionTypes.SET_MEDIA_W_BOX,
  wBox,
});

//

export const resetMediaControls = () => ({
  type: actionTypes.RESET_MEDIA_CONTROLS,
});
