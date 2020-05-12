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

export const setCurrentProject = projectId => ({
  type: actionTypes.SET_CURRENT_PROJECT,
  projectId
});

export const populateProjects = projects => ({
  type: actionTypes.POPULATE_PROJECTS,
  projects
});

export const getProjects = userId => dispatch => {
  backendAxios
    .get("/api/projects", {
      params: {
        userId
      }
    })
    .then(response => {
      dispatch(populateProjects(response.data.projects));
      const projectId = Number(localStorage.getItem("currentProjectId"));

      dispatch(setCurrentProject(projectId));
    })
    .catch(error => {
      console.log(error);
    });
};
