import { SELECT_COUNTRY } from '../actions/countries';

const SelectedCountry = (state = "au", action) => {
  switch (action.type) {
    case "SELECT_COUNTRY":
      return action.payload;
  }
  return state;
}

export default SelectedCountry;
