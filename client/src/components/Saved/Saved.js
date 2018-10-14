import React from "react";
import "./Saved.css";

const Saved = (props) => (
<div>
  {props.children}
  <a href={props.url} target="_blank">{props.title}</a>
  <p>{props.author} | {props.date}</p>
</div>
);

export default Saved;
