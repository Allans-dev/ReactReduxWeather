import { combineReducers } from 'redux';
import weatherData from './weatherData';
import countryList from './countryList';
import SelectedCountry from './countrySelector';

// reducers produce the value of the state. is a function that returns list of values to be passed to containers

const rootReducer = combineReducers ({
  weather: weatherData,
  countryList: countryList,
  country: SelectedCountry
// enter the reducer names
})

export default rootReducer;
