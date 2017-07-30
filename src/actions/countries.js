import axios from 'axios';

export const FETCH_COUNTRIES = "FETCH_COUNTRIES";

export function fetchCountries(code) {
  const url = "https://restcountries.eu/rest/v2/all";
  const request = axios.get(url);
  // .then(() => callback()); if something needs to happen after request. callback will need to be a param on
  // fetchCountries then written when calling the action in container.
  return {
    type: FETCH_COUNTRIES,
    payload: request
  };
}

export const SELECT_COUNTRY = "SELECT_COUNTRY";

export function setCountryCode(countryCode = "AU") {
  return {
    type: SELECT_COUNTRY,
    payload: countryCode
  };
}
