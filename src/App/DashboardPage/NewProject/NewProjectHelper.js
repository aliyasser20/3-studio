import axios from "axios";
const uploadUrl = "https://api.cloudinary.com/v1_1/aajfinal/raw/upload/";

export const saveModelToCloude = (files) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("tags", "rocket");
  formData.append("upload_preset", "modelUpload"); // Replace the preset name with your own
  formData.append("api_key", "463438241363482"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return axios
    .post(uploadUrl, formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then((res) => {
      return res.data.secure_url;
    });
};

export const createNewProject = (projectData) => {
  return axios.post("/api/projects", projectData).then((data) => {
    console.log(data.data.rows[0]);
  });
};
