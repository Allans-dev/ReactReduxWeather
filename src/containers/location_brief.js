import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationBrief extends Component {
  renderBrief(locationData) {
    const name = locationData.city.name;
    return (
      <div key={name}> {name} </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.weather.map(this.renderBrief)}
      </div>
    );
  }

}



function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(LocationBrief);
