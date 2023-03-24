import React from "react";
import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {
 /*
 - The "button" class is the default class name provided 
 - The following object decides on which class to use to style 
  the button depending on the boolean value of the prop provided
 */   
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    " button--danger": props.danger,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
