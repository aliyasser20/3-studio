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
import MediaTopNav from "../Modes/Media/MediaTopNav/MediaTopNav";

import themeCreator from "../../../helpers/themeCreator";
import fileExporter from "../../../helpers/fileExporter";
import backendAxios from "../../../axiosInstances/backendAxios";
import { useAuth0 } from "../../../react-auth0-spa";

import "./StudioTopBar.scss";

const StudioTopBar = props => {
  const { user } = useAuth0();

  const theme = themeCreator("#ffffff", "#212121");

  const saveConfig = () => {
    backendAxios
      .put("/api/configurations", {
        userId: user.sub,
        configuration: {
          id: props.currentConfigurationId,
          data: {
            bgEnvironment: props.bgEnvironment,
            bgSolid: props.bgSolid,
            bgColor: props.bgColor,
            mapEnvironment: props.mapEnvironment,
            currentEnvironmentOption: props.currentEnvironmentOption,
            ambientLight: props.ambientLight,
            directionalLight: props.directionalLight,
            hemisphereLight: props.hemisphereLight,
            ambientLightIntensity: props.ambientIntensity,
            directionalLightIntensity: props.directionalIntensity,
            hemisphereLightIntensity: props.hemisphereIntensity,
            ambientLightColor: props.ambientColor,
            directionalLightColor: props.directionalColor,
            hemisphereLightColor: props.hemisphereColor,
            materials: []
          }
        }
      })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
              {props.currentMode === "MEDIA" && <MediaTopNav />}
              {props.currentMode === "EDIT" && (
                <Fragment>
                  <div className="save-status unsaved">Changes unsaved</div>
                  <IconButton
                    aria-label="edit"
                    classes={{ root: "action-button" }}
                    size="small"
                    onClick={saveConfig}
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
  currentMode: PropTypes.string.isRequired,
  mapEnvironment: PropTypes.bool.isRequired,
  bgSolid: PropTypes.bool.isRequired,
  bgEnvironment: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
  ambientLight: PropTypes.bool.isRequired,
  directionalLight: PropTypes.bool.isRequired,
  hemisphereLight: PropTypes.bool.isRequired,
  ambientIntensity: PropTypes.number.isRequired,
  hemisphereIntensity: PropTypes.number.isRequired,
  directionalIntensity: PropTypes.number.isRequired,
  directionalColor: PropTypes.string.isRequired,
  hemisphereColor: PropTypes.string.isRequired,
  ambientColor: PropTypes.string.isRequired,
  currentConfigurationId: PropTypes.number.isRequired,
  currentEnvironmentOption: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentProject: state.projects.currentProject,
  currentMode: state.modeControl.currentMode,
  mapEnvironment: state.environmentControls.mapEnvironment,
  bgSolid: state.environmentControls.bgSolid,
  bgEnvironment: state.environmentControls.bgEnvironment,
  bgColor: state.environmentControls.bgColor,
  ambientLight: state.lightControls.ambientLight,
  directionalLight: state.lightControls.directionalLight,
  hemisphereLight: state.lightControls.hemisphereLight,
  ambientIntensity: state.lightControls.ambientLightIntensity,
  directionalIntensity: state.lightControls.directionalLightIntensity,
  hemisphereIntensity: state.lightControls.hemisphereLightIntensity,
  ambientColor: state.lightControls.ambientLightColor,
  directionalColor: state.lightControls.directionalLightColor,
  hemisphereColor: state.lightControls.hemisphereLightColor,
  currentConfigurationId: state.configurations.currentConfigurationId,
  currentEnvironmentOption: state.environmentControls.currentEnvironmentOption
});

export default connect(mapStateToProps)(StudioTopBar);
