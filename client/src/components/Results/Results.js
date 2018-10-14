import React from "react";
import "./results.css";

const Results = (props) => (
<div className="results">
  <h2>Results</h2>
  {props.children}
</div>
);

export default Results;
