import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper } from "@material-ui/core";

import backendAxios from "../../../../../axiosInstances/backendAxios";

import "./ScreenshotsBar.scss";

const ScreenshotsBar = props => {
  let classes;
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
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

  console.log(screenshots);

  const screenshotsComponents = screenshots.map(screenshot => (
    <img
      className="screenshot-image"
      key={screenshot.path}
      src={screenshot.path}
      alt={screenshot.label}
    />
  ));

  return (
    <div className="screenshots-bar">
      <Paper classes={{ root: "custom-paper" }} elevation={3}>
        <div className="screenshots">{screenshotsComponents}</div>
      </Paper>
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
