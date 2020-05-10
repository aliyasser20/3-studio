export const updateProjectDetails = (
  projects,
  projectId,
  newName,
  newDescription
) => {
  // eslint-disable-next-line
  for (const project in projects) {
    if (project.id === projectId) {
      project.name = newName;
      project.description = newDescription;
    }
  }

  return projects;
};
