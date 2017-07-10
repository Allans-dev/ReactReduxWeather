import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);

export default initialState => (
  createStore(rootReducer,
  initialState,
  middleware
  )
);
