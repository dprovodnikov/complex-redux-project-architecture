const Storage = function (config) {
  const getToken = () => {
    return localStorage.getItem(config.key);
  }

  const storeToken = (token) => {
    return localStorage.setItem(config.key, token);
  }

  const clear = () => {
    return localStorage.removeItem(config.key);
  }

  return Object.freeze({
    getToken,
    storeToken,
    clear,
  });
};

export default Storage;
