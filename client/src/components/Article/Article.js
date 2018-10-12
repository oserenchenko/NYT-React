import React from "react";

const Article = (props) => (
<div>
  <p>{props.title}</p>
  <p>{props.url}</p>
  <p>{props.author}</p>
</div>
);

export default Article;
