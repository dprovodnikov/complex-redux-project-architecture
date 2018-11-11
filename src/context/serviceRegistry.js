import { createRegistry, initRegistry } from '../utils/registry';

export const registry = createRegistry();
export const populateServiceRegistry = initRegistry(registry);

export default registry.disposeRegistered();