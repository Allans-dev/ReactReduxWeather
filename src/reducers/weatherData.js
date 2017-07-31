import { FETCH_WEATHER } from '../actions';
import { DELETE_LOCATION } from '../actions/delete';


const weatherData = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_WEATHER':
        return [action.payload.data, ...state];
      case 'DELETE_LOCATION':
        console.log(state);
        return state.filter(function (item, index){
          if (action.payload !== item.city.name) {
            return [item];
          }
        })
    }
    return state;
}

export default weatherData;
