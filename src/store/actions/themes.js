import * as actionTypes from "./actionTypes";
import backendAxios from "../../axiosInstances/backendAxios";

export const setTheme = theme => ({
  type: actionTypes.UPDATE_PROJECT_DETAILS,
  theme
});

export const getTheme = userId => dispatch => {
  backendAxios
    .get("/api/themes", {
      params: {
        userId
      }
    })
    .then(response => {
      dispatch(setTheme(response.data.theme));
    })
    .catch(error => {
      console.log(error);
    });
};
