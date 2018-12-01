import configureUserModule from './user';
import configureAuthModule from './auth';
import { extractActions, extractReducers } from './extract';

const configureModules = async (services) => {
  const authModule = configureAuthModule(services);
  const userModule = configureUserModule(services, { auth: authModule });

  const modules = {
    user: userModule,
    auth: authModule,
  };

  return {
    actions: extractActions(modules),
    reducers: extractReducers(modules),
  };
};

export default configureModules;
