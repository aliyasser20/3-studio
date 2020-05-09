import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";

import ProjectCard from "./ProjectCard/ProjectCard";

import "./Dashboard.scss";

const DashboardPage = props => {
  const projectCards = props.allProjects.map(project => (
    <ProjectCard key={project.id} {...project} />
  ));

  return (
    <div className="dashboard-page">
      <Container maxWidth="xl">
        <h1>Dashboard Page</h1>
        <div className="projects">{projectCards}</div>
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
