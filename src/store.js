import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';


const middleware = applyMiddleware(promiseMiddleware, thunk, logger);
const initialState = {};

export default initialState => (
  createStore(
    rootReducer,
    initialState,
    middleware
  )
);
