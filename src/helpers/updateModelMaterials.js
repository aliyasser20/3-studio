import materialLibrary from "./materialLibrary";

export const updateModelMaterials = (model, materials, setModel) => {
  model.traverse(o => {
    // If component is a part
    if (o.isMesh) {
      // eslint-disable-next-line
      for (const part in materials) {
        if (o.name === part) {
          o.material = materialLibrary([materials[part].name])[
            materials[part].name
          ];
        }
      }
    }
  });
};
