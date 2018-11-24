import types from './types';
import { actionCreator } from '../utils';

const initActions = (authService) => {
  const loginAttempt = actionCreator(types.LOGIN_ATTEMPT);
  const loginSuccess = actionCreator(types.LOGIN_SUCCESS);
  const loginFailure = actionCreator(types.LOGIN_FAILURE);

  const login = email => async (dispatch) => {
    dispatch(loginAttempt());

    try {
      await authService.login(email);
      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

  return {
    login,
  };
};

export default initActions;
