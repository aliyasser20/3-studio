import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";

import SwipePictures from "../../UI/SwipePictures/SwipePictures";

import "./ProjectCard.scss";

const ProjectCard = props => (
  <div className="project-card">
    <Card classes={{ root: "single-card" }}>
      <SwipePictures pictures={props.screenshots.slice(0, 3)} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <div className="section">
          <Typography variant="body2" color="textSecondary" component="p">
            Created:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Updated:
          </Typography>
        </div>
        <Divider variant="middle" />
        <span className="gradient-button">
          <Button
            variant="contained"
            color="primary"
            startIcon={<CameraIcon />}
            // onClick={fileExporter}
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
