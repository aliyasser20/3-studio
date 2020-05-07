import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const themeCreator = (primary, secondary) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[900]
      },
      secondary: {
        main: "#f44336"
      }
    }
  });

  return theme;
};

export default themeCreator;
