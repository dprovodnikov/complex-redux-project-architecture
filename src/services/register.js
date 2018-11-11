const configureHttpClient = async () => {
  return { id: 'HTTP_CLIENT '};
};

const registerServices = async (register) => {
  const httpClient = await configureHttpClient();

  register({ httpClient });
};

export default registerServices;
