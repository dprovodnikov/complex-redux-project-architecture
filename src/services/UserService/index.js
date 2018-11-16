import User from './model';

const UserService = function (storage) {
  const STORAGE_KEY = 'user_storage_key';

  const getUsers = async () => {
    return storage.getList(STORAGE_KEY);
  };

  const createUser = async (name) => {
    const user = User(name);

    storage.append(STORAGE_KEY, user);

    return user;
  };

  const removeUser = async (user) => {
    storage.removeById(STORAGE_KEY, user.id);
  };

  return Object.freeze({
    getUsers, createUser, removeUser,
  });
};

export default UserService;
