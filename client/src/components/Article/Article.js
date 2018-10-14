import React from "react";
import "./Article.css";

const Article = (props) => (
<div key={props.key}>
  <a href={props.url} target="_blank">{props.title}</a>
  <p className="author">{props.author} | {props.date}</p>
</div>
);

export default Article;
