import initActions from './actions';
import initReducer from './reducer';
import types from './types';

const configureUserModule = (services) => {
  const actions = initActions(types, {
    user: services.userService,
  });

  const reducer = initReducer(types);

  return { actions, reducer };
};

export default configureUserModule;
