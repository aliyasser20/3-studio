import save from "./save";

// Function that saves .glb
const saveArrayBuffer = (buffer, filename) => {
  save(new Blob([buffer], { type: "application/octet-stream" }), filename);
};

export default saveArrayBuffer;
