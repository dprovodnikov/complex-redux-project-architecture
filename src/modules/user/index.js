import initActions from './actions';
import initReducer from './reducer';

const configureUserModule = (services) => {
  const actions = initActions(services.userService);
  const reducer = initReducer();

  return { actions, reducer };
};

export default configureUserModule;
