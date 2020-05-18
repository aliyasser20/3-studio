export const availableThemes = [
  {
    name: "cherry",
    hslColor: {
      topFirst: "8",
      topSecond: "89%",
      topThird: "61%",
      bottomFirst: "353",
      bottomSecond: "82%",
      bottomThird: "56%"
    }
  },
  {
    name: "electric violet",
    hslColor: {
      topFirst: "263",
      topSecond: "77%",
      topThird: "62%",
      bottomFirst: "222",
      bottomSecond: "76%",
      bottomThird: "59%"
    }
  },
  {
    name: "sea weed",
    hslColor: {
      topFirst: "170",
      topSecond: "100%",
      topThird: "40%",
      bottomFirst: "182",
      bottomSecond: "98%",
      bottomThird: "35%"
    }
  },
  {
    name: "ibiza sunset",
    hslColor: {
      topFirst: "25",
      topSecond: "100%",
      topThird: "50%",
      bottomFirst: "331",
      bottomSecond: "93%",
      bottomThird: "48%"
    }
  },
  {
    name: "harmonic energy",
    hslColor: {
      topFirst: "48",
      topSecond: "89%",
      topThird: "60%",
      bottomFirst: "168",
      bottomSecond: "76%",
      bottomThird: "36%"
    }
  },
  // {
  //   name: "witching hour",
  //   hslColor: {
  //     topFirst: "350",
  //     topSecond: "81%",
  //     topThird: "42%",
  //     bottomFirst: "275",
  //     bottomSecond: "66%",
  //     bottomThird: "13%"
  //   }
  // },
  // {
  //   name: "lush",
  //   hslColor: {
  //     topFirst: "87",
  //     topSecond: "67%",
  //     topThird: "63%",
  //     bottomFirst: "101",
  //     bottomSecond: "57%",
  //     bottomThird: "43%"
  //   }
  // },
  {
    name: "dimigo",
    hslColor: {
      topFirst: "0",
      topSecond: "96%",
      topThird: "70%",
      bottomFirst: "324",
      bottomSecond: "100%",
      bottomThird: "46%"
    }
  },
  // {
  //   name: "cherry blossoms",
  //   hslColor: {
  //     topFirst: "327",
  //     topSecond: "83%",
  //     topThird: "91%",
  //     bottomFirst: "328",
  //     bottomSecond: "55%",
  //     bottomThird: "47%"
  //   }
  // },
  {
    name: "sublime vivid",
    hslColor: {
      topFirst: "348",
      topSecond: "97%",
      topThird: "63%",
      bottomFirst: "230",
      bottomSecond: "96%",
      bottomThird: "62%"
    }
  }
  // {
  //   name: "velvet sun",
  //   hslColor: {
  //     topFirst: "78",
  //     topSecond: "56%",
  //     topThird: "85%",
  //     bottomFirst: "359",
  //     bottomSecond: "84%",
  //     bottomThird: "63%"
  //   }
  // },
];

export const toggleCSSGlobalColors = (themes, selectedTheme) => {
  const root = document.documentElement;

  for (const theme of themes) {
    if (theme.name === selectedTheme) {
      root.style.setProperty("--top-first", theme.hslColor.topFirst);
      root.style.setProperty("--top-second", theme.hslColor.topSecond);
      root.style.setProperty("--top-third", theme.hslColor.topThird);
      root.style.setProperty("--bottom-first", theme.hslColor.bottomFirst);
      root.style.setProperty("--bottom-second", theme.hslColor.bottomSecond);
      root.style.setProperty("--bottom-third", theme.hslColor.bottomThird);
    }
  }
};

export const setCurrentThemeDetailed = (themes, selectedTheme) => {
  for (const theme of themes) {
    if (theme.name === selectedTheme) {
      return theme;
    }
  }
};
