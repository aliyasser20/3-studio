export const updateMaterials = (materials, partName, material) => {
  const newMaterials = { ...materials };
  const cloneMaterial = { ...material };

  newMaterials[partName] = cloneMaterial;

  return newMaterials;
};
