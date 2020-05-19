import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

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

const NavBar = props => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  let username;

  if (user) {
    if (user.sub.includes("google") || user.sub.includes("facebook")) {
      username = user.name;
    } else {
      username = user.nickname;
    }
  }

  // const content = isAuthenticated ? (
  //   <AvatarPopover {...user} username={username} logout={logout} />
  // ) : (
  //   <Box>
  //     <span className="gradient-button">
  //       <Button
  //         color="primary"
  //         variant="contained"
  //         onClick={() => loginWithRedirect({})}
  //       >
  //         <Box fontWeight="700">Get Started</Box>
  //       </Button>
  //     </span>
  //   </Box>
  // );

  let width = "xl";

  if (props.location.pathname === "/") {
    width = "lg";
  }

  return (
    <ThemeProvider theme={themeCreator(grey[900])}>
      <div className="navbar">
        <AppBar position="fixed" color="primary">
          <Container maxWidth={width}>
            <Toolbar classes={{ root: "nav-toolbar" }}>
              <div className="navbar-flex">
                <Link to="/">
                  <Typography variant="h5">
                    <div className="text-color-grad">
                      <Box fontWeight="700">
                        <div className="app-logo">
                          <div className="circle">3</div>
                          <div className="studio">Studio</div>
                        </div>
                      </Box>
                    </div>
                  </Typography>
                </Link>
                {/* {content} */}
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

NavBar.propTypes = {
  location: PropTypes.object
};

export default withRouter(NavBar);
