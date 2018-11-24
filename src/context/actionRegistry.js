import createRegistry from 'mag-service-registry';

const registry = createRegistry();

export const registerActions = registry.register;

export default registry.exposeRegistered();