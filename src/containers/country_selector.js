import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountries, setCountryCode } from '../actions/countries';

class CountrySelector extends Component {
  constructor(props) {
    super(props);
    this.props.setCountryCode();
    this.state = { value: 'AU' };
    this.props.fetchCountries();
    this.handleChange = this.handleChange.bind(this);
  }

  // renders dropdown menu items after countryList is added to state
  componentDidUpdate(prevProps, prevState) {
    if (this.props.countryList[0]) {
      return (
        this.props.countryList[0].map((country) => {
          return (
            <option key={country.name} value={country.alpha2Code}>{country.name}</option>
          );
        })
      );
    }
  }

  // calls action to select the menu item in state
 handleChange(event) {
     this.props.setCountryCode(event.target.value);
   }

  render() {
    return (
        <select defaultValue={this.state.value} onChange={this.handleChange}>
          <option>Loading...</option>
          {this.componentDidUpdate()}
        </select>
    );
  }
}

function mapStateToProps ({ countryList }) {
  return { countryList };
  // return object to be passed into component as props
}

function mapDispatchToProps (dispatch, ownProps){
  return bindActionCreators({ fetchCountries, setCountryCode }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
