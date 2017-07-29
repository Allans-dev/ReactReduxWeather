import axios from 'axios';

export const FETCH_COUNTRIES = "FETCH_COUNTRIES";

export function fetchCountries(code) {
  const url = "https://restcountries.eu/rest/v2/all";
  const request = axios.get(url);
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
