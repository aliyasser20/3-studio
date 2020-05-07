import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import grey from "@material-ui/core/colors/grey";

import themeCreator from "../../helpers/themeCreator";

import "./NavBar.scss";

const NavBar = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <ThemeProvider theme={themeCreator(grey[900])}>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="xl">
          <Toolbar>
            <div className="navbar-flex">
              <Typography variant="h5">
                <div className="text-color-grad">
                  <Box fontWeight="700">Final Project</Box>
                </div>
              </Typography>
              <Box>
                <Button color="inherit" href="#text-buttons">
                  <Box fontWeight="700">Login</Box>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    background:
                      "linear-gradient(rgb(244, 92, 67), rgb(235, 51, 73))",
                    marginLeft: "1.5em"
                  }}
                >
                  <Box fontWeight="700">Signup</Box>
                </Button>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
