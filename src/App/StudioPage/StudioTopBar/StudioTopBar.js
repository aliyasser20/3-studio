import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Paper,
  Box,
  Typography,
  ThemeProvider,
  Button,
  IconButton
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SaveIcon from "@material-ui/icons/Save";

import ModeSelector from "./ModeSelector/ModeSelector";

import themeCreator from "../../../helpers/themeCreator";
import fileExporter from "../../../helpers/fileExporter";

import "./StudioTopBar.scss";

const StudioTopBar = props => {
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
              <span className="gradient-button">
                <Button variant="contained" endIcon={<ExpandMoreIcon />}>
                  Configuration 3
                </Button>
              </span>
            </div>
            <div className="top-bar-center">
              <ModeSelector />
            </div>
            <div className="top-bar-right">
              {props.currentMode === "EDIT" && (
                <Fragment>
                  <div className="save-status unsaved">Changes unsaved</div>
                  <IconButton
                    aria-label="edit"
                    classes={{ root: "action-button" }}
                    size="small"
                  >
                    <SaveIcon />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    classes={{ root: "action-button" }}
                    size="small"
                    onClick={() => fileExporter()}
                  >
                    <GetAppIcon />
                  </IconButton>
                </Fragment>
              )}
            </div>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

StudioTopBar.propTypes = {
  currentProject: PropTypes.object.isRequired,
  currentMode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentProject: state.projects.currentProject,
  currentMode: state.modeControl.currentMode
});

export default connect(mapStateToProps)(StudioTopBar);
