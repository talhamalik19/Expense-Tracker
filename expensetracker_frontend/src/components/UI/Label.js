import React from "react";

export default function Label(props) {
  return (
    <label htmlFor={props.for} className="col-sm-2 col-form-label">
      {props.children}
    </label>
  );
}
