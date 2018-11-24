import update from 'update-by-path';

const authSignatureMiddleware = getToken => async (request) => {
  const token = await getToken();
  return update(request, 'headers.X-Auth-Token', token);
};

export default authSignatureMiddleware;
