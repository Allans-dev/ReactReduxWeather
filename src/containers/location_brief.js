import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationBrief extends Component {
  renderBrief(cityData) {
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td> {name} </td>
      </tr>
    )
  }
  render() {
    return ( <renderBrief /> );
  }
}

// function mapStateToProps(state, ownProps) {
//   return ;
// }
//
// export default connect(mapStateToProps)(LocationBrief);

export default LocationBrief;
