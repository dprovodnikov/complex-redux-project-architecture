import { populateActionRegistry } from '../context/actionRegistry';

const registerActions = async (actions) => {
  return populateActionRegistry(register => register(actions));
};

export default registerActions;
