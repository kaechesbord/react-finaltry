import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Search = (props) => {
    
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between position-fixed fixed-top">
      <a className="navbar-brand" href="www.google.com">IGTV</a>
      <form className="d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          value={props.search}
          onChange={(event) => props.setSearch(event.target.value)}
          placeholder="Search"
          aria-label="Search"
        ></input>
        {props.movies.filter((movie) => {  
          if(props.search === ""){
            return movie
          }
          else if(movie.props.title.toLowerCase().includes(props.search.toLowerCase())){
            return movie
          }
        })}
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Search;
