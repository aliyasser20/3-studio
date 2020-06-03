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
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149431/appearances/metals/alien/color_wplgtz_wkirss.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149449/appearances/metals/alien/roughness-metalness_qkpcax_hxj4mz.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149458/appearances/metals/alien/ao_gtjygo_v4ox2y.png",
        metalness: 1,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149475/appearances/metals/alien/normal_uxydlu_pyifgj.png"
      });
      break;
    case "scuffedAluminumPBR":
      materials.scuffedAluminumPBR = createMaterial({
        name: "scuffed-aluminum-pbr",
        group: "metals",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149523/appearances/metals/scuffedAluminumPBR/color_lbgnuj_osg0ve.png",
        color: "#CeCeCe",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149532/appearances/metals/scuffedAluminumPBR/roughness-metalness_w9oi2h_hevged.png",
        metalness: 1,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149544/appearances/metals/scuffedAluminumPBR/normal_rbp9y9_vkwcr3.png"
      });
      break;
    case "metalGrid":
      materials.metalGrid = createMaterial({
        name: "metal-grid",
        group: "metals",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149590/appearances/metals/metalGrid/color_cg9us4_zkdzrs.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149604/appearances/metals/metalGrid/roughness-metalness_jywzgo_uqxqfc.png",
        metalness: 1,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149615/appearances/metals/metalGrid/normal_buvgpn_k8a7xp.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149630/appearances/metals/metalGrid/ao_ivhsda_vfatw7.png"
      });
      break;
    case "rust":
      materials.rust = createMaterial({
        name: "rust",
        group: "metals",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149680/appearances/metals/rust/color_jm6qg5_gupgjl.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149694/appearances/metals/rust/roughness-metalness_kvdoqi_yvzoqr.jpg",
        metalness: 1,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149709/appearances/metals/rust/normal_fjxo9i_odslcs.jpg"
      });
      break;
    case "brushedMetal":
      materials.brushedMetal = createMaterial({
        name: "brushed-metal",
        group: "metals",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149752/appearances/metals/brushedMetal/color_ayvvpl_ucljfp.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149768/appearances/metals/brushedMetal/roughness-metalness_ge2vpf_qr9vaj.png",
        metalness: 1,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149786/appearances/metals/brushedMetal/normal_tlobwx_oe8tij.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149805/appearances/metals/brushedMetal/ao_wgtuqd_spdjz6.png"
      });
      break;
    case "painted":
      materials.painted = createMaterial({
        name: "painted",
        group: "metals",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149849/appearances/metals/painted/PaintedMetal001_2K_Color_qrajdx_bfhq5g.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149869/appearances/metals/painted/PaintedMetal001_2K_Roughness_y409ia_tsavfc.jpg",
        metalness: 2,
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149891/appearances/metals/painted/PaintedMetal001_2K_Normal_vku2bg_lw4ihw.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591149914/appearances/metals/painted/PaintedMetal001_2K_Displacement_xoykvq_d6kqg5.jpg"
      });
      break;
    case "marbleOne":
      materials.marbleOne = createMaterial({
        name: "marble-one",
        group: "ceramics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150038/appearances/ceramics/marbleOne/color_kojoxo_qtnkz2.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150063/appearances/ceramics/marbleOne/normal_hq5kbl_cp2s9i.jpg",
        clearcoat: 0.1,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150088/appearances/ceramics/marbleOne/roughness-metalness_f4rao1_ob4get.jpg"
      });
      break;
    case "fleshyGranite":
      materials.fleshyGranite = createMaterial({
        name: "fleshy-granite",
        group: "ceramics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150176/appearances/ceramics/fleshyGranite/color_kxcqva_ngfwgb.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150204/appearances/ceramics/fleshyGranite/normal_c2z4da_thf7bx.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150234/appearances/ceramics/fleshyGranite/roughness-metalness_ruuhyd_f2glpl.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150264/appearances/ceramics/fleshyGranite/ao_ubxcj0_xgxxfb.png"
      });
      break;
    case "polishedGranite":
      materials.polishedGranite = createMaterial({
        name: "polished-granite",
        group: "ceramics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150330/appearances/ceramics/polishedGranite/color_ugrucm_pb84be.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150364/appearances/ceramics/polishedGranite/normal_vm3myb_tupehl.png",
        clearcoat: 0.1
      });
      break;
    case "marbleTwo":
      materials.marbleTwo = createMaterial({
        name: "marble-two",
        group: "ceramics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150436/appearances/ceramics/marbleTwo/color_h14ieg_nejigy.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150298/appearances/ceramics/marbleTwo/normal_atdoik_sgmz6x.jpg",
        clearcoat: 0.2,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150472/appearances/ceramics/marbleTwo/roughness-metalness_p3oeim_tz89yw.jpg"
      });
      break;
    case "marbleThree":
      materials.marbleThree = createMaterial({
        name: "marble-three",
        group: "ceramics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150566/appearances/ceramics/marbleThree/color_jsaudp_rgx4yd.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150605/appearances/ceramics/marbleThree/normal_iwrbjw_meogjq.jpg",
        clearcoat: 0.2,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150646/appearances/ceramics/marbleThree/roughness-metalness_jhtwlt_prlvtz.jpg"
      });
      break;
    case "bricks":
      materials.bricks = createMaterial({
        name: "bricks",
        group: "stones",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150734/appearances/stones/bricks/color_tjdqof_gqzeay.jpg",
        color: "#212121",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150401/appearances/stones/bricks/ao_vcvpdi_eoc7lx.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150777/appearances/stones/bricks/normal_lacyy1_bnywhg.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150822/appearances/stones/bricks/roughness-metalness_xafj0w_rfvtxj.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150867/appearances/stones/bricks/displacement_orxwde_glost5.jpg",
        displacementScale: 0.2
      });
      break;
    // COME BACK HERE
    case "wallMedieval":
      materials.wallMedieval = createMaterial({
        name: "wallMedieval",
        group: "stones",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153199/appearances/stones/wallMedieval/color_cyzszq_f6rmwh.jpg",
        color: "#171717",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153173/appearances/stones/wallMedieval/ao_o9xmqa_ikrviz.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153188/appearances/stones/wallMedieval/normal_dyv11c_ym1el5.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153168/appearances/stones/wallMedieval/roughness-metalness_vgudt7_rmc8w7.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153170/appearances/stones/wallMedieval/displacement_psnz9e_umg1iz.jpg",
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
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150527/appearances/stones/cobbleStoneCurved/cobblestone-curved_2_albedo_k1g5tc_mbpzlr.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153259/appearances/stones/cobbleStoneCurved/cobblestone-curved_2_ao_uvkjix_tvbgge.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153243/appearances/stones/cobbleStoneCurved/cobblestone-curved_2_normal-dx_yjftu6_kur2oi.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153235/appearances/stones/cobbleStoneCurved/cobblestone-curved_2_roughness_qpsrfp_yrcfwo.png",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153232/appearances/stones/cobbleStoneCurved/cobblestone-curved_2_height_tyrfcj_njxyxf.png",
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
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153342/appearances/tiles/tilesOne/color_d5utzo_jcpcyl.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153308/appearances/tiles/tilesOne/normal_espuvy_tjigsd.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153284/appearances/tiles/tilesOne/roughness-metalness_igqzdd_enphqn.jpg",
        roughness: 1,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153276/appearances/tiles/tilesOne/displacement_fnlfre_cgzg2k.jpg",
        displacementScale: 1
      });
      break;
    case "tilesTwo":
      materials.tilesTwo = createMaterial({
        name: "tiles-two",
        group: "tiles",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153366/appearances/tiles/tilesTwo/color_kt6ehw_xxe8au.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153373/appearances/tiles/tilesTwo/normal_pa49g9_mncgnc.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153363/appearances/tiles/tilesTwo/roughness-metalness_nn3uue_cc78mr.jpg",
        roughness: 0.2,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153354/appearances/tiles/tilesTwo/displacement_r3awbt_cu0wq5.jpg"
      });
      break;
    case "tilesThree":
      materials.tilesThree = createMaterial({
        name: "tiles-three",
        group: "tiles",
        colorMap: true,
        color: "#212121",
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153406/appearances/tiles/tilesThree/color_b8arfd_z2arux.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153421/appearances/tiles/tilesThree/normal_tv6frd_ncd4y9.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153409/appearances/tiles/tilesThree/roughness-metalness_fwxyxx_c5evka.jpg",
        roughness: 0.1,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591150692/appearances/tiles/tilesThree/displacement_qe1uj6_xnebm3.jpg"
      });
      break;
    case "tilesFour":
      materials.tilesFour = createMaterial({
        name: "tiles-four",
        group: "tiles",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153484/appearances/tiles/tilesFour/green-ceramic-tiles_basecolor_dgn6dj_ncqrpn.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153497/appearances/tiles/tilesFour/green-ceramic-tiles_normal-dx_tlc4is_vpbbmv.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153505/appearances/tiles/tilesFour/green-ceramic-tiles_roughness_fwuvlz_bvph4e.png",
        roughness: 0.1,
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153471/appearances/tiles/tilesFour/green-ceramic-tiles_AO_e4qdqo_rj6pk5.png"
      });
      break;
    case "tilesFive":
      materials.tilesFive = createMaterial({
        name: "tiles-five",
        group: "tiles",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153523/appearances/tiles/tilesFive/Tiles032_2K_Color_ndjo0i_jv9yrl.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153528/appearances/tiles/tilesFive/Tiles032_2K_Normal_gunfkc_fmxlzk.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153527/appearances/tiles/tilesFive/Tiles032_2K_Roughness_eskori_d8jjjw.jpg",
        roughness: 0.1,
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153521/appearances/tiles/tilesFive/Tiles032_2K_Displacement_luhcow_ihkmmr.jpg"
      });
      break;
    case "scuffedPlastic":
      materials.scuffedPlastic = createMaterial({
        name: "scuffed-plastic",
        group: "plastics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591151960/appearances/plastics/scuffedPlastic/scuffed-plastic4-alb_xsojm8_o1fsew.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591151959/appearances/plastics/scuffedPlastic/scuffed-plastic-ao_du3js6_ogvyjh.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591151968/appearances/plastics/scuffedPlastic/scuffed-plastic-normal_gzkdwr_hhzaae.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591151974/appearances/plastics/scuffedPlastic/scuffed-plastic-rough_j7h2wh_h2bky1.png"
      });
      break;
    case "woodOne":
      materials.woodOne = createMaterial({
        name: "wood-one",
        group: "woods",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152003/appearances/woods/woodOne/color_ln7tbv_fgi1bv.jpg",
        bumpMap: true,
        bumpMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152010/appearances/woods/woodOne/normal_ca9qka_uu9efb.jpg",
        bumpScale: 1,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591151996/appearances/woods/woodOne/roughness-metalness_lpzitz_ptispl.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591151994/appearances/woods/woodOne/displacement_qvzm6k_nvfihy.jpg",
        displacementScale: 1
      });
      break;
    case "woodFlooringOne":
      materials.woodFlooringOne = createMaterial({
        name: "wood-flooring-one",
        group: "woods",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152040/appearances/woods/woodFlooringOne/color_dybvyw_i1kesv.jpg",
        bumpMap: true,
        bumpMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152030/appearances/woods/woodFlooringOne/normal_lxzs0x_xkfcru.jpg",
        bumpScale: 1,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152030/appearances/woods/woodFlooringOne/roughness-metalness_zunnxy_dacjqb.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152024/appearances/woods/woodFlooringOne/displacement_afnlwj_umy6sx.jpg",
        displacementScale: 1
      });
      break;
    case "woodFlooringTwo":
      materials.woodFlooringTwo = createMaterial({
        name: "wood-flooring-two",
        group: "woods",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152067/appearances/woods/woodFlooringTwo/color_wnurig_jwitim.jpg",
        bumpMap: true,
        bumpMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152056/appearances/woods/woodFlooringTwo/normal_ff2oec_o2zi7k.jpg",
        bumpScale: 1,
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152052/appearances/woods/woodFlooringTwo/roughness-metalness_jqqxmw_agkego.jpg",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152054/appearances/woods/woodFlooringTwo/ao_e2u4xj_pjwzmo.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152055/appearances/woods/woodFlooringTwo/displacement_fmcylk_jwpmth.jpg",
        displacementScale: 1
      });
      break;
    case "fleece":
      materials.fleece = createMaterial({
        name: "fleece",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152079/appearances/fabrics/fleece/color_lyuqix_e2t7wq.jpg",
        color: "#171717",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152087/appearances/fabrics/fleece/normal_evwarj_loefs0.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152074/appearances/fabrics/fleece/roughness-metalness_c4kftv_evf3mq.jpg"
        // displacementMap: true,
        // displacementMapPath:
        //   "https://res.cloudinary.com/aajfinal/image/upload/v1589502793/appearances/fabric/Fleece/displacement_jktllc.tiff",
        // displacementScale: 0.2
      });
      break;
    case "leather":
      materials.leather = createMaterial({
        name: "leather",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152258/appearances/fabrics/leather/color_cpg5od_rknqyj.jpg",
        color: "#191919",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152255/appearances/fabrics/leather/ao_ixcdcy_kzwbwg.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152275/appearances/fabrics/leather/normal_bkb1ye_isywge.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152238/appearances/fabrics/leather/roughness-metalness_c9ev2e_a9nwp6.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152248/appearances/fabrics/leather/displacement_l7rcfa_dfbrgf.jpg",
        displacementScale: 0.3
      });
      break;
    case "carpetOne":
      materials.carpetOne = createMaterial({
        name: "carpet-one",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152320/appearances/fabrics/carpetOne/Carpet006_2K_Color_wrv4ew_ywskbv.jpg",
        color: "#191919",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152298/appearances/fabrics/carpetOne/Carpet006_2K_AmbientOcclusion_bqpm6b_btygub.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152292/appearances/fabrics/carpetOne/Carpet006_2K_Normal_i3mboe_xll1ii.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152286/appearances/fabrics/carpetOne/Carpet006_2K_Roughness_i4kuau_i3zdes.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152296/appearances/fabrics/carpetOne/Carpet006_2K_Displacement_dkmzbf_yxba6o.jpg",
        displacementScale: 0.3
      });
      break;
    case "leatherButtoned":
      materials.leatherButtoned = createMaterial({
        name: "leather-buttoned",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152361/appearances/fabrics/leatherButtoned/Leather011_2K_Color_fxzh1f_yetsap.jpg",
        color: "#191919",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152376/appearances/fabrics/leatherButtoned/Leather011_2K_Normal_h3gt6q_z5c44e.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152362/appearances/fabrics/leatherButtoned/Leather011_2K_Roughness_midmzu_lmy4ay.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152354/appearances/fabrics/leatherButtoned/Leather011_2K_Displacement_uchjza_gvrla5.jpg",
        displacementScale: 0.3
      });
      break;
    case "leatherButtonedTwo":
      materials.leatherButtonedTwo = createMaterial({
        name: "leather-buttoned-two",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152411/appearances/fabrics/leatherButtonedTwo/Leather011_2K_Color_fxzh1f_bwocxo.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152435/appearances/fabrics/leatherButtonedTwo/Leather011_2K_Normal_h3gt6q_n8t3mt.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152410/appearances/fabrics/leatherButtonedTwo/Leather011_2K_Roughness_midmzu_sspa5l.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152404/appearances/fabrics/leatherButtonedTwo/Leather011_2K_Displacement_uchjza_cy3a4p.jpg",
        displacementScale: 0.3
      });
      break;
    case "basketWeave":
      materials.basketWeave = createMaterial({
        name: "basket-weave",
        group: "fabric",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152505/appearances/fabrics/basketWeave/simple-basket-weave1-albedo_xx5qyy_zj658j.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152500/appearances/fabrics/basketWeave/simple-basket-weave1-normal-dx_m7ozzf_ti362v.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152486/appearances/fabrics/basketWeave/simple-basket-weave1-roughness_ftt6tn_ge1uyo.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152474/appearances/fabrics/basketWeave/simple-basket-weave1-ao_uyaqw5_rcel3o.png"
      });
      break;
    case "gridPatternPlastic":
      materials.gridPatternPlastic = createMaterial({
        name: "grid-pattern-plastic",
        group: "plastics",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152521/appearances/plastics/gridPatternPlastic/plasticpattern1-albedo_qaumfg_hvxdd0.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152538/appearances/plastics/gridPatternPlastic/plasticpattern1-normal2b_fnsjks_xychsd.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152538/appearances/plastics/gridPatternPlastic/plasticpattern1-roughness2_anjdjl_teooow.png"
      });
      break;
    case "rubber":
      materials.rubber = createMaterial({
        name: "rubber",
        group: "synthetics",
        colorMap: true,
        color: "#212121",
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152937/appearances/synthetics/rubber/synth-rubber-albedo_rlqldd_eqs3v3.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152942/appearances/synthetics/rubber/synth-rubber-normal_sleptr_hmsmwe.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152930/appearances/synthetics/rubber/synth-rubber-roughness_ktg2bd_hykjkx.png"
      });
      break;
    case "foam":
      materials.foam = createMaterial({
        name: "foam",
        group: "synthetics",
        colorMap: true,
        color: "#212121",
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152955/appearances/synthetics/foam/foam-grip1-albedo_fgw0qx_v67ifx.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152970/appearances/synthetics/foam/foam-grip1-normal-ogl_q1ckus_jrucln.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152953/appearances/synthetics/foam/foam-grip1-roughness_ylfwhy_ghtrom.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591152969/appearances/synthetics/foam/foam-grip1-ao_qhfbdv_zqzpvm.png"
      });
      break;
    case "solarPanel":
      materials.solarPanel = createMaterial({
        name: "solar-panel",
        group: "other",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153021/appearances/other/solarPanel/SolarPanel003_2K_Color_aqr68z_svojyx.jpg",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153016/appearances/other/solarPanel/SolarPanel003_2K_Normal_ioud1m_t75nsu.jpg",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153010/appearances/other/solarPanel/SolarPanel003_2K_Roughness_u0jcdl_zur6y5.jpg",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153010/appearances/other/solarPanel/SolarPanel003_2K_Displacement_dfemoc_rtbfk6.jpg"
      });
      break;
    case "mixedMoss":
      materials.mixedMoss = createMaterial({
        name: "mixed-moss",
        group: "other",
        colorMap: true,
        colorMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153142/appearances/other/mixedMoss/mixedmoss-albedo2_ybjika_adzpjr.png",
        normalMap: true,
        normalMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153165/appearances/other/mixedMoss/mixedmoss-normal2_tr1qgr_quagx8.png",
        roughnessMetalnessMap: true,
        roughnessMetalnessMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153120/appearances/other/mixedMoss/mixedmoss-roughness_ykwfth_ez4qg0.png",
        ambientOcclusionMap: true,
        ambientOcclusionMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153164/appearances/other/mixedMoss/mixedmoss-ao2_sg9fie_grasrc.png",
        displacementMap: true,
        displacementMapPath:
          "https://res.cloudinary.com/cloud3studio/image/upload/v1591153110/appearances/other/mixedMoss/mixedmoss-height_gcfph5_h2lboh.png",
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
