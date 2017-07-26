import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationBrief extends Component {

// each location will render a renderBrief which will display a static name and a mapped forecast
  renderBrief(locationData) {

    const name = locationData.city.name;
    const dayOne = locationData.list[2];
    const dayTwo = locationData.list[10];
    const dayThree = locationData.list[18];
    const dayFour = locationData.list[26];
    const dayFive = locationData.list[34];

    // array to map forecast for each location
    const forecastArr = [dayOne, dayTwo, dayThree, dayFour, dayFive];

    // converting timestamp to weekday
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function weekDayFunction (date) {
      let dateNo = new Date(date.slice(0, 10));
      let dayNo = dateNo.getDay();
      return weekDay[dayNo];
    }


    return (
      <div key={name} className="row">
        <div className="col-md-2 col-sm-2 cityName">
          {name}
        </div>
        {forecastArr.map(function(day){
          return (
            <div key={day.dt_txt} className="col-md-2 col-sm-2">
              {weekDayFunction(day.dt_txt)}
              <br />
              {day.weather[0].description}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="locationBrief">
          {this.props.weather.map(this.renderBrief)}
      </div>
    );
  }

}



function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(LocationBrief);
