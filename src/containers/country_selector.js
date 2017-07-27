import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountry, setCountryCode } from '../actions/countries';


class CountrySelector extends Component {
  componentWillMount() {
    this.props.fetchCountry();
    this.props.setCountryCode();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <select>
          <option value="default">Country</option>

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
