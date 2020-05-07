import save from "./save";

const saveString = (text, filename) => {
  save(new Blob([text], { type: "text/plain" }), filename);
};

export default saveString;
