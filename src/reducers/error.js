import { FETCH_WEATHER } from '../actions';

const apiErrorHandling = (state = [], action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      if (action.payload.request === undefined) {
        return [action.payload];
      } else return state = [];
  }
  return state;
}

export default apiErrorHandling;
