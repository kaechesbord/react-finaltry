import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Search = (props) => {
    const [search, setSearch] = useState("")
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between position-fixed fixed-top">
      <a className="navbar-brand">IGTV</a>
      <form className="d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          value={props.search}
          onChange={(event) => props.setSearch(event.target.value)}
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
