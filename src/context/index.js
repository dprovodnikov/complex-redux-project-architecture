import actions, { registerActions } from './actionRegistry';
import services, { registerServices } from './serviceRegistry';

export {
  actions,
  services,
};

export default {
  actions,
  registerActions,
  services,
  registerServices,
};
