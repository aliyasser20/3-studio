import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import lo from "lodash";

import saveArrayBuffer from "./saveArrayBuffer";
import saveString from "./saveString";
import { sceneExport } from "../App/StudioPage/Modes/Edit/Bridge/Bridge";

// Function that exports model form current scene
const fileExporter = () => {
  // Create copy to avoid mutation
  const scene = lo.cloneDeep(sceneExport);

  //  Remove environment and lights from export scene
  scene.environment = null;

  const gltfExporter = new GLTFExporter();

  // Save as glb
  const options = {
    binary: true
  };

  // Parse the input and generate the glTF output
  gltfExporter.parse(
    scene,
    function(result) {
      // If set glb is selected
      if (result instanceof ArrayBuffer) {
        saveArrayBuffer(result, "scene.glb");
        // If gltf is selected
      } else {
        const output = JSON.stringify(result, null, 2);
        saveString(output, "scene.gltf");
      }
    },
    options
  );
};

export default fileExporter;
