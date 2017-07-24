import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import LocationTable from './location_table';
import LocationBrief from '../containers/location_brief';


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
