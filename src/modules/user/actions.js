import types from './types';
import { actionCreator } from './utils';

const initActions = function (userService) {
  const fetchUsersSuccess = actionCreator(types.FETCH_USERS_SUCCESS);
  const createUserSuccess = actionCreator(types.CREATE_USER_SUCCESS);

  const fetchUsers = () => async (dispatch) => {
    const users = await userService.getUsers();

    dispatch(fetchUsersSuccess(users));
  };

  const createUser = (name) => async (dispatch) => {
    const user = await userService.createUser(name);

    dispatch(createUserSuccess(user));
  };

  return { fetchUsers, createUser };
};

export default initActions;
