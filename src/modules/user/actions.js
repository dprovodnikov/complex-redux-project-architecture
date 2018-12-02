import actionCreator from 'action-creator-redux';

const initActions = function (types, services) {
  const fetchSuccess = actionCreator(types.FETCH_USERS_SUCCESS);
  const createSuccess = actionCreator(types.CREATE_USER_SUCCESS);
  const removeSuccess = actionCreator(types.REMOVE_USER_SUCCESS);

  const fetchUsers = () => async (dispatch) => {
    const users = await services.user.getUsers();
    dispatch(fetchSuccess(users));
  };

  const createUser = name => async (dispatch) => {
    const user = await services.user.createUser(name);
    dispatch(createSuccess(user));
  };

  const removeUser = user => async (dispatch) => {
    await services.user.removeUser(user);
    dispatch(removeSuccess(user.id));
  };

  return { fetchUsers, createUser, removeUser };
};

export default initActions;
