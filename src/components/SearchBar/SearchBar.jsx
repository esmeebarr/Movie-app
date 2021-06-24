import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const { type, placeholder, name, updateSearch, handleChange, style } =
    this.props;

  return (
    <div className="searchBar" style={style}>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
