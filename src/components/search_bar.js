import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  constructor(props) {
    super(props); // because it is a container it setState with new values
  }
  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Search Location"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
