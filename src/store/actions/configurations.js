import * as actionTypes from "./actionTypes";
import backendAxios from "../../axiosInstances/backendAxios";

export const getConfigurations = projectId => dispatch => {
  // dispatch(getProjectsStart());
  backendAxios
    .get("/api/configurations", {
      params: {
        projectId
      }
    })
    .then(response => {
      // dispatch(populateProjects(response.data.projects.reverse()));
      // const projectId = Number(sessionStorage.getItem("currentProjectId"));

      console.log(response);
      // dispatch(setCurrentProject(projectId));
      // dispatch(getProjectsEnd());
    })
    .catch(error => {
      console.log(error);
    });
};
