import configureUserModule from './user';
import { combineReducers } from 'redux';

const configureModules = async (services) => {
  const userModule = configureUserModule(services);

  const reducers = combineReducers({
    user: userModule.reducer,
  });

  const actions = {
    user: userModule.actions,
  };

  return { reducers, actions };
};

export default configureModules;
