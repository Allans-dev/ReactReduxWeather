import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationBrief from '../containers/location_brief';

const LocationTable = (props) => {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Location</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          <LocationBrief />
        </tbody>
      </table>
    );
}

export default LocationTable;
