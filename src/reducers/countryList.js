import { FETCH_COUNTRY } from '../actions/countries';

const countryData = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_COUNTRY':
        return [action.payload.data];
    }
    return state;
}

export default countryData;
