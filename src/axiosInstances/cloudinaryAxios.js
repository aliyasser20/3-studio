import axios from "axios";

const cloudinaryAxios = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/cloud3studio"
});

export default cloudinaryAxios;
