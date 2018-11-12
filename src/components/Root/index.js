import React from 'react';
import { Provider } from 'react-redux';
import User from '../User';

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <User />
    </Provider>
  );
};

export default Root;
