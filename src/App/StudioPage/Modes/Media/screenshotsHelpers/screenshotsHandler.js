import cloudinaryAxios from "../../../../../axiosInstances/cloudinaryAxios";

export const saveToCloud = (file, projectId, counter) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("public_id", `${projectId}/screenshot_${counter}`);
  formData.append("upload_preset", "screenshotUpload"); // Replace the preset name with your own
  formData.append("api_key", "463438241363482"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return cloudinaryAxios
    .post("/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then((res) => console.log(res));
};


export const createImage = () => {
  const canvas = document.querySelector("canvas");
  const dataUrl = canvas.toDataURL("image/png", 1.0);
  const preview = document.querySelector("#preview-img");
  preview.src = dataUrl;

  return dataUrl;
}