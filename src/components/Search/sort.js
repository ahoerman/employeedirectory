import React from 'react';
import "./style.css";

const Search = ({userinput, handler}) => {
  return (
<div className="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li className="dropdown-item">Name</li>
    <li className="dropdown-item">Occupation</li>
    <li className="dropdown-item">Email</li>
  </div>
</div>

  );
}

export default Search;

