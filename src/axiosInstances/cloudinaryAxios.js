import axios from "axios";

const cloudinaryAxios = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/aajfinal"
});

export default cloudinaryAxios;
