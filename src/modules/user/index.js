import initActions from './actions';
import initReducer from './reducer';
import types from './types';

const configureUserModule = (services, modules) => {
  const actions = initActions(types, {
    user: services.userService,
  });

  // merge user types with some other module's types
  const reducerTypes = {
    ...types,
    LOGOUT_SUCCESS: modules.auth.types.LOGOUT_SUCCESS,
  };

  const reducer = initReducer(reducerTypes);

  return { actions, reducer, types };
};

export default configureUserModule;
