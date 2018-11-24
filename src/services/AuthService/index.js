import authSignatureMiddleware from "./middleware";

const AuthService = function (httpClient, sessionStorage) {
  const baseUrl = ``;

  const login = async (email) => {
    const url = `${baseUrl}/login`;
    const { token } = await httpClient.post(url, { email });

    sessionStorage.storeToken(token);
  };

  const getToken = () => {
    return sessionStorage.getToken();
  };

  const isAuthenticated = () => {
    return !!getToken();
  };

  httpClient.addMiddleware(authSignatureMiddleware(getToken));

  return Object.freeze({
    login,
    getToken,
    isAuthenticated,
  });
};

export default AuthService;
