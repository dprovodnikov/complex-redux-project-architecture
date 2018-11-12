import configureStore from './configureStore';
import configureUserModule from './user';
import registerActions from './register';

const configureModules = async (services) => {
  const userModule = configureUserModule(services);

  await registerActions({
    user: userModule.actions,
  });

  const store = configureStore({
    user: userModule.reducer,
  });

  return store;
};

export default configureModules;
