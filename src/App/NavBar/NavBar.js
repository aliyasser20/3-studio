import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import purple from "@material-ui/core/colors/purple";

import themeCreator from "../../helpers/themeCreator";

const NavBar = () => (
  <ThemeProvider theme={themeCreator(grey[900], purple[800])}>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h5">
          <div className="text-color-grad">
            <Box fontWeight="700">Final Project</Box>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default NavBar;
