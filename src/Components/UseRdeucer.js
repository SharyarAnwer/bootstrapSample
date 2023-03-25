import React, { useReducer } from "react";

export default function UseRdeucer() {
  let initialState = 0;

  const reducer = (state, action) => {

    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      default:
        return state;
    }
  };

  const [count , dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <button
      onClick={() => {
        dispatch("increment")
      }}
      >Increment</button>

      <button onClick={() => {
        dispatch("decrement")
      }}>Decrement</button>

      <h1>{count}</h1>
    </div>
  );
}
