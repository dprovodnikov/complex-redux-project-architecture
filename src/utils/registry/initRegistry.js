const initRegistry = registry => async (configure) => {
  await configure(registry.register);

  return registry.disposeRegistered();
};

export default initRegistry;
