function createRegistry() {
  const registered = {};

  const registerService = (alias, service) => {
    registered[alias] = service;
  };

  const register = services =>
    Object.entries(services).map(entry => registerService(...entry));

  const get = alias => registered[alias];

  const disposeRegistered = () => registered;

  return {
    disposeRegistered,
    register,
    get,
  };
};

export default createRegistry;