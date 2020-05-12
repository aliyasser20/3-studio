import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper, Box, Typography, ThemeProvider } from "@material-ui/core";

import ModeSelector from "./ModeSelector/ModeSelector";

import themeCreator from "../../../helpers/themeCreator";

import "./StudioTopBar.scss";
import MediaTopNav from "../Modes/Media/MediaTopNav/MediaTopNav";

const StudioTopBar = (props) => {
  const theme = themeCreator("#ffffff", "#212121");

  return (
    <ThemeProvider theme={theme}>
      <div className="studio-top-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          <div className="top-bar-grid">
            <div className="top-bar-left">
              <Box fontWeight={500}>
                <Typography variant="h6" color="primary" component="p">
                  {props.currentProject.name}
                </Typography>
              </Box>
            </div>
            <div className="top-bar-center">
              <ModeSelector />
            </div>
            <div className="top-bar-right">
              {props.mode === "MEDIA" && <MediaTopNav />}
            </div>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

StudioTopBar.propTypes = {
  currentProject: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentProject: state.projects.currentProject,
  mode: state.modeControl.currentMode,
});

export default connect(mapStateToProps)(StudioTopBar);
