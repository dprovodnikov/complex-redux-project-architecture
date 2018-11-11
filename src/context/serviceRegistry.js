import { createRegistry, initRegistry } from '../utils/registry';

const registry = createRegistry();
export const populateServiceRegistry = initRegistry(registry);

export default registry.disposeRegistered();