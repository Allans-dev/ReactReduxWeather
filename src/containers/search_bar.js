import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // sets initial state of searchBar to empty string

    this.onInputChange = this.onInputChange.bind(this);
    // 'this' in onInputChange function refers to window without bind (lexical environment)
    // needs to do that for all callbacks
    // replaces 'this'.
  }

  onInputChange(event) {
    this.setState({ term: event.target.value }); // sets state of SearchBar to input value
  }

  onFormSubmit(event) {
    event.preventDefault();
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
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
