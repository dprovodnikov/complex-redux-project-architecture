import configureStore from './configureStore';
import configureUserModule from './user';
import configureAuthModule from './auth';
import context from '../context';

const configureModules = async (services) => {
  const authModule = configureAuthModule(services);
  const userModule = configureUserModule(services);

  context.registerActions({
    user: userModule.actions,
    auth: authModule.actions,
  });

  const store = configureStore({
    user: userModule.reducer,
    auth: authModule.reducer,
  });

  return store;
};

export default configureModules;
