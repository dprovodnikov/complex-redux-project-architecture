import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const configureStore = (reducers) => {
  return createStore(reducers, applyMiddleware(thunkMiddleware)); 
};

export default configureStore;
