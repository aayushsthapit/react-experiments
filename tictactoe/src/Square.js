import React from "react";

const Square = props => {
  return (
    <button className="buttons" onClick={props.onclicked}>
      {props.value}
    </button>
  );
};
export default Square;
