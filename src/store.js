import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/index';

export default initialState => (
  createStore(rootReducer,
  initialState
  //applyMiddleware(thunk)
  )
);
