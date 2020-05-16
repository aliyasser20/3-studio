import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Button,
  Popover,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import * as actions from "../../../../store/actions/index";
import backendAxios from "../../../../axiosInstances/backendAxios";

import "./ConfigurationSelector.scss";

const ConfigurationSelector = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [createConfiguration, setCreateConfiguration] = useState(false);
  const [configurationNameField, setConfigurationNameField] = useState("");
  const [copyCurrentConfiguration, setCopyCurrentConfiguration] = useState(
    false
  );

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const newConfiguration = () => {
    const newConfigData = {
      name: configurationNameField,
      projectId: props.currentProject.id
    };

    if (copyCurrentConfiguration) {
      newConfigData.config_data = {
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
      };
    }

    backendAxios
      .post("/api/configurations", newConfigData)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => console.log(err));
  };

  const configurationOptions = props.allConfigurations.map(configuration => {
    const optionClasses =
      props.currentConfigurationName === configuration.name
        ? "configuration-option selected"
        : "configuration-option";

    const handleSelectConfigurationOption = () => {
      props.onSetCurrentConfigurationName(configuration.name);
      props.onSetCurrentConfigurationId(configuration.id);
      props.onSetConfiguration(JSON.parse(configuration.config_data));
    };

    return (
      <div
        key={configuration.name}
        className={optionClasses}
        onClick={handleSelectConfigurationOption}
      >
        <p className="configuration-name">{configuration.name}</p>
        <IconButton
          aria-label="delete-configuration"
          classes={{ root: "delete-configuration-button" }}
          size="small"
          // onClick={() => fileExporter()}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    );
  });

  return (
    <div className="configuration-selector">
      <span className="gradient-button">
        <Button
          onClick={handleClick}
          variant="contained"
          endIcon={<ExpandMoreIcon />}
        >
          {props.currentConfigurationName}
        </Button>
      </span>
      <Popover
        className="configuration-selector-popover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <div className="configuration-selector-popover-content">
          <div className="configuration-options">{configurationOptions}</div>
          <div className="add-configuration-area">
            <span className="gradient-button">
              <Button
                onClick={() => {
                  handleClose();
                  setCreateConfiguration(true);
                }}
                variant="contained"
                startIcon={<AddIcon />}
              >
                New Configuration
              </Button>
            </span>
          </div>
        </div>
      </Popover>
      <Dialog
        className="create-configuration-dialog"
        open={createConfiguration}
        onClose={() => setCreateConfiguration(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialog-title" id="alert-dialog-title">
          New Configuration
        </DialogTitle>
        <DialogContent>
          <TextField
            value={configurationNameField}
            className="name-field"
            autoFocus
            margin="dense"
            id="name"
            label="Configuration Name"
            type="text"
            fullWidth
            onChange={e =>
              setConfigurationNameField(e.target.value.slice(0, 10))
            }
          />
          <FormControlLabel
            className="checkbox-area"
            control={
              <Checkbox
                checked={copyCurrentConfiguration}
                onChange={() =>
                  setCopyCurrentConfiguration(!copyCurrentConfiguration)
                }
                name="copyConfiguration"
              />
            }
            label="Copy current configuration"
          />
        </DialogContent>
        <DialogActions>
          <Button
            classes={{ root: "cancel-create-configuration" }}
            onClick={() => setCreateConfiguration(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            classes={{ root: "confirm-create-configuration" }}
            // onClick={newConfiguration}
            color="primary"
            autoFocus
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfigurationSelector.propTypes = {
  currentConfigurationName: PropTypes.string.isRequired,
  allConfigurations: PropTypes.array.isRequired,
  onSetCurrentConfigurationName: PropTypes.func.isRequired,
  onSetCurrentConfigurationId: PropTypes.func.isRequired,
  onSetConfiguration: PropTypes.func.isRequired,
  currentProject: PropTypes.object.isRequired,
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
  currentEnvironmentOption: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentConfigurationName: state.configurations.currentConfigurationName,
  allConfigurations: state.configurations.allConfigurations,
  currentProject: state.projects.currentProject,
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

const mapDispatchToProps = dispatch => ({
  onSetCurrentConfigurationName: name =>
    dispatch(actions.setCurrentConfigurationName(name)),
  onSetCurrentConfigurationId: id =>
    dispatch(actions.setCurrentConfigurationId(id)),
  onSetConfiguration: config => dispatch(actions.setConfiguration(config))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationSelector);
