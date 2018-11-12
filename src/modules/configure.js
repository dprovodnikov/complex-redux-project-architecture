import { combineReducers } from 'redux';
import configureUserModule from './user';
import { populateActionRegistry } from '../context/actionRegistry';
import configureStore from '../configureStore';

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

export default configureModules;
