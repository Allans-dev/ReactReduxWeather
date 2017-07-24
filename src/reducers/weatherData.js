import { FETCH_WEATHER } from '../actions';


const weatherData = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_WEATHER':
        return [action.payload.data, ...state];
    }
    return state;
}

export default weatherData;
