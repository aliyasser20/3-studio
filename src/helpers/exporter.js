import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

import { sceneExport } from "../App/Enivronment/Environment";

const link = document.createElement("a");
link.style.display = "none";
document.body.appendChild(link);

function save(blob, filename) {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();

  // URL.revokeObjectURL( url ); breaks Firefox...
}

function saveString(text, filename) {
  save(new Blob([text], { type: "text/plain" }), filename);
}

const exporter = () => {
  const scene = sceneExport;
  console.log(scene);
  const gltfExporter = new GLTFExporter();
  // Parse the input and generate the glTF output
  gltfExporter.parse(
    scene,
    function(result) {
      // if (result instanceof ArrayBuffer) {
      //   saveArrayBuffer(result, "scene.glb");
      // } else {
      const output = JSON.stringify(result, null, 2);
      console.log(output);
      saveString(output, "scene.gltf");
    }
    // },
    // options
  );
};

export default exporter;