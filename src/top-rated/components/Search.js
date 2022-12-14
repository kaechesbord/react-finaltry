import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Search = ({ search, setSearch }) => {
  
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between position-fixed fixed-top">
      <a className="navbar-brand" href="www.google.com">IGTV</a>
      <form className="d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Search;
