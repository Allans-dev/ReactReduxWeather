import axios from 'axios';

const API_KEY = 'a70166e768d349a3f6fe3921a4f6d313';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
};

// -----------------------------------------
// REACT ES2017 FETCH APPROACH
// -----------------------------------------

// customize HTTP request:

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })

// Handling response

// function getMoviesFromApiAsync() {
//   return fetch('https://facebook.github.io/react-native/movies.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// Still a promise so using ES2017 "await" removes the need of redux-promise

// async function getMoviesFromApi() {
//   try {
//     let response = await fetch('https://facebook.github.io/react-native/movies.json');
//     let responseJson = await response.json();
//     return responseJson.movies;
//   } catch(error) {
//     console.error(error);
//   }
// }
