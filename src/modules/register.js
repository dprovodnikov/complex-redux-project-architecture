import { populateActionRegistry } from '../context/actionRegistry';

const registerActions = async (actions) => {
  await populateActionRegistry(register => register(actions));
};

export default registerActions;
