import actionCreator from 'action-creator-redux';

const initActions = function (types, services) {
  const fetchUsersSuccess = actionCreator(types.FETCH_USERS_SUCCESS);
  const createUserSuccess = actionCreator(types.CREATE_USER_SUCCESS);
  const removeUserSuccess = actionCreator(types.REMOVE_USER_SUCCESS);

  const fetchUsers = () => async (dispatch) => {
    const users = await services.user.getUsers();

    dispatch(fetchUsersSuccess(users));
  };

  const createUser = name => async (dispatch) => {
    const user = await services.user.createUser(name);

    dispatch(createUserSuccess(user));
  };

  const removeUser = user => async (dispatch) => {
    await services.user.removeUser(user);

    dispatch(removeUserSuccess(user.id));
  };

  return { fetchUsers, createUser, removeUser };
};

export default initActions;
