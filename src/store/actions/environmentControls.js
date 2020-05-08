import * as actionTypes from "./actionTypes";

export const setBackgroundEnvironment = () => ({
  type: actionTypes.SET_BACKGROUND_ENVIRONMENT
});

export const setBackgroundColor = color => ({
  type: actionTypes.SET_BACKGROUND_COLOR,
  color
});
