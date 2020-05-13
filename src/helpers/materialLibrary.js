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
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400958/appearances/metals/Alien/color_wplgtz.png",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400956/appearances/metals/Alien/roughness-metalness_qkpcax.png",
    ambientOcclusionMap: true,
    ambientOcclusionMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400955/appearances/metals/Alien/ao_gtjygo.png",
    metalness: 1,
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400967/appearances/metals/Alien/normal_uxydlu.png"
  });

  materials.scuffedAluminumPBR = createMaterial({
    name: "scuffed-aluminum-pbr",
    group: "metals",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400957/appearances/metals/Scuffed-Aluminum-PBR/color_lbgnuj.png",
    color: "#222222",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400967/appearances/metals/Scuffed-Aluminum-PBR/roughness-metalness_w9oi2h.png",
    metalness: 1,
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400958/appearances/metals/Scuffed-Aluminum-PBR/normal_rbp9y9.png"
  });

  materials.metalGrid = createMaterial({
    name: "metal-grid",
    group: "metals",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400972/appearances/metals/metal-grid/color_cg9us4.png",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400970/appearances/metals/metal-grid/roughness-metalness_jywzgo.png",
    metalness: 1,
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400972/appearances/metals/metal-grid/normal_buvgpn.png",
    ambientOcclusionMap: true,
    ambientOcclusionMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400966/appearances/metals/metal-grid/ao_ivhsda.png"
  });

  materials.rust = createMaterial({
    name: "rust",
    group: "metals",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400959/appearances/metals/Rust/color_jm6qg5.jpg",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589403097/appearances/metals/Rust/roughness-metalness_kvdoqi.jpg",
    metalness: 1,
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400966/appearances/metals/Rust/normal_fjxo9i.jpg"
  });

  materials.brushedMetal = createMaterial({
    name: "brushed-metal",
    group: "metals",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400962/appearances/metals/brushed-metal/color_ayvvpl.png",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400966/appearances/metals/brushed-metal/roughness-metalness_ge2vpf.png",
    metalness: 1,
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400966/appearances/metals/brushed-metal/normal_tlobwx.png",
    ambientOcclusionMap: true,
    ambientOcclusionMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589400959/appearances/metals/brushed-metal/ao_wgtuqd.png"
  });

  // ?

  // ? Ceramics
  materials.marbleOne = createMaterial({
    name: "marble-one",
    group: "ceramics",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401296/appearances/ceramics/marble-one/color_kojoxo.jpg",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401291/appearances/ceramics/marble-one/normal_hq5kbl.jpg",
    clearcoat: 0.1,
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401298/appearances/ceramics/marble-one/roughness-metalness_f4rao1.jpg"
  });

  materials.fleshyGranite = createMaterial({
    name: "fleshy-granite",
    group: "ceramics",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401305/appearances/ceramics/fleshy-granite/color_kxcqva.png",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401294/appearances/ceramics/fleshy-granite/normal_c2z4da.png",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401298/appearances/ceramics/fleshy-granite/roughness-metalness_ruuhyd.png",
    ambientOcclusionMap: true,
    ambientOcclusionMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401292/appearances/ceramics/fleshy-granite/ao_ubxcj0.png"
  });

  materials.polishedGranite = createMaterial({
    name: "polished-granite",
    group: "ceramics",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401308/appearances/ceramics/polished-granite/color_ugrucm.png",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401299/appearances/ceramics/polished-granite/normal_vm3myb.png",
    clearcoat: 0.1
  });

  materials.marbleTwo = createMaterial({
    name: "marble-two",
    group: "ceramics",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401307/appearances/ceramics/marble-two/color_h14ieg.jpg",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401299/appearances/ceramics/marble-two/normal_atdoik.jpg",
    clearcoat: 0.2,
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401302/appearances/ceramics/marble-two/roughness-metalness_p3oeim.jpg"
  });

  materials.marbleThree = createMaterial({
    name: "marble-three",
    group: "ceramics",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401298/appearances/ceramics/marble-three/color_jsaudp.jpg",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401297/appearances/ceramics/marble-three/normal_iwrbjw.jpg",
    clearcoat: 0.2,
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401298/appearances/ceramics/marble-three/roughness-metalness_jhtwlt.jpg"
  });
  // ?

  // ? Woods
  materials.woodOne = createMaterial({
    name: "wood-one",
    group: "woods",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401356/appearances/woods/wood-one/color_ln7tbv.jpg",
    bumpMap: true,
    bumpMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401357/appearances/woods/wood-one/normal_ca9qka.jpg",
    bumpScale: 200,
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401354/appearances/woods/wood-one/roughness-metalness_lpzitz.jpg",
    displacementMap: true,
    displacementMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401351/appearances/woods/wood-one/displacement_qvzm6k.jpg",
    displacementScale: 200
  });

  materials.woodFlooringOne = createMaterial({
    name: "wood-flooring-one",
    group: "woods",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401355/appearances/woods/wood-flooring-one/color_dybvyw.jpg",
    bumpMap: true,
    bumpMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401350/appearances/woods/wood-flooring-one/normal_lxzs0x.jpg",
    bumpScale: 50,
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401350/appearances/woods/wood-flooring-one/roughness-metalness_zunnxy.jpg",
    displacementMap: true,
    displacementMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401346/appearances/woods/wood-flooring-one/displacement_afnlwj.jpg",
    displacementScale: 200
  });

  materials.woodFlooringTwo = createMaterial({
    name: "wood-flooring-two",
    group: "woods",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401356/appearances/woods/wood-flooring-two/color_wnurig.jpg",
    bumpMap: true,
    bumpMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401351/appearances/woods/wood-flooring-two/normal_ff2oec.jpg",
    bumpScale: 100,
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401355/appearances/woods/wood-flooring-two/roughness-metalness_jqqxmw.jpg",
    ambientOcclusionMap: true,
    ambientOcclusionMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401348/appearances/woods/wood-flooring-two/ao_e2u4xj.jpg",
    displacementMap: true,
    displacementMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401350/appearances/woods/wood-flooring-two/displacement_fmcylk.jpg",
    displacementScale: 1
  });
  // ?

  // ? Stones
  materials.bricks = createMaterial({
    name: "bricks",
    group: "stones",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401341/appearances/stones/Bricks/color_tjdqof.jpg",
    color: "#212121",
    ambientOcclusionMap: true,
    ambientOcclusionMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401338/appearances/stones/Bricks/ao_vcvpdi.jpg",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401343/appearances/stones/Bricks/normal_lacyy1.jpg",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401340/appearances/stones/Bricks/roughness-metalness_xafj0w.jpg",
    displacementMap: true,
    displacementMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589401337/appearances/stones/Bricks/displacement_orxwde.jpg",
    displacementScale: 0.2
  });
  // ?

  // ? Tiles
  materials.tilesOne = createMaterial({
    name: "tiles-one",
    group: "tiles",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406263/appearances/tiles/tiles05/color_d5utzo.jpg",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406267/appearances/tiles/tiles05/normal_espuvy.jpg",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406245/appearances/tiles/tiles05/roughness-metalness_igqzdd.jpg",
    displacementMap: true,
    displacementMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406246/appearances/tiles/tiles05/displacement_fnlfre.jpg"
  });

  materials.tilesTwo = createMaterial({
    name: "tiles-two",
    group: "tiles",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406540/appearances/tiles/tilesOnyxOpaloBlack/color_kt6ehw.jpg",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406544/appearances/tiles/tilesOnyxOpaloBlack/normal_pa49g9.jpg",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406537/appearances/tiles/tilesOnyxOpaloBlack/roughness-metalness_nn3uue.jpg",
    displacementMap: true,
    displacementMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406534/appearances/tiles/tilesOnyxOpaloBlack/displacement_r3awbt.jpg"
  });

  materials.tilesThree = createMaterial({
    name: "tiles-three",
    group: "tiles",
    colorMap: true,
    colorMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406834/appearances/tiles/tilesRectangularMirrorGray/color_b8arfd.jpg",
    normalMap: true,
    normalMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406835/appearances/tiles/tilesRectangularMirrorGray/normal_tv6frd.jpg",
    roughnessMetalnessMap: true,
    roughnessMetalnessMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589406835/appearances/tiles/tilesRectangularMirrorGray/roughness-metalness_fwxyxx.jpg",
    displacementMap: true,
    displacementMapPath:
      "https://res.cloudinary.com/aajfinal/image/upload/v1589407074/appearances/tiles/tilesRectangularMirrorGray/displacement_qe1uj6.jpg"
  });

  return materials;
};

export default materialLibrary;
