import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import lo from "lodash";

import saveArrayBuffer from "./saveArrayBuffer";
import saveString from "./saveString";
import { sceneExport } from "../App/Studio/Modes/Edit/Bridge/Bridge";

const fileExporter = () => {
  const scene = lo.cloneDeep(sceneExport);

  //  Remove environment and lights from export scene
  scene.environment = null;
  scene.children = [scene.children[0]];

  const gltfExporter = new GLTFExporter();

  const options = {
    binary: true
  };

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

export default fileExporter;
