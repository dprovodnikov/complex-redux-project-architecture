import { createRegistry, initRegistry } from '../utils/registry';

export const registry = createRegistry();
export const populateActionRegistry = initRegistry(registry);

export default registry.disposeRegistered();