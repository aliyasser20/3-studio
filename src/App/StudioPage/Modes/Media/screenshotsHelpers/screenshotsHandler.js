import cloudinaryAxios from "../../../../../axiosInstances/cloudinaryAxios";
import backendAxios from "../../../../../axiosInstances/backendAxios";

const formatName = (name) => {
  return name.split(" ").join("-");
};

export const saveToCloud = (file, project, counter, preset) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "public_id",
    `${project.id}/${formatName(project.name)}-${counter}`
  );
  formData.append("upload_preset", preset.sUpreset); // Replace the preset name with your own
  formData.append("api_key", preset.aKey); // Replace API key with your own Cloudinary key
  formData.append("timestamp", Date.now() / 1000 || 0);
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
  preview.style = "display: unset";
  preview.src = dataUrl;
  return dataUrl;
};

export const screeshotDownload = (file, project, counter) => {
  const a = document.createElement("a");
  document.body.append(a);
  a.style = "display: none";
  a.href = file;
  a.download = `${formatName(project.name)}-${counter}.png`;
  a.click();
};

export const handleCounter = (userId, counter, projectId) => {
  return backendAxios
    .put("/api/projects/counter", { userId, counter, projectId })
    .then((res) => res.data);
};

export const createVideoPreview = (blob) => {
  const preview = document.querySelector("#preview-video");
  const vid = document.createElement("video");
  vid.style.width = "100%";
  vid.style.height = "70%";
  blob.name = "preview";
  vid.src = URL.createObjectURL(blob);
  vid.controls = true;
  preview.appendChild(vid);
}