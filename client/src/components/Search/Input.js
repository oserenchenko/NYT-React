import React from "react";
import "./Search.css";

export const Input = (props) => (
  <div className="form-group">
    <label>{props.label}</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} {...props}/>
  </div>
);

