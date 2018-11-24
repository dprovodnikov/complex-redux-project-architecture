import axios from 'axios';

const Http = function () {
  const middlewares = [];

  const applyMiddlewares = (initialRequest = {}) => {
    return middlewares.reduce((request, applyChanges) => {
      return request.then(applyChanges);
    }, Promise.resolve(initialRequest));
  };

  const get = async (url, request) => {
    const result = await applyMiddlewares(request);
    return axios.get(url, result);
  };

  const post = async (url, body, request) => {
    const result = await applyMiddlewares(request);
    return axios.post(url, body, result);
  };

  const put = async (url, body, request) => {
    const result = await applyMiddlewares(request);
    return axios.put(url, body, result);
  };

  const _delete = async (url, request) => {
    const result = await applyMiddlewares(request);
    return axios.delete(url, result);
  };

  const addMiddleware = (middleware) => {
    middlewares.push(middleware);
  };

  return Object.freeze({
    get,
    post,
    put,
    addMiddleware,
    delete: _delete,
  });
};

export default Http;
