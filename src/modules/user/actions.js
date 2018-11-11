const initActions = (httpClient) => {

  const fetchUser = () => () => {
    console.log('fetching the user with', httpClient.id);
  };

  return { fetchUser };
};

export default initActions;
