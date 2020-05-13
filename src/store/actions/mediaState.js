import * as actionTypes from "./actionTypes";

export const setMediaState = (mediaState) => ({
  action: actionTypes.SET_MEDIA_STATE,
  mediaState,
});
