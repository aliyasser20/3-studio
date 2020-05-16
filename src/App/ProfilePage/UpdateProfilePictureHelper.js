import cloudinaryAxios from "../../axiosInstances/cloudinaryAxios";
import backendAxios from "../../axiosInstances/backendAxios";

const uploadUrl = "/raw/upload/";

export const savePictureToCloud = files => {
  const formData = new FormData();
  formData.append("file", files[0]);
  console.log(formData, "inside save picture to cloud");
  formData.append("upload_preset", "profilePictureUpdate");
  formData.append("api_key", "463438241363482");
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return cloudinaryAxios
    .post(uploadUrl, formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err, "error in helper file"));
};

export const updateProfilePicture = profilePictureData =>
  backendAxios
    .post("/api/users", profilePictureData)
    .then(data => console.log(data));
