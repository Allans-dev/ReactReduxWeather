import React, { Component } from 'react';
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
        </tbody>
      </table>
    );
}

export default LocationTable;
