import * as actionTypes from "./actionTypes";

export const setMediaModle = (mediaModel) => ({
  action: actionTypes.SET_MEDIA_MODEL,
  mediaModel,
});

export const setMediaFov = (mediaFov) => ({
  type: actionTypes.SET_MEDIA_FOV,
  mediaFov,
});

export const setMediaFar = (mediaFar) => ({
  type: actionTypes.SET_MEDIA_FAR,
  mediaFar,
});

export const setMediaNear = (mediaNear) => ({
  type: actionTypes.SET_MEDIA_NEAR,
  mediaNear,
});

export const setMediaSizeBounding = (mediaSizeBounding) => ({
  type: actionTypes.SET_MEDIA_SIZE_BOUNDING,
  mediaSizeBounding,
});

export const setMediaBox = (mediaBox) => ({
  type: actionTypes.SET_MEDIA_BOX,
  mediaBox,
});
