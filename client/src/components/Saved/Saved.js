import React from "react";

const Saved = (props) => (
<div>
  {props.children}
  <p>{props.title}</p>
  <p>{props.author}</p>
  <p>{props.date}</p>
  <p>{props.url}</p>
</div>
);

export default Saved;
