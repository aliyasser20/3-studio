import React from "react";
import PropTypes from "prop-types";

import { Paper, ThemeProvider } from "@material-ui/core";

import EnvironmentControls from "./EnvironmentControls/EnvironmentControls";

import themeCreator from "../../../helpers/themeCreator";

import "./SideBar.scss";

const SideBar = props => {
  const theme = themeCreator("#ffffff", "#212121");

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="side-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          <EnvironmentControls
            expanded={expanded}
            handleChange={handleChange}
          />
          <EnvironmentControls
            expanded={expanded}
            handleChange={handleChange}
          />
          <EnvironmentControls
            expanded={expanded}
            handleChange={handleChange}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
};

SideBar.propTypes = {};

export default SideBar;
