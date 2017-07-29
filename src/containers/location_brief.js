import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationBrief extends Component {

// each location will render a renderBrief which will display a static name and a mapped forecast
  renderBrief(locationData) {

    const name = locationData.city.name;

    // array to map forecast at noon for each location
    const forecastArr = locationData.list.filter( function(item, index) {
      let time = item.dt_txt.slice(11);
      const noon = "12:00:00"
      if (time === noon) {
        return locationData.list[index];
      }
    });

    // converting timestamp to weekday
    function weekDayFunction (date) {
      const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let dateNo = new Date(date.slice(0, 10));
      return weekDay[dateNo.getDay()];
    }

    return (
      <div key={name} className="row briefItem">
        <div className="col-md-2 col-sm-2 cityName">
          {name} <br />
          <button className="btn btn-danger btn-xs">X</button>
        </div>
        {forecastArr.map(function(day){
          return (
            <div key={day.dt_txt} className="col-md-2 col-sm-2 forecastItem">
              {weekDayFunction(day.dt_txt)}
              <br />
              {Math.round(day.main.temp)} &#8451;
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
