import React, { Component } from 'react';
import Header from './header';
import LocationTable from './location_table';
import SearchBar from '../containers/search_bar';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LocationTable />
      </div>
    );
  }
}
