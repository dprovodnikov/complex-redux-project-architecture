import createRegistry from 'mag-service-registry';

const registry = createRegistry();

export const registerServices = registry.register;

export default registry.exposeRegistered();