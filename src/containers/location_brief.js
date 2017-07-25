import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationBrief extends Component {

  renderBrief(locationData) {
    const name = locationData.city.name;
    const dayOne = locationData.list[4];
    const dayTwo = locationData.list[12];
    const dayThree = locationData.list[20];
    const dayFour = locationData.list[28];
    const dayFive = locationData.list[36];

    const forecastArr = [dayOne, dayTwo, dayThree, dayFour, dayFive];


    return (
      <div key={name} className="row">
        <div className="col-md-2 col-sm-2 cityName">
          {name}
        </div>
        {forecastArr.map(function(des){
          return (
            <div key={des.dt_txt} className="col-md-2 col-sm-2">
              {des.dt_txt} <br />
              {des.weather[0].description}
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
