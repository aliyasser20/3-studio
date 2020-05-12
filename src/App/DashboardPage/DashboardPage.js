import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Snackbar } from "@material-ui/core";

import ProjectCard from "./ProjectCard/ProjectCard";
import NewProject from "./NewProject/NewProject";
import Alert from "../UI/Alert/Alert";
import Loader from "../UI/Loader/Loader";

import { useAuth0 } from "../../react-auth0-spa";
import * as actions from "../../store/actions/index";

import "./Dashboard.scss";

const DashboardPage = props => {
  const { user } = useAuth0();

  // Get projects from backend
  useEffect(() => {
    props.onGetProjects(user.sub);
    // eslint-disable-next-line
  }, []);

  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);

    // Must come after setting to false
    setSnackBarMessage("");
    setSnackBarStatus("");
  };

  const handleSnackBarOpen = (status, message) => {
    setSnackBarStatus(status);
    setSnackBarMessage(message);

    // Must come after setting status and message
    setSnackBarOpen(true);
  };

  const projectCards = props.allProjects
    .reverse()
    .map(project => (
      <ProjectCard
        handleSnackBarClose={handleSnackBarClose}
        handleSnackBarOpen={handleSnackBarOpen}
        key={project.id}
        {...project}
      />
    ));

  const snackBar = (
    <Snackbar
      open={snackBarOpen}
      autoHideDuration={6000}
      onClose={handleSnackBarClose}
    >
      <Alert onClose={handleSnackBarClose} severity={snackBarStatus}>
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );

  return (
    <div className="dashboard-page">
      <Container maxWidth="xl" classes={{ root: "container-padding" }}>
        <div className="project-area">
          <h1>Dashboard</h1>
          <NewProject />
        </div>
        {props.allProjects.length > 0 ? (
          <div className="projects">{projectCards}</div>
        ) : (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        {snackBarOpen && snackBar}
      </Container>
    </div>
  );
};

DashboardPage.propTypes = {
  allProjects: PropTypes.array,
  onGetProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  allProjects: state.projects.allProjects
});

const mapDispatchToProps = dispatch => ({
  onGetProjects: userId => dispatch(actions.getProjects(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
