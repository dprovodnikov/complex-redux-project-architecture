const UserService = function (storage) {
  const STORAGE_KEY = 'user_storage_key';

  const getUsers = async () => {
    return storage.getList(STORAGE_KEY);
  };

  const addUser = async (user) => {
    storage.append(STORAGE_KEY, user);
  };

  const removeUser = async (user) => {
    storage.removeById(STORAGE_KEY, user.id);
  };

  return Object.freeze({
    getUsers, addUser, removeUser,
  });
};

export default UserService;
