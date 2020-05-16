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

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
  };

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
        newConfigData.id = resp.data.id;
        newConfigData.config_data = JSON.stringify(newConfigData.config_data);

        saveConfig();

        props.onAddConfiguration(newConfigData);
        props.onSetCurrentConfigurationName(configurationNameField);
        props.onSetCurrentConfigurationId(resp.data.id);
        setCreateConfiguration(false);
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
        key={configuration.id}
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
            onClick={newConfiguration}
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
  directionalLightColor: PropTypes.string.isRequired,
  hemisphereLightColor: PropTypes.string.isRequired,
  ambientLightColor: PropTypes.string.isRequired,
  currentEnvironmentOption: PropTypes.object.isRequired,
  onAddConfiguration: PropTypes.func.isRequired,
  currentConfigurationId: PropTypes.number.isRequired,
  onSetConfigurationSaved: PropTypes.func.isRequired
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
  onSetConfigurationSaved: () => dispatch(actions.setConfigurationSaved())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationSelector);
