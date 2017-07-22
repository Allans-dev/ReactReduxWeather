import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationBrief extends Component {
  renderBrief(cityData) {
    const name = cityData.city.name;

    return (
      // <tr key={name}>
      //   <td> {name} </td>
      // </tr>
      "Please work"
    );
  }
  render() {
    console.log(this.props.weather)
    return <renderBrief />;
  }

}



function mapStateToProps(state, ownProps) {
  return { weather:state.weather };
}

export default connect(mapStateToProps)(LocationBrief);
