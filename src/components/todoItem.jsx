import React, { useState } from "react";

function Todo(props) {
  //   const [textdecoration, setTextDecoration] = useState(false);

  //   function handelClick() {
  //     // console.log("li Clicked!");
  //     setTextDecoration((prevValue) => {
  //       return !prevValue;
  //     });
  //   }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id); // ma call is liya kr raha ya ta wo render ho tu automatically cal na ho jaye. balka click ka wait. ik ko kehta funtion calling not passing
      }}
    >
      {/* <li style={{ textDecoration: textdecoration ? "line-through" : "none" }}>
        {props.text}
      </li> */}
      <li>{props.text} </li>
    </div>
  );
}
export default Todo;
