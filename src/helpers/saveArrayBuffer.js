import save from "./save";

const saveArrayBuffer = (buffer, filename) => {
  save(new Blob([buffer], { type: "application/octet-stream" }), filename);
};

export default saveArrayBuffer;
