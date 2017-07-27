import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'; // temporary remember to remove after able to display component


class CountrySelector extends Component {
  render() {
    return (
      <form>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>  
        </select>
      </form>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {};
  // return object to be passed into component as props
  // will obtain country state tb created
}

function mapDispatchToProps (dispatch, ownProps){
  return bindActionCreators({ fetchWeather }, dispatch); // will create countrySelector action
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
