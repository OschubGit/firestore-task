import React from "react";

const Button = (props) => {
  return <button className={props.color}>{props.name}</button>;
};

export default Button;
