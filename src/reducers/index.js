import { combineReducers } from 'redux';
import weatherData from './weatherData';
import countryList from './countryList';

// reducers produce the value of the state. is a function that returns list of values to be passed to containers

const rootReducer = combineReducers ({
  weather: weatherData,
  country: countryList
// enter the reducer names
})

export default rootReducer;
