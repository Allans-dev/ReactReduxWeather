import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationBrief extends Component {
  renderBrief(cityData) {
    const name = cityData.city.name;

    return ( {name} );
  }
  render() {
    return (
      <div>
        <renderBrief />
      </div>
    )
  }

}



function mapStateToProps(state, ownProps) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(LocationBrief);
