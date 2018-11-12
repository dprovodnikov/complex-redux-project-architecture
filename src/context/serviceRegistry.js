import { createRegistry, initRegistry } from 'mag-service-registry';

const registry = createRegistry();
export const populateServiceRegistry = initRegistry(registry);

export default registry.exposeRegistered();