import StorageService from './StorageService';
import UserService from './UserService';

const configureServices = async () => {
  const storage = StorageService();
  const userService = UserService(storage);

  return { userService };
};

export default configureServices;

