import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Box,
  IconButton,
  TextField
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

import Loader from "../../UI/Loader/Loader";
import SwipePictures from "../../UI/SwipePictures/SwipePictures";

import * as actions from "../../../store/actions/index";

import "./ProjectCard.scss";

const ProjectCard = props => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [edit, setEdit] = useState(false);
  const [nameField, setNameField] = useState(props.name);
  const [descriptionField, setDescriptionField] = useState(props.description);
  const [loader, setLoader] = useState(false);

  const saveChanges = () => {
    props.onUpdateProjectDetails(
      props.id,
      nameField.trim(),
      descriptionField.trim()
    );

    setNameField(nameField.trim());
    setDescriptionField(descriptionField.trim());

    props.handleSnackBarClose();
    setEdit(false);
    props.handleSnackBarOpen("success", "Changes saved!");
  };

  const destroyProject = () => {
    props.onDeleteProject(props.id);

    setConfirmDelete(false);
    props.handleSnackBarOpen("success", "Project deleted!");
  };

  const confirmDeleteModal = (
    <div className="confirm-delete-modal">
      {loader ? (
        <Loader />
      ) : (
        <Fragment>
          <Typography gutterBottom variant="subtitle1">
            <Box fontWeight={700}>
              Are you sure you want to permanently delete this project?
            </Box>
          </Typography>
          <div className="confirm-actions">
            <span className="gradient-button">
              <Button
                onClick={destroyProject}
                variant="contained"
                color="primary"
              >
                Delete
              </Button>
            </span>
            <span className="cancel-button">
              <Button
                onClick={() => setConfirmDelete(false)}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </span>
          </div>
        </Fragment>
      )}
    </div>
  );

  const editModal = (
    <div className="edit-modal">
      {loader ? (
        <Loader />
      ) : (
        <Fragment>
          <Typography gutterBottom variant="h6" component="h2">
            <Box fontWeight={700}>Project Details</Box>
          </Typography>
          <form>
            <TextField
              required
              id="outlined-textarea"
              label="Name"
              rowsMax={2}
              placeholder="Placeholder"
              multiline
              variant="outlined"
              value={nameField}
              onChange={e => setNameField(e.target.value.slice(0, 40))}
            />
            <TextField
              required
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              rowsMax={4}
              value={descriptionField}
              onChange={e => setDescriptionField(e.target.value)}
              variant="outlined"
            />
          </form>
          <div className="confirm-actions">
            <span className="back-button">
              <Button onClick={() => setEdit(false)} color="primary">
                <ArrowBackRoundedIcon />
                Back
              </Button>
            </span>
            <span className="gradient-button">
              <Button onClick={saveChanges} variant="contained" color="primary">
                Save
              </Button>
            </span>
          </div>
        </Fragment>
      )}
    </div>
  );

  return (
    <div className="project-card">
      <Card classes={{ root: "single-card" }}>
        <SwipePictures pictures={props.screenshots.slice(0, 3)} />
        <CardContent classes={{ root: "content-area" }}>
          <Typography gutterBottom variant="h6" component="h2">
            <Box fontWeight={700}>{props.name}</Box>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            classes={{ root: "project-description" }}
          >
            {props.description}
          </Typography>
          <Divider
            variant="fullWidth"
            classes={{ root: "horizontal-divider-upper" }}
          />
          <span className="section">
            <span className="dates">
              <Box fontWeight={500}>
                <Typography variant="caption" component="p">
                  Created: Jan 2, 2019
                </Typography>
              </Box>
              <Typography variant="caption" component="p">
                Updated: Mar 4, 2020
              </Typography>
            </span>
            <span className="action-buttons">
              <IconButton
                aria-label="edit"
                classes={{ root: "action-button" }}
                size="small"
                onClick={() => setEdit(true)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                classes={{ root: "action-button" }}
                size="small"
                onClick={() => setConfirmDelete(true)}
              >
                <DeleteIcon />
              </IconButton>
            </span>
          </span>
          <Divider
            variant="fullWidth"
            classes={{ root: "horizontal-divider" }}
          />
          <span className="gradient-button">
            <Button
              classes={{ root: "open-in-studio" }}
              variant="contained"
              color="primary"
              startIcon={<CameraIcon />}
            >
              Open in Studio
            </Button>
          </span>
        </CardContent>
      </Card>
      {confirmDelete && confirmDeleteModal}
      {edit && editModal}
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshots: PropTypes.array.isRequired,
  onUpdateProjectDetails: PropTypes.func.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  id: PropTypes.number,
  handleSnackBarClose: PropTypes.func.isRequired,
  handleSnackBarOpen: PropTypes.func.isRequired
};

const MapDispatchToProps = dispatch => ({
  onUpdateProjectDetails: (id, name, description) =>
    dispatch(actions.updateProjectDetails(id, name, description)),
  onDeleteProject: id => dispatch(actions.deleteProject(id))
});

export default connect(null, MapDispatchToProps)(ProjectCard);
