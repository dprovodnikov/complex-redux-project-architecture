import types from './types';
import { actionCreator } from '../utils';

const initActions = () => {
  const loginAttempt = actionCreator(types.LOGIN_ATTEMPT);
  const loginSuccess = actionCreator(types.LOGIN_SUCCESS);

  const login = () => (dispatch) => {
    dispatch(loginAttempt());
    dispatch(loginSuccess());
  };

  return {
    login,
  };
};

export default initActions;
