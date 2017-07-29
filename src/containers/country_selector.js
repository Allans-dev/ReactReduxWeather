import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountry, setCountryCode } from '../actions/countries';


// function countryCode (country) {
//   return setCountryCode(country);
// }

class CountrySelector extends Component {
  constructor(props) {
    super(props);
    this.props.setCountryCode();
    this.state = { value: 'AU' };
    this.props.fetchCountry();
    this.handleChange = this.handleChange.bind(this);
  }

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

 handleChange(event) {
     this.props.setCountryCode(event.target.value);
   }

// <option>Select Country</option>

  render() {
    return (
        <select defaultValue={this.state.value} onChange={this.handleChange}>
          {this.componentDidUpdate()}
        </select>
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
