import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper, Dialog } from "@material-ui/core";

import backendAxios from "../../../../../axiosInstances/backendAxios";

import "./ScreenshotsBar.scss";

const ScreenshotsBar = props => {
  const [screenshots, setScreenshots] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log("here");
    backendAxios
      .get("/api/screenshots", {
        params: {
          projectId: props.currentProject.id
        }
      })
      .then(resp => {
        setScreenshots(resp.data.screenshots);
      })
      .catch(err => console.log(err));
  }, [props.currentProject.id]);

  const screenshotsComponents = screenshots.map(screenshot => (
    <img
      className="screenshot-image"
      key={screenshot.path}
      src={screenshot.path}
      alt={screenshot.label}
      onClick={() => {
        setImage(screenshot);
        setOpenDialog(true);
      }}
    />
  ));

  return (
    <div className="screenshots-bar">
      <Paper classes={{ root: "custom-paper" }} elevation={3}>
        <div className="screenshots">{screenshotsComponents}</div>
      </Paper>
      <Dialog
        classes={{ root: "screenshot-view-dialog" }}
        open={openDialog}
        onClose={() => {
          setImage(null);
          setOpenDialog(false);
        }}
        aria-labelledby="Update picture"
      >
        {image && (
          <div className="image-container">
            <img
              className="big-screenshot-image"
              src={image.path}
              alt={image.label}
            />
            <p className="label">{image.label}</p>
          </div>
        )}
      </Dialog>
    </div>
  );
};

ScreenshotsBar.propTypes = {
  currentProject: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentProject: state.projects.currentProject
});

export default connect(mapStateToProps, null)(ScreenshotsBar);
