import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";

import AvatarPopover from "./AvatarPopover/AvatarPopover";

import themeCreator from "../../helpers/themeCreator";

import "./NavBar.scss";

const NavBar = () => {
  const loggedIn = false;

  const content = loggedIn ? (
    <AvatarPopover />
  ) : (
    <Box>
      <Link to="/login">
        <Button
          disableRipple
          classes={{ label: "text-button" }}
          color="inherit"
          href="#text-buttons"
        >
          <Box fontWeight="700">Login</Box>
        </Button>
      </Link>
      <span className="gradient-button">
        <Link to="/signup">
          <Button variant="contained" color="primary">
            <Box fontWeight="700">Signup</Box>
          </Button>
        </Link>
      </span>
    </Box>
  );

  return (
    <ThemeProvider theme={themeCreator(grey[900])}>
      <div className="navbar">
        <AppBar position="fixed" color="primary">
          <Container maxWidth="xl">
            <Toolbar>
              <div className="navbar-flex">
                <Typography variant="h5">
                  <div className="text-color-grad">
                    <Box fontWeight="700">Final Project</Box>
                  </div>
                </Typography>
                {content}
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default NavBar;
