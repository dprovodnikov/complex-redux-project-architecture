import initActions from './actions';
import initReducer from './reducer';
import types from './types';

const configureAuthModule = (services) => {
  const actions = initActions(types, {
    auth: services.authService,
  });

  const reducer = initReducer(types, {
    auth: services.authService,
  });

  return { actions, reducer, types };
};

export default configureAuthModule;
