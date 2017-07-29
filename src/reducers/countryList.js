import { FETCH_COUNTRIES } from '../actions/countries';

const countryData = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_COUNTRIES':
        return [action.payload.data];
    }
    return state;
}

export default countryData;
