export const deleteConfiguration = (configurations, configId) => {
  const newConfigurations = [];

  configurations.forEach(configuration => {
    if (configuration.id !== configId) {
      newConfigurations.push(configuration);
    }
  });

  return newConfigurations;
};
