import StorageService from './StorageService';
import UserService from './UserService';
import registerServices from './register';

const configureServices = async () => {
  const storage = StorageService();
  const userService = UserService(storage);

  return registerServices({ userService });
};

export default configureServices;

