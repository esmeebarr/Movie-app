import React, { useState } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

NavBar = () => {
  const { updateSearch, handleChange } = this.props;
  return (
    <nav className="navBar">
      <div className="heading">
        <p>Movie Finder</p>
      </div>
      <div className="searchContainer">
        <div className="searchTitle">
          <SearchBar
            type="search"
            name="year"
            placeholder="Enter a movie title"
            updateSearch={updateSearch}
            handleChange={handleChange}
          />
        </div>
        <button className="button" onClick={handleChange}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
