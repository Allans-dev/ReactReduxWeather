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
      } else if (weatherId >= 500 && weatherId < 600) {
        return ( <div><i className="wi wi-day-rain"></i><div/> );
      } else { return ( <div>icon missing</div> ); }
    }

    // converting timestamp to weekday
    function weekDayFunction (date) {
      const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let dateNo = new Date(date.slice(0, 10));
      return weekDay[dateNo.getDay()];
    }

    return (
      <div key={locationId} className="row briefItem">
        <div className="col-md-2 col-sm-2 cityName">
          {locationName} <br />
          <button
            value={locationId}
            className="btn btn-danger btn-xs"
            onClick={this.handleClick}
          >X</button>
        </div>
        {forecastArr.map(function(day){
          return (
            <div key={day.dt_txt} className="col-md-2 col-sm-2 forecastItem">
              {weekDayFunction(day.dt_txt)}
              <br />
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
