import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import promiseMiddleware from 'redux-promise';


const middleware = applyMiddleware(promiseMiddleware);
const initialState = {};

export default initialState => (
  createStore(
    rootReducer,
    initialState,
    middleware
  )
);
