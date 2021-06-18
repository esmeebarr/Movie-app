import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    const { type, placeholder, name, updateSearch, handleChange, style } =
      this.props;

    return (
      <div className="searchBar" style={style}>
        <input type={type} name={name} placeholder={placeholder} />
      </div>
    );
  }
}
