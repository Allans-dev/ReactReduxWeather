import { FETCH_WEATHER } from '../actions';
import { DELETE_LOCATION } from '../actions/delete';


const weatherData = (state = [], action) => {
    switch (action.type) {

      // setState with new location data
      case 'FETCH_WEATHER':
        if (typeof payload === 'string') {
          return payload;
        } else {
            return [action.payload.data, ...state];
          }
      // removes location data from weather object
      case 'DELETE_LOCATION':
        return state.filter(function (item, index){
          if (action.payload != item.city.id) {
            return [item];
          }
        })
    }
    return state;
}

export default weatherData;
