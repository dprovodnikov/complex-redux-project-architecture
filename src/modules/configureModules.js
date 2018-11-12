import { combineReducers } from 'redux';
import { populateActionRegistry } from '../context/actionRegistry';
import configureUserModule from './user';
import configureStore from './configureStore';

const configureModules = async (services) => {
  const userModule = configureUserModule(services);

  const reducers = combineReducers({
    user: userModule.reducer,
  });

  const actions = {
    user: userModule.actions,
  };

  await populateActionRegistry(register => register(actions));

  return configureStore(reducers);
};

export { configureModules };
