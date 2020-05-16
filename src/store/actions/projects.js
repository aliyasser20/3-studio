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

const getProjectsStart = () => ({
  type: actionTypes.SET_PROJECT_START
});

const getProjectsEnd = () => ({
  type: actionTypes.SET_PROJECT_END
});

export const getProjects = userId => dispatch => {
  dispatch(getProjectsStart());
  backendAxios
    .get("/api/projects", {
      params: {
        userId
      }
    })
    .then(response => {
      dispatch(populateProjects(response.data.projects.reverse()));
      const projectId = Number(sessionStorage.getItem("currentProjectId"));

      dispatch(setCurrentProject(projectId));
      dispatch(getProjectsEnd());
    })
    .catch(error => {
      console.log(error);
    });
};
