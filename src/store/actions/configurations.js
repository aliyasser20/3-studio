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

export const addConfiguration = config => ({
  type: actionTypes.ADD_CONFIGURATION,
  config
});

export const deleteConfiguration = configId => ({
  type: actionTypes.DELETE_CONFIGURATION,
  configId
});

export const updateConfiguration = (configId, configData) => ({
  type: actionTypes.UPDATE_CONFIGURATION,
  configId,
  configData
});

export const getConfigurations = projectId => dispatch => {
  backendAxios
    .get("/api/configurations", {
      params: {
        projectId
      }
    })
    .then(response => {
      dispatch(setConfiguration(JSON.parse(response.data[0].config_data)));
      dispatch(
        setCurrentConfigurationId(
          response.data.sort((a, b) => {
            if (a.id > b.id) {
              return 1;
            }
            if (b.id > a.id) {
              return -1;
            }
            return 0;
          })[0].id
        )
      );
      dispatch(setCurrentConfigurationName(response.data[0].name));
      dispatch(
        setAllConfigurations(
          response.data.sort((a, b) => {
            if (a.id > b.id) {
              return 1;
            }
            if (b.id > a.id) {
              return -1;
            }
            return 0;
          })
        )
      );
    })
    .catch(error => {
      console.log(error);
    });
};
