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
  TextField,
  FormControlLabel,
  Checkbox,
  Snackbar
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import Alert from "../../../UI/Alert/Alert";

import * as actions from "../../../../store/actions/index";
import backendAxios from "../../../../axiosInstances/backendAxios";
import { useAuth0 } from "../../../../react-auth0-spa";

import "./ConfigurationSelector.scss";

const ConfigurationSelector = props => {
  const { user } = useAuth0();

  const [anchorEl, setAnchorEl] = useState(null);
  const [createConfiguration, setCreateConfiguration] = useState(false);
  const [configurationNameField, setConfigurationNameField] = useState("");
  const [copyCurrentConfiguration, setCopyCurrentConfiguration] = useState(
    false
  );
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [configToDelete, setConfigToDelete] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSnackBarClose = () => {
    // Order is important
    setSnackBarOpen(false);
  };

  const handleCancelNewConfig = () => {
    setCreateConfiguration(false);
    setConfigurationNameField("");
    setCopyCurrentConfiguration(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const saveConfig = () =>
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
            ambientLightColor: props.ambientLightColor,
            directionalLightColor: props.directionalLightColor,
            hemisphereLightColor: props.hemisphereLightColor,
            materials: []
          }
        }
      })
      .then(resp => {
        props.onSetConfigurationSaved();
      })
      .catch(err => {
        console.log(err);
      });

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
        ambientLightColor: props.ambientLightColor,
        directionalLightColor: props.directionalLightColor,
        hemisphereLightColor: props.hemisphereLightColor,
        materials: []
      };
    } else {
      newConfigData.config_data = {
        bgEnvironment: false,
        bgSolid: true,
        bgColor: "525252",
        mapEnvironment: true,
        currentEnvironmentOption: {
          name: "studio-1",
          hdrPath:
            "https://res.cloudinary.com/aajfinal/raw/upload/v1589352709/environments/studio-1_ugueaj.hdr",
          imgPath:
            "https://res.cloudinary.com/aajfinal/image/upload/v1589352866/environments/studio-1_sl7xag.jpg"
        },
        ambientLight: true,
        directionalLight: true,
        hemisphereLight: true,
        ambientLightIntensity: 0.3,
        directionalLightIntensity: 0.8 * Math.PI,
        hemisphereLightIntensity: 1,
        ambientLightColor: "ffffff",
        directionalLightColor: "ffffff",
        hemisphereLightColor: "ffffff",
        materials: []
      };
    }

    backendAxios
      .post("/api/configurations", {
        configuration: newConfigData
      })
      .then(resp => {
        // ! Order here is very important because of stringify!!!
        saveConfig().then(() => {
          newConfigData.id = resp.data.id;
          props.onUpdateConfiguration(
            props.currentConfigurationId,
            JSON.stringify({
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
              ambientLightColor: props.ambientLightColor,
              directionalLightColor: props.directionalLightColor,
              hemisphereLightColor: props.hemisphereLightColor,
              materials: []
            })
          );

          props.onSetConfiguration(newConfigData.config_data);

          newConfigData.config_data = JSON.stringify(newConfigData.config_data);

          props.onAddConfiguration(newConfigData);
          props.onSetCurrentConfigurationName(configurationNameField);
          props.onSetCurrentConfigurationId(resp.data.id);

          // Order is important
          setMessage(
            `Switched to new configuration: ${configurationNameField}`
          );
          setSeverity("success");
          setSnackBarOpen(true);
          setCreateConfiguration(false);
          setConfigurationNameField("");
          setCopyCurrentConfiguration(false);
        });
      })
      .catch(err => {
        console.log(err);

        // Order is important
        setMessage("Could not create new configuration!");
        setSeverity("error");
        setSnackBarOpen(true);
        setCreateConfiguration(false);
        setConfigurationNameField("");
        setCopyCurrentConfiguration(false);
      });
  };

  const deleteConfiguration = () => {
    backendAxios
      .delete("/api/configurations", {
        data: {
          configurationId: configToDelete.id,
          userId: user.sub
        }
      })
      .then(resp => {
        console.log(resp);

        // Order is important
        props.onDeleteConfiguration(configToDelete.id);

        if (props.currentConfigurationId === configToDelete.id) {
          props.onSetConfiguration(
            JSON.parse(props.allConfigurations[0].config_data)
          );
          props.onSetCurrentConfigurationName(props.allConfigurations[0].name);
          props.onSetCurrentConfigurationId(props.allConfigurations[0].id);
        }

        setMessage("Configuration successfully deleted!");
        setSeverity("success");
        setSnackBarOpen(true);
        setConfirmDelete(false);
        setConfigToDelete(null);
      })
      .catch(err => {
        console.log(err);

        setMessage("Could not delete configuration!");
        setSeverity("error");
        setSnackBarOpen(true);
        setConfirmDelete(false);
        setConfigToDelete(null);
      });
  };

  const garbageClick = (e, configId, configName) => {
    e.stopPropagation();

    setConfigToDelete({
      id: configId,
      name: configName
    });

    setConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setConfigToDelete(null);
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
        key={configuration.id}
        className={optionClasses}
        onClick={handleSelectConfigurationOption}
      >
        <p className="configuration-name">{configuration.name}</p>
        {configuration.name !== "default" && (
          <IconButton
            aria-label="delete-configuration"
            classes={{ root: "delete-configuration-button" }}
            size="small"
            onClick={e => garbageClick(e, configuration.id, configuration.name)}
          >
            <DeleteIcon />
          </IconButton>
        )}
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
        onClose={handleCancelNewConfig}
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
            onClick={handleCancelNewConfig}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            classes={{ root: "confirm-create-configuration" }}
            onClick={newConfiguration}
            color="primary"
            autoFocus
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        className="create-configuration-dialog"
        open={confirmDelete}
        onClose={handleCancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          className="config-delete-dialog-title"
          id="alert-dialog-title"
        >
          Are you sure you want to permanently delete the{" "}
          <span className="config-to-delete">
            {configToDelete ? configToDelete.name : ""}
          </span>{" "}
          configuration?
        </DialogTitle>
        <DialogActions>
          <Button
            classes={{ root: "cancel-create-configuration" }}
            onClick={handleCancelDelete}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            classes={{ root: "confirm-create-configuration" }}
            onClick={deleteConfiguration}
            color="primary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
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
  directionalLightColor: PropTypes.string.isRequired,
  hemisphereLightColor: PropTypes.string.isRequired,
  ambientLightColor: PropTypes.string.isRequired,
  currentEnvironmentOption: PropTypes.object.isRequired,
  onAddConfiguration: PropTypes.func.isRequired,
  currentConfigurationId: PropTypes.number.isRequired,
  onSetConfigurationSaved: PropTypes.func.isRequired,
  onDeleteConfiguration: PropTypes.func.isRequired,
  onUpdateConfiguration: PropTypes.func.isRequired
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
  ambientLightColor: state.lightControls.ambientLightColor,
  directionalLightColor: state.lightControls.directionalLightColor,
  hemisphereLightColor: state.lightControls.hemisphereLightColor,
  currentConfigurationId: state.configurations.currentConfigurationId,
  currentEnvironmentOption: state.environmentControls.currentEnvironmentOption
});

const mapDispatchToProps = dispatch => ({
  onSetCurrentConfigurationName: name =>
    dispatch(actions.setCurrentConfigurationName(name)),
  onSetCurrentConfigurationId: id =>
    dispatch(actions.setCurrentConfigurationId(id)),
  onSetConfiguration: config => dispatch(actions.setConfiguration(config)),
  onAddConfiguration: config => dispatch(actions.addConfiguration(config)),
  onSetConfigurationSaved: () => dispatch(actions.setConfigurationSaved()),
  onDeleteConfiguration: configId =>
    dispatch(actions.deleteConfiguration(configId)),
  onUpdateConfiguration: (configId, configData) =>
    dispatch(actions.updateConfiguration(configId, configData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationSelector);
