import cloudinaryAxios from "../../../axiosInstances/cloudinaryAxios";
import backendAxios from "../../../axiosInstances/backendAxios";

const uploadUrl = "/raw/upload/";

export const saveModelToCloude = files => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("tags", "rocket");
  formData.append("upload_preset", "modelUpload"); // Replace the preset name with your own
  formData.append("api_key", "463438241363482"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return cloudinaryAxios
    .post(uploadUrl, formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    })
    .then(res => res.data.secure_url);
};

<<<<<<< HEAD
export const createNewProject = (projectData) => {
  return axios.post("/api/projects", projectData).then((data) => {
=======
export const createNewProject = projectData =>
  backendAxios.post("/api/projects", projectData).then(data => {
>>>>>>> 1827b2b5d5b8fee4c19af098bebbaac147409e7f
    console.log(data.data.rows[0]);
  });
