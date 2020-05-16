export const deleteConfiguration = (configurations, configId) => {
  const newConfigurations = [];

  configurations.forEach(configuration => {
    if (configuration.id !== configId) {
      newConfigurations.push(configuration);
    }
  });

  return newConfigurations;
};

export const updateConfiguration = (configurations, configId, configData) => {
  const newConfigurations = configurations;

  configurations.forEach(configuration => {
    if (configuration.id === configId) {
      configuration.config_data = configData;
    }
  });

  return newConfigurations;
};
