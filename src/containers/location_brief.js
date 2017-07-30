import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteLocation from '../actions/delete';

class LocationBrief extends Component {
  constructor(props) {
    super(props);
    this.renderBrief = this.renderBrief.bind(this);
    this.filterIndex = this.filterIndex.bind(this);
  }

  // filterIndex(name) {
  //   let id = this.props.weather.filter(function (item, index) {
  //     if (item.city.name === name) {
  //       return index;
  //     }
  //   });
  //   console.log(id);
  // }

// each location will render a renderBrief which will display a static name and a mapped forecast
  renderBrief(locationData) {

    const locationName = locationData.city.name;

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

    // function onDelete(name) {
    //   this.filterIndex(name);
    // }
    // onDelete(locationData.city.name);
    return (
      <div key={name} className="row briefItem">
        <div className="col-md-2 col-sm-2 cityName">
          {locationName} <br />
          <button
            className="btn btn-danger btn-xs"
            onClick={this.onDelete}
          >X</button>
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

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ deleteLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationBrief);
