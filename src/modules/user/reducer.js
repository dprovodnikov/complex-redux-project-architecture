const initReducer = () => {
  const INITIAL_STATE = {};

  const reducer = (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
      default:
        return state;
    }
  };
  
  return reducer;
};

export default initReducer;