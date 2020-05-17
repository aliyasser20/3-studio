import createMaterial from "./createMaterial";

// Function that returns library (object) of appearances
const materialLibrary = material => {
  const materials = {};

  // ? Default no textures
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

  // ? Plastics no textures
  // Basic
  const BASICPLASTICS = {
    grey: "#1e1d19",
    green: "#008000",
    lightBlue: "#03a9f4",
    lightPurple: "#673ab7",
    rose: "#AE2321",
    blue: "#0000ff",
    red: "#ff0000",
    purple: "#350982",
    hotPink: "#800080",
    yellow: "#6e3d01",
    orange: "#511500"
  };

  // eslint-disable-next-line
  for (const plastic in BASICPLASTICS) {
    // Basic polished
    materials[`${plastic}ShinyPlastic`] = createMaterial({
      name: `${plastic}-shiny-plastic`,
      group: "plastics",
      roughness: 0.01,
      color: BASICPLASTICS[plastic]
    });

    // Basic rough
    materials[`${plastic}RoughPlastic`] = createMaterial({
      name: `${plastic}-rough-plastic`,
      group: "plastics",
      roughness: 0.3,
      color: BASICPLASTICS[plastic]
    });
  }
  // ?

  // ? Metals no textures
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
  // ?

  // ? Materials with textures
  switch (material) {
    case "alien":
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
      break;
    case "scuffedAluminumPBR":
      materials.scuffedAluminumPBR = createMaterial({
        name: "scuffed-aluminum-pbr",
        group: "metals",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589400957/appearances/metals/Scuffed-Aluminum-PBR/color_lbgnuj.png",
        color: "#CeCeCe",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589400967/appearances/metals/Scuffed-Aluminum-PBR/roughness-metalness_w9oi2h.png",
        metalness: 1,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589400958/appearances/metals/Scuffed-Aluminum-PBR/normal_rbp9y9.png"
      });
      break;
    case "metalGrid":
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
      break;
    case "rust":
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
      break;
    case "brushedMetal":
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
      break;
    case "painted":
      materials.painted = createMaterial({
        name: "painted",
        group: "metals",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519352/appearances/metals/painted/PaintedMetal001_2K_Color_qrajdx.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519367/appearances/metals/painted/PaintedMetal001_2K_Roughness_y409ia.jpg",
        metalness: 2,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519365/appearances/metals/painted/PaintedMetal001_2K_Normal_vku2bg.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519360/appearances/metals/painted/PaintedMetal001_2K_Displacement_xoykvq.jpg"
      });
      break;
    case "marbleOne":
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
      break;
    case "fleshyGranite":
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
      break;
    case "polishedGranite":
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
      break;
    case "marbleTwo":
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
      break;
    case "marbleThree":
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
      break;
    case "bricks":
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
      break;
    case "wallMedieval":
      materials.wallMedieval = createMaterial({
        name: "wallMedieval",
        group: "stones",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589500098/appearances/stones/WallMedieval/color_cyzszq.jpg",
        color: "#171717",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589500109/appearances/stones/WallMedieval/ao_o9xmqa.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589500119/appearances/stones/WallMedieval/normal_dyv11c.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589500129/appearances/stones/WallMedieval/roughness-metalness_vgudt7.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589500104/appearances/stones/WallMedieval/displacement_psnz9e.jpg",
        displacementScale: 0.2
      });
      break;
    case "cobbleStoneCurved":
      materials.cobbleStoneCurved = createMaterial({
        name: "cobbleStoneCurved",
        group: "stones",
        colorMap: true,
        color: "#f5f5dc",
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589522818/appearances/stones/cobblestonecurved/cobblestone-curved_2_albedo_k1g5tc.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589522810/appearances/stones/cobblestonecurved/cobblestone-curved_2_ao_uvkjix.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589522862/appearances/stones/cobblestonecurved/cobblestone-curved_2_normal-dx_yjftu6.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589522810/appearances/stones/cobblestonecurved/cobblestone-curved_2_roughness_qpsrfp.png",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589522820/appearances/stones/cobblestonecurved/cobblestone-curved_2_height_tyrfcj.png",
        displacementScale: 0.2
      });
      break;
    case "tilesOne":
      materials.tilesOne = createMaterial({
        name: "tiles-one",
        group: "tiles",
        colorMap: true,
        color: "#aba191",
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406263/appearances/tiles/tiles05/color_d5utzo.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406267/appearances/tiles/tiles05/normal_espuvy.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406245/appearances/tiles/tiles05/roughness-metalness_igqzdd.jpg",
        roughness: 1,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406246/appearances/tiles/tiles05/displacement_fnlfre.jpg",
        displacementScale: 1
      });
      break;
    case "tilesTwo":
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
        roughness: 0.2,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406534/appearances/tiles/tilesOnyxOpaloBlack/displacement_r3awbt.jpg"
      });
      break;
    case "tilesThree":
      materials.tilesThree = createMaterial({
        name: "tiles-three",
        group: "tiles",
        colorMap: true,
        color: "#212121",
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406834/appearances/tiles/tilesRectangularMirrorGray/color_b8arfd.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406835/appearances/tiles/tilesRectangularMirrorGray/normal_tv6frd.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589406835/appearances/tiles/tilesRectangularMirrorGray/roughness-metalness_fwxyxx.jpg",
        roughness: 0.1,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589407074/appearances/tiles/tilesRectangularMirrorGray/displacement_qe1uj6.jpg"
      });
      break;
    case "tilesFour":
      materials.tilesFour = createMaterial({
        name: "tiles-four",
        group: "tiles",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518753/appearances/tiles/greenTile/green-ceramic-tiles_basecolor_dgn6dj.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518753/appearances/tiles/greenTile/green-ceramic-tiles_normal-dx_tlc4is.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518755/appearances/tiles/greenTile/green-ceramic-tiles_roughness_fwuvlz.png",
        roughness: 0.1,
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518746/appearances/tiles/greenTile/green-ceramic-tiles_AO_e4qdqo.png"
      });
      break;
    case "tilesFive":
      materials.tilesFive = createMaterial({
        name: "tiles-five",
        group: "tiles",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521564/appearances/tiles/tilesnumber5/Tiles032_2K_Color_ndjo0i.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521565/appearances/tiles/tilesnumber5/Tiles032_2K_Normal_gunfkc.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521564/appearances/tiles/tilesnumber5/Tiles032_2K_Roughness_eskori.jpg",
        roughness: 0.1,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521563/appearances/tiles/tilesnumber5/Tiles032_2K_Displacement_luhcow.jpg"
      });
      break;
    case "scuffedPlastic":
      materials.scuffedPlastic = createMaterial({
        name: "scuffed-plastic",
        group: "plastics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589517594/appearances/plastics/scuffed/scuffed-plastic4-alb_xsojm8.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589517602/appearances/plastics/scuffed/scuffed-plastic-ao_du3js6.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589517598/appearances/plastics/scuffed/scuffed-plastic-normal_gzkdwr.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589517606/appearances/plastics/scuffed/scuffed-plastic-rough_j7h2wh.png"
      });
      break;
    case "woodOne":
      materials.woodOne = createMaterial({
        name: "wood-one",
        group: "woods",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401356/appearances/woods/wood-one/color_ln7tbv.jpg",
        bumpMap: true,
        bumpMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401357/appearances/woods/wood-one/normal_ca9qka.jpg",
        bumpScale: 1,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401354/appearances/woods/wood-one/roughness-metalness_lpzitz.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401351/appearances/woods/wood-one/displacement_qvzm6k.jpg",
        displacementScale: 1
      });
      break;
    case "woodFlooringOne":
      materials.woodFlooringOne = createMaterial({
        name: "wood-flooring-one",
        group: "woods",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401355/appearances/woods/wood-flooring-one/color_dybvyw.jpg",
        bumpMap: true,
        bumpMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401350/appearances/woods/wood-flooring-one/normal_lxzs0x.jpg",
        bumpScale: 1,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401350/appearances/woods/wood-flooring-one/roughness-metalness_zunnxy.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401346/appearances/woods/wood-flooring-one/displacement_afnlwj.jpg",
        displacementScale: 1
      });
      break;
    case "woodFlooringTwo":
      materials.woodFlooringTwo = createMaterial({
        name: "wood-flooring-two",
        group: "woods",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401356/appearances/woods/wood-flooring-two/color_wnurig.jpg",
        bumpMap: true,
        bumpMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589401351/appearances/woods/wood-flooring-two/normal_ff2oec.jpg",
        bumpScale: 1,
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
      break;
    case "fleece":
      materials.fleece = createMaterial({
        name: "fleece",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589502764/appearances/fabric/Fleece/color_lyuqix.jpg",
        color: "#171717",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589502741/appearances/fabric/Fleece/normal_evwarj.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589503024/appearances/fabric/Fleece/roughness-metalness_c4kftv.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589502793/appearances/fabric/Fleece/displacement_jktllc.tiff",
        displacementScale: 0.2
      });
      break;
    case "leather":
      materials.leather = createMaterial({
        name: "leather",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589503475/appearances/fabric/Leather/color_cpg5od.jpg",
        color: "#191919",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589503448/appearances/fabric/Leather/ao_ixcdcy.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589503431/appearances/fabric/Leather/normal_bkb1ye.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589503506/appearances/fabric/Leather/roughness-metalness_c9ev2e.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589503491/appearances/fabric/Leather/displacement_l7rcfa.jpg",
        displacementScale: 0.3
      });
      break;
    case "carpetOne":
      materials.carpetOne = createMaterial({
        name: "carpet-one",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518430/appearances/fabric/carpet-1/Carpet006_2K_Color_wrv4ew.jpg",
        color: "#191919",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518433/appearances/fabric/carpet-1/Carpet006_2K_AmbientOcclusion_bqpm6b.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518585/appearances/fabric/carpet-1/Carpet006_2K_Normal_i3mboe.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518438/appearances/fabric/carpet-1/Carpet006_2K_Roughness_i4kuau.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518434/appearances/fabric/carpet-1/Carpet006_2K_Displacement_dkmzbf.jpg",
        displacementScale: 0.3
      });
      break;
    case "leatherButtoned":
      materials.leatherButtoned = createMaterial({
        name: "leather-buttoned",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519613/appearances/fabric/leatherbuttoned/Leather011_2K_Color_fxzh1f.jpg",
        color: "#191919",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519617/appearances/fabric/leatherbuttoned/Leather011_2K_Normal_h3gt6q.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519614/appearances/fabric/leatherbuttoned/Leather011_2K_Roughness_midmzu.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519613/appearances/fabric/leatherbuttoned/Leather011_2K_Displacement_uchjza.jpg",
        displacementScale: 0.3
      });
      break;
    case "leatherButtonedTwo":
      materials.leatherButtonedTwo = createMaterial({
        name: "leather-buttoned-two",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519613/appearances/fabric/leatherbuttoned/Leather011_2K_Color_fxzh1f.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519617/appearances/fabric/leatherbuttoned/Leather011_2K_Normal_h3gt6q.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519614/appearances/fabric/leatherbuttoned/Leather011_2K_Roughness_midmzu.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519613/appearances/fabric/leatherbuttoned/Leather011_2K_Displacement_uchjza.jpg",
        displacementScale: 0.3
      });
      break;
    case "basketWeave":
      materials.basketWeave = createMaterial({
        name: "basket-weave",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519895/appearances/fabric/basketweave/simple-basket-weave1-albedo_xx5qyy.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519897/appearances/fabric/basketweave/simple-basket-weave1-normal-dx_m7ozzf.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519893/appearances/fabric/basketweave/simple-basket-weave1-roughness_ftt6tn.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589519892/appearances/fabric/basketweave/simple-basket-weave1-ao_uyaqw5.png"
      });
      break;
    case "gridPatternPlastic":
      materials.gridPatternPlastic = createMaterial({
        name: "grid-pattern-plastic",
        group: "plastics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520842/appearances/plastics/gridpattern/plasticpattern1-albedo_qaumfg.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520845/appearances/plastics/gridpattern/plasticpattern1-normal2b_fnsjks.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520849/appearances/plastics/gridpattern/plasticpattern1-roughness2_anjdjl.png"
      });
      break;
    case "rubber":
      materials.rubber = createMaterial({
        name: "rubber",
        group: "synthetics",
        colorMap: true,
        color: "#212121",
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518039/appearances/synthetics/rubber/synth-rubber-albedo_rlqldd.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518154/appearances/synthetics/rubber/synth-rubber-normal_sleptr.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589518257/appearances/synthetics/rubber/synth-rubber-roughness_ktg2bd.png"
      });
      break;
    case "foam":
      materials.foam = createMaterial({
        name: "foam",
        group: "synthetics",
        colorMap: true,
        color: "#212121",
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520539/appearances/synthetics/foam/foam-grip1-albedo_fgw0qx.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520541/appearances/synthetics/foam/foam-grip1-normal-ogl_q1ckus.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520624/appearances/synthetics/foam/foam-grip1-roughness_ylfwhy.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520540/appearances/synthetics/foam/foam-grip1-ao_qhfbdv.png"
      });
      break;
    case "solarPanel":
      materials.solarPanel = createMaterial({
        name: "solar-panel",
        group: "other",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520300/appearances/other/solarpanel/SolarPanel003_2K_Color_aqr68z.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520301/appearances/other/solarpanel/SolarPanel003_2K_Normal_ioud1m.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520296/appearances/other/solarpanel/SolarPanel003_2K_Roughness_u0jcdl.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589520297/appearances/other/solarpanel/SolarPanel003_2K_Displacement_dfemoc.jpg"
      });
      break;
    case "mixedMoss":
      materials.mixedMoss = createMaterial({
        name: "mixed-moss",
        group: "other",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521116/appearances/other/mixedMoss/mixedmoss-albedo2_ybjika.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521114/appearances/other/mixedMoss/mixedmoss-normal2_tr1qgr.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521115/appearances/other/mixedMoss/mixedmoss-roughness_ykwfth.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521110/appearances/other/mixedMoss/mixedmoss-ao2_sg9fie.png",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/aajfinal/image/upload/v1589521239/appearances/other/mixedMoss/mixedmoss-height_gcfph5.png",
        displacementScale: 2
      });
      break;

    default:
      break;
  }
  // ?

  return materials;
};

export default materialLibrary;
