import { createMuiTheme } from "@material-ui/core/styles";

const themeCreator = (primary, secondary) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primary
      },
      secondary: {
        main: secondary
      }
    }
  });

  return theme;
};

export default themeCreator;
