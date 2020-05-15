import * as actionTypes from "./actionTypes";
import backendAxios from "../../axiosInstances/backendAxios";

import * as environmentControls from "./environmentControls";
import * as lightControls from "./lightControls";

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

export const setConfiguration = config => dispatch => {
  dispatch(environmentControls.bulkSetEnvironmentControls(config));
  dispatch(lightControls.bulkSetLightControls(config));
};
