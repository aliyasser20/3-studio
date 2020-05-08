import save from "./save";

// Function that saves .gltf
const saveString = (text, filename) => {
  save(new Blob([text], { type: "text/plain" }), filename);
};

export default saveString;
