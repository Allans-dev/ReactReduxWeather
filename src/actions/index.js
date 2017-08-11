import axios from 'axios';
import { connect, dispatch } from 'react-redux';

const API_KEY = 'a70166e768d349a3f6fe3921a4f6d313';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {

  const url = `${ROOT_URL}&q=${city},${country}&units=metric`;
  const errorMsg = 'Please check your spelling and try again';
  const request = axios.get(url).catch(function () {
    return errorMsg;
  });

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(fetchWeather);

  // fetch(url)
  //   .then((res) => res.json())
  //   .then(console.log(this))
  //   // .then(dispatch(doSomething(responseJson)))
  //   .catch(function() {
  //      dispatch(handleError(responseJson))
  //   });
  //
  // function doSomething(response) {
  //  return {
  //    type: 'FETCH_WEATHER',
  //    payload: response
  //   };
  // }
  //
  // function handleError(response) {
  //   console.log('this is an error');
  //   // do something to do with error handling in here
  // }
  // }
  //



  // const request = new Request(`${ROOT_URL}&q=${city},${country}&units=metric`);
  //
  // const fetch = fetch(request).catch((error) => {
  //   console.error(error);
  // });
  //
  // return {
  //   type: FETCH_WEATHER,
  //   payload: fetch
  // };


  // (async function() {
  //   try {
  //     let response = await fetch(request);
  //     let responseJson = await response.Json;
  //       return {
  //         type: FETCH_WEATHER,
  //         payload: responseJson
  //       };
  //     } catch(error) {
  //       console.error(error);
  //     };
  //   }
  // ());


    // try {
    //   let response = await
    //   let responseJson = await response.Json();
    //       return responseJson;
    // } catch(error) {
    //       console.error(error);
    //     };
    // }


  // return {
  //   type: FETCH_WEATHER,
  //   payload: request
  // }
  // };

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
