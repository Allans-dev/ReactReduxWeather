import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class LocationTable extends Component {


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Location</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}
