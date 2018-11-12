import { createRegistry, initRegistry } from 'mag-service-registry';

const registry = createRegistry();

export const populateActionRegistry = initRegistry(registry);

export default registry.exposeRegistered();