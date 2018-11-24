import StorageService from './StorageService';
import UserService from './UserService';
import HttpClient from './HttpClient';
import SessionStorage from './SessionStorage';
import AuthService from './AuthService';

const configureServices = async () => {
  const userStorage = StorageService();
  const httpClient = HttpClient();
  const sessionStorage = SessionStorage({ key: 'AUTH_SESSION_STORAGE '});

  const userService = UserService(userStorage);
  const authService = AuthService(httpClient, sessionStorage);

  return { userService, authService };
};

export default configureServices;

