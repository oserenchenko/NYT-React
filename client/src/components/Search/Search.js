import React from "react";

const Search = () => (
<form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Topic</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Middle East"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Start Year</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="2008"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">End Year</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="2009"/>
  </div>
  <button type="submit" class="btn btn-primary">Search</button>
</form>
);

export default Search;
