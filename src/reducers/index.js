import { combineReducers } from 'redux';
import weatherData from './weatherData';

// reducers produce the value of the state. is a function that returns list of values to be passed to containers

const rootReducer = combineReducers ({
  weather: weatherData
// enter the reducer names
})

export default rootReducer;
