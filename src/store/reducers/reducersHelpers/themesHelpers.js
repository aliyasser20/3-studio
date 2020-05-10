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
  }
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
