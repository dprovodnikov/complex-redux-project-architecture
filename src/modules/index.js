import configureStore from './configureStore';
import configureUserModule from './user';
import context from '../context';

const configureModules = async (services) => {
  const userModule = configureUserModule(services);

  context.registerActions({
    user: userModule.actions,
  });

  const store = configureStore({
    user: userModule.reducer,
  });

  return store;
};

export default configureModules;
