import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // sets initial state of searchBar to empty string

    this.onInputChange = this.onInputChange.bind(this);
    // 'this' in onInputChange function refers to window without bind (lexical environment)
    // needs to do that for all callbacks
    // replaces 'this'.
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // similar to above passes 'this' with ability to reference props to onFormSubmit function
  }

  onInputChange(event) {
    this.setState({ term: event.target.value }); // sets state 'term' of SearchBar to input value
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter Location"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return bindActionCreators({ fetchWeather }, dispatch);
};


export default connect(null, mapDispatchToProps)(SearchBar);
