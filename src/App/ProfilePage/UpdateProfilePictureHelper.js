import cloudinaryAxios from "../../axiosInstances/cloudinaryAxios";
import backendAxios from "../../axiosInstances/backendAxios";

const uploadUrl = "/image/upload/";

export const savePictureToCloud = files => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("tags", "profile-picture");
  formData.append("upload_preset", "profilePictureUpdate");
  formData.append("api_key", process.env.REACT_APP_API_KEY);
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return cloudinaryAxios
    .post(uploadUrl, formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    })
    .then(res => res)
    .catch(err => console.log(err, "error in helper file"));
};

export const updateProfilePicture = profilePictureData =>
  backendAxios
    .put("/api/users/picture", profilePictureData)
    .then(data => data.data);
