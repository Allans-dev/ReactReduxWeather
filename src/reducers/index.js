import { combineReducers } from 'redux';
import searchBar from './searchBar';

// reducers produce the value of the state. is a function that returns list of values

const rootReducer = combineReducers ({
  searchBar,
// enter the reducer names
})

export default rootReducer;
