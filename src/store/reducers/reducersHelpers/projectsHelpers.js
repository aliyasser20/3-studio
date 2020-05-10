export const updateProjectDetails = (
  projects,
  projectId,
  newName,
  newDescription
) => {
  // eslint-disable-next-line
  for (const project of projects) {
    if (project.id === projectId) {
      project.name = newName;
      project.description = newDescription;
    }
  }

  console.log(projects);
  return projects;
};
