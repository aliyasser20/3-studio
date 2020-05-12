import React from "react";
import PropTypes from "prop-types";

import { Paper, ThemeProvider } from "@material-ui/core";

import themeCreator from "../../../helpers/themeCreator";

import "./SideBar.scss";

const SideBar = props => {
  const theme = themeCreator("#ffffff", "#212121");
  return (
    <ThemeProvider theme={theme}>
      <div className="side-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          helloe
        </Paper>
      </div>
    </ThemeProvider>
  );
};

SideBar.propTypes = {};

export default SideBar;
