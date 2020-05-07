import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const themeCreator = (primary = blue[500], secondary = green[500]) => {
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
