import {
  combineReducers, createStore, applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

const configureStore = (reducers) => {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, applyMiddleware(thunkMiddleware)); 
};

export default configureStore;
