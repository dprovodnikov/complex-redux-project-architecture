import actionCreator from 'action-creator-redux';

const initActions = (types, services) => {
  const loginAttempt = actionCreator(types.LOGIN_ATTEMPT);
  const loginSuccess = actionCreator(types.LOGIN_SUCCESS);
  const loginFailure = actionCreator(types.LOGIN_FAILURE);

  const login = email => async (dispatch) => {
    dispatch(loginAttempt());

    try {
      await services.auth.login(email);
      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

  return Object.freeze({
    login,
  });
};

export default initActions;
