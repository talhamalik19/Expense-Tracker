import React from "react";

export default function Input(props) {
  return (
    <input
      id={props.id}
      className="form-control"
      type={props.type}
      placeholder={props.placeholder}
      ref={props.innerRef}
      min="0"
    />
  );
}
