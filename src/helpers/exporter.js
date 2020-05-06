import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import lo from "lodash";

import { sceneExport } from "../App/Bridge/Bridge";

const link = document.createElement("a");

function save(blob, filename) {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

function saveString(text, filename) {
  save(new Blob([text], { type: "text/plain" }), filename);
}

function saveArrayBuffer(buffer, filename) {
  save(new Blob([buffer], { type: "application/octet-stream" }), filename);
}

const options = {
  binary: true
};

const exporter = () => {
  const scene = lo.cloneDeep(sceneExport);

  //  Remove environment and lights from export scene
  scene.environment = null;
  scene.children = [scene.children[0]];

  const gltfExporter = new GLTFExporter();

  // Parse the input and generate the glTF output
  gltfExporter.parse(
    scene,
    function(result) {
      if (result instanceof ArrayBuffer) {
        saveArrayBuffer(result, "scene.glb");
      } else {
        const output = JSON.stringify(result, null, 2);
        saveString(output, "scene.gltf");
      }
    },
    options
  );
};

export default exporter;
