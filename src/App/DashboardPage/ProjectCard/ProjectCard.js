import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Box,
  IconButton
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import SwipePictures from "../../UI/SwipePictures/SwipePictures";

import "./ProjectCard.scss";

const ProjectCard = props => (
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
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              classes={{ root: "action-button" }}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </span>
        </span>
        <Divider variant="fullWidth" classes={{ root: "horizontal-divider" }} />
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
  </div>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshots: PropTypes.array.isRequired
};

export default ProjectCard;
