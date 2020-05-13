import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper, ThemeProvider } from "@material-ui/core";

import EnvironmentControls from "./EnvironmentControls/EnvironmentControls";
import MaterialDetails from "./MaterialDetails/MaterialDetails";

import themeCreator from "../../../helpers/themeCreator";

import "./SideBar.scss";

const SideBar = props => {
  const theme = themeCreator("#ffffff", "#212121");

  const [expandedPanels, setExpandedPanels] = useState([]);

  // Handle panels expanded
  const handleChange = panel => {
    let updatedPanels = [...expandedPanels];

    // If panel clicked is already expanded
    if (updatedPanels.includes(panel)) {
      // Remove panel from expanded panels array
      updatedPanels = updatedPanels.filter(
        currentPanel => currentPanel !== panel
      );
      // If panel clicked is not expanded
    } else {
      // Add panel to expanded panels
      updatedPanels.push(panel);
    }

    setExpandedPanels(updatedPanels);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="side-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          {props.currentMode === "EDIT" && (
            <Fragment>
              <EnvironmentControls
                expanded={expandedPanels}
                handleChange={handleChange}
              />
              <MaterialDetails
                expanded={expandedPanels}
                handleChange={handleChange}
              />
            </Fragment>
          )}
        </Paper>
      </div>
    </ThemeProvider>
  );
};

SideBar.propTypes = {
  currentMode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentMode: state.modeControl.currentMode
});

export default connect(mapStateToProps, null)(SideBar);
