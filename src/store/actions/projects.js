import * as actionTypes from "./actionTypes";
import backendAxios from "../../axiosInstances/backendAxios";

export const updateProjectDetails = (id, name, description) => ({
  type: actionTypes.UPDATE_PROJECT_DETAILS,
  id,
  name,
  description
});

export const deleteProject = id => ({
  type: actionTypes.DELETE_PROJECT,
  id
});

export const newProject = data => ({
  type: actionTypes.NEW_PROJECT,
  data
});

export const populateProjects = projects => ({
  type: actionTypes.POPULATE_PROJECTS,
  projects
});

export const getProjects = projectId => dispatch => {
  backendAxios
    .get("/api/projects", {
      params: {
        projectId
      }
    })
    .then(response => {
      dispatch(populateProjects(response.data.projects));
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
