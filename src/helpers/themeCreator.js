import { createMuiTheme } from "@material-ui/core/styles";

const themeCreator = (primary, secondary) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primary,
        mainGradient: "linear-gradient(#F45C43, #EB3349)"
      },
      secondary: {
        main: secondary
      }
    }
  });

  return theme;
};

export default themeCreator;
