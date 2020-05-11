import axios from "axios";

const backendAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_UR
    ? process.env.REACT_APP_API_BASE_UR
    : "http://localhost:8001"
});

export default backendAxios;
