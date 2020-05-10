import * as actionTypes from "./actionTypes";

export const updateProjectDetails = (id, name, description) => ({
  type: actionTypes.UPDATE_PROJECT_DETAILS,
  id,
  name,
  description
});

export const deleteProject = id => ({
  type: actionTypes.UPDATE_PROJECT_DETAILS,
  id
});
