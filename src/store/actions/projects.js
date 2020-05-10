import * as actionTypes from "./actionTypes";

export const updateProjectDetails = (id, name, description) => ({
  type: actionTypes.TOGGLE_BACKGROUND,
  id,
  name,
  description
});
