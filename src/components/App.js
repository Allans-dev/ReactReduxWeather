import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import LocationTable from '../containers/location_table';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <LocationTable />
      </div>
    );
  }
}
