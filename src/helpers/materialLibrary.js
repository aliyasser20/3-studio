import createMaterial from "./createMaterial";

// Function that returns library (object) of appearances
const materialLibrary = () => {
  const materials = {};

  // ? Default
  const DEFAULTCOLORS = {
    black: "#000000",
    white: "#ffffff",
    grey: "#808080"
  };

  // eslint-disable-next-line
    for (const color in DEFAULTCOLORS) {
    materials[`${color}Default`] = createMaterial({
      name: `${color}Default`,
      group: "defaults",
      color: DEFAULTCOLORS[color]
    });
  }
  // ?

  // ? Metals
  // Basic
  const BASICMETALS = {
    gold: "#DAA520",
    aluminum: "#C0C0C0",
    steel: "#43464B",
    copper: "#CB6D51",
    brass: "#b5a642",
    blue: "#2d5b7d",
    graphite: "#1e1d19",
    black: "#000000",
    green: "#008000",
    lightGreen: "#8bc34a",
    lightBlue: "#03a9f4",
    purple: "#673ab7",
    cherry: "#AE2321"
  };

  // eslint-disable-next-line
  for (const metal in BASICMETALS) {
    // Basic polished
    materials[`${metal}Polished`] = createMaterial({
      name: `${metal}-polished`,
      group: "metals",
      roughness: 0.01,
      metalness: 1,
      color: BASICMETALS[metal]
    });

    // Basic rough
    materials[`${metal}Rough`] = createMaterial({
      name: `${metal}-rough`,
      group: "metals",
      roughness: 0.2,
      metalness: 1,
      color: BASICMETALS[metal]
    });
  }

  materials.alien = createMaterial({
    name: "alien",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    ambientOcclusionMap: true,
    metalness: 1,
    normalMap: true
  });

  materials.scuffedAluminumPBR = createMaterial({
    name: "scuffed-aluminum-pbr",
    group: "metals",
    colorMap: true,
    color: "#222222",
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true
  });

  materials.metalGrid = createMaterial({
    name: "metal-grid",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true,
    ambientOcclusionMap: true
  });

  materials.rust = createMaterial({
    name: "rust",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true
  });

  materials.brushedMetal = createMaterial({
    name: "brushed-metal",
    group: "metals",
    colorMap: true,
    roughnessMetalnessMap: true,
    metalness: 1,
    normalMap: true,
    ambientOcclusionMap: true
  });

  // ?

  // ? Ceramics
  materials.marbleOne = createMaterial({
    name: "marble-one",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.1,
    roughnessMetalnessMap: true
  });

  materials.fleshyGranite = createMaterial({
    name: "fleshy-granite",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    roughnessMetalnessMap: true,
    ambientOcclusionMap: true
  });

  materials.polishedGranite = createMaterial({
    name: "polished-granite",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.1
  });

  materials.marbleTwo = createMaterial({
    name: "marble-two",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.2,
    roughnessMetalnessMap: true
  });

  materials.marbleThree = createMaterial({
    name: "marble-three",
    group: "ceramics",
    colorMap: true,
    normalMap: true,
    clearcoat: 0.2,
    roughnessMetalnessMap: true
  });
  // ?

  // ? Woods
  materials.woodOne = createMaterial({
    name: "wood-one",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 200,
    roughnessMetalnessMap: true,
    displacementMap: true,
    displacementScale: 200
  });

  materials.woodFlooringOne = createMaterial({
    name: "wood-flooring-one",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 50,
    roughnessMetalnessMap: true,
    displacementMap: true,
    displacementScale: 200
  });

  materials.woodFlooringTwo = createMaterial({
    name: "wood-flooring-two",
    group: "woods",
    colorMap: true,
    bumpMap: true,
    bumpScale: 100,
    roughnessMetalnessMap: true,
    ambientOcclusionMap: true,
    displacementMap: true,
    displacementScale: 1
  });
  // ?

  // ? Stones
  materials.bricks = createMaterial({
    name: "bricks",
    group: "stones",
    colorMap: true,
    color: "#212121",
    ambientOcclusionMap: true,
    normalMap: true,
    roughnessMetalnessMap: true,
    displacementMap: true,
    displacementScale: 0.2
  });
  // ?

  return materials;
};

export default materialLibrary;
