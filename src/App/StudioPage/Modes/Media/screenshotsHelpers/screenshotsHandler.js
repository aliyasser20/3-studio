import cloudinaryAxios from "../../../../../axiosInstances/cloudinaryAxios";
import backendAxios from "../../../../../axiosInstances/backendAxios";

export const saveToCloud = (file, project, counter) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("public_id", `${project.id}/${project.name}_${counter}`);
  formData.append("upload_preset", "screenshotUpload"); // Replace the preset name with your own
  formData.append("api_key", "463438241363482"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return cloudinaryAxios
    .post("/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then((res) => res);
};

export const createImage = () => {
  const canvas = document.querySelector("canvas");
  const dataUrl = canvas.toDataURL("image/png", 1.0);
  const preview = document.querySelector("#preview-img");
  preview.src = dataUrl;

  return dataUrl;
};

export const screeshotDownload = (file, project, counter) => {
  const a = document.createElement("a");
  document.body.append(a);
  a.style = "display: none";
  a.href = file;
  a.download = `${project.name}_${counter}`;
  a.click();
};

export const handleCounter = () => {
  return backendAxios
    .put("/api/projects", { action: "ADD" })
    .then((res) => res.data);
};
