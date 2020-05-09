import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";

import AvatarPopover from "./AvatarPopover/AvatarPopover";

import { useAuth0 } from "../../react-auth0-spa";
import themeCreator from "../../helpers/themeCreator";

import "./NavBar.scss";

const NavBar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const content = isAuthenticated ? (
    <AvatarPopover logout={logout} />
  ) : (
    <Box>
      <span className="gradient-button">
        <Button
          color="primary"
          variant="contained"
          onClick={() => loginWithRedirect({})}
        >
          <Box fontWeight="700">Get Started</Box>
        </Button>
      </span>
    </Box>
  );

  console.log(user);
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
