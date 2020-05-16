import * as actionTypes from "./actionTypes";
import backendAxios from "../../axiosInstances/backendAxios";

import * as environmentControls from "./environmentControls";
import * as lightControls from "./lightControls";

export const setConfiguration = config => dispatch => {
  dispatch(environmentControls.bulkSetEnvironmentControls(config));
  dispatch(lightControls.bulkSetLightControls(config));
};

export const setCurrentConfigurationId = id => ({
  type: actionTypes.SET_CURRENT_CONFIGURATION_ID,
  id
});

export const setCurrentConfigurationName = name => ({
  type: actionTypes.SET_CURRENT_CONFIGURATION_NAME,
  name
});

export const setConfigurationSaved = () => ({
  type: actionTypes.SET_CONFIGURATION_SAVED
});

export const setAllConfigurations = configs => ({
  type: actionTypes.SET_ALL_CONFIGURATIONS,
  configs
});

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
      dispatch(setCurrentConfigurationId(response.data[0].id));
      dispatch(setCurrentConfigurationName(response.data[0].name));
      dispatch(setAllConfigurations(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};
