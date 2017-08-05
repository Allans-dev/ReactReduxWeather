import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteLocation } from '../actions/delete';

class LocationBrief extends Component {
  constructor(props) {
    super(props);
    this.renderBrief = this.renderBrief.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

// Delete button function button that passes name of location to action and reducer
  handleClick(e) {
    e.preventDefault();
    this.props.deleteLocation(e.target.value);
  }

// each location will render a renderBrief which will display a static name and a mapped forecast
  renderBrief(locationData) {

    let locationName = locationData.city.name;
    let locationId = locationData.city.id;

    // array to map forecast at noon for each location
    const forecastArr = locationData.list.filter( function(item, index) {
      let time = item.dt_txt.slice(11);
      const noon = "12:00:00"
      if (time === noon) {
        return locationData.list[index];
      }
    });

     function displayIcon(weatherId) {
       if (weatherId >= 200 && weatherId < 300) {
         return ( <i className="wi wi-day-thunderstorm"></i> );
       } else if (weatherId >= 300 && weatherId < 400) {
          return ( <i className="wi wi-day-sprinkle"></i> );
       } else if (weatherId >= 500 && weatherId < 600) {
          return ( <i className="wi wi-rain"></i> );
       } else if (weatherId >= 600 && weatherId < 700) {
          return ( <i className="wi wi-day-snow"></i> );
       } else if (weatherId >= 700 && weatherId < 800) {
          return ( <i className="wi wi-day-fog"></i> );
       } else if (weatherId === 800 || (weatherId >= 951 && weatherId <= 953)) {
          return ( <i className="wi wi-day-sunny"></i> );
       } else if (weatherId >= 800 && weatherId < 810) {
          return ( <i className="wi wi-cloudy"></i> );
       } else if (weatherId >= 900 && weatherId < 910) {
          return ( <i className="wi wi-storm-warning"></i> );
       } else if (weatherId >= 954 && weatherId <= 959) {
         return ( <i className="wi wi-strong-wind"></i> );
       } else if (weatherId >= 960 && weatherId < 962) {
         return ( <i className="wi wi-thunderstorm"></i> );
       } else if (weatherId === 962) {
         return ( <i className="wi wi-hurricane"></i> );
       }
     }

    // converting timestamp to weekday
    function weekDayFunction (date) {
      const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let dateNo = new Date(date.slice(0, 10));
      return weekDay[dateNo.getDay()];
    }
             
    function weekDateFunction (date) {
        let day = date.slice(8,10);
        let month = date.slice(5, 7);
        return (day + "/" + month);
    }
             
    function nameShorten (name) {
        if (name.length > 11) {
            let rename = name.slice(0, 11);
            return rename + "...";
        } else return name;
    }

    return (
      <div key={locationId} className="briefItem">
        <div className="cityName">
        <div>
          {nameShorten(locationName)}
        </div>
        </div>
        <button
            value={locationId}
            className="btn btn-danger btn-xs"
            onClick={this.handleClick}
          >X</button>
        {forecastArr.map(function(day){
          return (
            <div key={day.dt_txt} className="forecastItem">
              <div className="dayDate">
              {weekDayFunction(day.dt_txt)}
              </div>
              <div className="dateDate">
              {weekDateFunction(day.dt_txt)}
              </div>
              {displayIcon(day.weather[0].id)}
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

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ deleteLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationBrief);
