import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import LocationTable from './components/location_table';


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
