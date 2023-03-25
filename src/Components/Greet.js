import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Greet(props) {
  /*  const {name , Age} = props */

  const [name, setName] = useState(props.name);

  let a = 10;
  a = 20

  a = 50

  return (
    /* Explaining props.children */
    /* <div>
       Hello {props.name}

       {props.children}
    </div> */
    /* Explaining props.children */

    <div>
      Name: {name} Age: {props.Age}
      <button
        onClick={() => {
          alert(a)
        }}
      >
        Click To Greet The Parent Component
      </button>
    </div>
  );
}
