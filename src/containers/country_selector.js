import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountry, setCountryCode } from '../actions/countries';


class CountrySelector extends Component {
  constructor(props) {
    super(props);
    this.props.setCountryCode();
  }

  optionList() {
    this.props.fetchCountry()
    .then(() => {
      this.props.countryList[0].map((country) => {
        return (
          <option value={country.alpha2Code}>{country.name}</option>
        );
      })
    });
  }

  render() {
    return (
      <form>
        <select>
          <option value="au">Australia</option>
          {this.optionList()}
        </select>
      </form>
    );
  }
}

function mapStateToProps ({ countryList }) {
  return { countryList };
  // return object to be passed into component as props
  // will obtain country state tb created
}

function mapDispatchToProps (dispatch, ownProps){
  return bindActionCreators({ fetchCountry, setCountryCode }, dispatch); // will create countrySelector action
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
