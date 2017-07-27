import axios from 'axios';

export const FETCH_COUNTRY = "FETCH_COUNTRY";

export function fetchCountry(code) {
  const url = "https://restcountries.eu/rest/v2/all"
  const request = axios.get(url);

  return {
    type: FETCH_COUNTRY,
    payload: request
  };
}

export const SELECT_COUNTRY = "SELECT_COUNTRY";

export function setCountryCode(countryCode) {
  return {
    type: SELECT_COUNTRY,
    payload: countryCode
  };
}
