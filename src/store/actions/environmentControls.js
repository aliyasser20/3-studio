import * as actionTypes from "./actionTypes";

export const setBackgroundSolid = () => ({
  type: actionTypes.SET_BACKGROUND_SOLID
});

export const setBackgroundEnvironment = () => ({
  type: actionTypes.SET_BACKGROUND_ENVIRONMENT
});

export const toggleMapEnvironment = () => ({
  type: actionTypes.TOGGLE_MAP_ENVIRONMENT
});

export const setBackgroundColor = color => ({
  type: actionTypes.SET_BACKGROUND_COLOR,
  color
});

export const setEnvironmentOption = option => ({
  type: actionTypes.SET_ENVIRONMENT_OPTION,
  option
});

export const resetEnvironmentControls = () => ({
  type: actionTypes.RESET_ENVIRONMENT_CONTROLS
});

export const bulkSetEnvironmentControls = config => ({
  type: actionTypes.BULK_SET_ENVIRONMENT_CONTROLS,
  config
});
