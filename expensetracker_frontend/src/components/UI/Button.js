import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  className: "btn-primary",
  // onClick: () => {},
};
