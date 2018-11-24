import initActions from './actions';
import initReducer from './reducer';

const configureAuthModule = (services) => {
  const actions = initActions(services.authService);
  const reducer = initReducer(services.authService);

  return { actions, reducer };
};

export default configureAuthModule;
