import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CountrySelector from '../containers/country_selector';

const Header = (props) => {
    return (
      <div className="row header">
        <div className="col-md-9 col-sm-9">
          <SearchBar />
        </div>
        <div className="col-md-3 col-sm-3">
          <CountrySelector />
        </div>
      </div>
    );
}

export default Header;
