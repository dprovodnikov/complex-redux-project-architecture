import UserService from './UserService';
import UserStorage from './UserStorage';
import HttpClient from './HttpClient';
import SessionStorage from './SessionStorage';
import AuthService from './AuthService';

const configureUserService = () => {
  const storage = UserStorage();

  return UserService(storage);
};

const configureAuthService = () => {
  const httpClient = HttpClient();
  const sessionStorage = SessionStorage({ key: 'AUTH_SESSION_STORAGE '});

  return AuthService(httpClient, sessionStorage);
};

const configureServices = async () => {
  const userService = configureUserService();
  const authService = configureAuthService();

  return { userService, authService };
};

export default configureServices;

