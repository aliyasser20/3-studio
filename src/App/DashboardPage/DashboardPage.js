import React from "react";
import NewProject from "./NewProject/NewProject";

import ProjectCard from "./ProjectCard/ProjectCard";

const DashboardPage = () => (
  <div className="dashboard-page">
    <h1>Dashboard Page</h1>
    <NewProject />
    <ProjectCard />
  </div>
);

export default DashboardPage;
