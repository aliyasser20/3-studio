import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Snackbar } from "@material-ui/core";

import ProjectCard from "./ProjectCard/ProjectCard";
import NewProject from "./NewProject/NewProject";
import Alert from "../UI/Alert/Alert";

import "./Dashboard.scss";

const DashboardPage = props => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
    setSnackBarMessage("");
    setSnackBarStatus("");
  };

  const handleSnackBarOpen = (status, message) => {
    setSnackBarOpen(true);
    setSnackBarStatus(status);
    setSnackBarMessage(message);
  };

  const projectCards = props.allProjects.map(project => (
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
        <h1>Dashboard Page</h1>
        <div className="projects">{projectCards}</div>
        {snackBarOpen && snackBar}
        <NewProject />
      </Container>
    </div>
  );
};

DashboardPage.propTypes = {
  allProjects: PropTypes.array
};

const mapStateToProps = state => ({
  allProjects: state.projects.allProjects
});

export default connect(mapStateToProps, null)(DashboardPage);
