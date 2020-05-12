export const updateProjectDetails = (
  projects,
  projectId,
  newName,
  newDescription
) => {
  for (const project of projects) {
    if (project.id === projectId) {
      project.name = newName;
      project.description = newDescription;
    }
  }

  return projects;
};

export const deleteProject = (projects, projectId) => {
  const newProjects = [];

  projects.forEach(project => {
    if (project.id !== projectId) {
      newProjects.push(project);
    }
  });

  return newProjects;
};

export const saveProjectIdToSessionStorage = projectId => {
  sessionStorage.setItem("currentProjectId", projectId);
};

export const findProject = (projects, id) => {
  for (const project of projects) {
    if (project.id === id) {
      saveProjectIdToSessionStorage(project.id);
      return project;
    }
  }

  return null;
};
