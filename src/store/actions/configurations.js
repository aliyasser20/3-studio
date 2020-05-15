import * as actionTypes from "./actionTypes";
import backendAxios from "../../axiosInstances/backendAxios";

import * as environmentControls from "./environmentControls";
import * as lightControls from "./lightControls";

export const setConfiguration = config => dispatch => {
  dispatch(environmentControls.bulkSetEnvironmentControls(config));
  dispatch(lightControls.bulkSetLightControls(config));
};

export const getConfigurations = projectId => dispatch => {
  backendAxios
    .get("/api/configurations", {
      params: {
        projectId
      }
    })
    .then(response => {
      console.log(response.data);
      dispatch(setConfiguration(JSON.parse(response.data[0].config_data)));
    })
    .catch(error => {
      console.log(error);
    });
};
