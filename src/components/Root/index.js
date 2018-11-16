import React from 'react';
import { Provider } from 'react-redux';
import Users from '../Users';

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <Users />
    </Provider>
  );
};

export default Root;
