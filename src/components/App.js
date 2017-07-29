import React, { Component } from 'react';
import Header from './header';
import LocationTable from './location_table';


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
