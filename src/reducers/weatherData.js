const weatherData = (state = 'no weather data', action) => {
    switch (action.type) {
      case 'FETCH_WEATHER':
        return [action.payload.data, ...state];
    }
    return state;
}

export default locationForecast;
