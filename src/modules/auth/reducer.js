import update from 'update-by-path';
import types from './types';

const initReducer = (authService) => {
  const INITIAL_STATE = {
    isAuthenticated: authService.isAuthenticated(),
    isAuthenticating: false,
    error: null,
  };

  const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
      case types.LOGIN_ATTEMPT:
        return update(state, { isAuthenticating: true });
      case types.LOGIN_SUCCESS:
        return update(state, {
          isAuthenticating: false,
          isAuthenticated: true,
        });
      case types.LOGIN_FAILURE:
        return update(state, {
          isAuthenticating: false,
          error: payload,
        });
      default:
        return state;
    }
  };

  return reducer;
};

export default initReducer;

