import backendAxios from "../axiosInstances/backendAxios";

// Function that makes request to back end to get screenshots for passed project id and returns promise
const getScreenshots = projectId =>
  backendAxios
    .get("/api/screenshots", {
      params: {
        projectId
      }
    })
    .then(resp => resp.data.screenshots);

export default getScreenshots;
