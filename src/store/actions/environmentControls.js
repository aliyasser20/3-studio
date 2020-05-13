import * as actionTypes from "./actionTypes";

export const toggleBackground = () => ({
  type: actionTypes.TOGGLE_BACKGROUND
});

export const setBackgroundColor = color => ({
  type: actionTypes.SET_BACKGROUND_COLOR,
  color
});
