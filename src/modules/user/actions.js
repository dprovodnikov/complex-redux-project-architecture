import types from './types';
import { actionCreator } from './utils';

const initActions = function (userService) {
  const fetchUsersSuccess = actionCreator(types.FETCH_USERS_SUCCESS);

  const fetchUsers = () => async (dispatch) => {
    const users = await userService.getUsers();

    dispatch(fetchUsersSuccess(users));
  };

  return { fetchUsers };
};

export default initActions;
