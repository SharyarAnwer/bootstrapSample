import React, { useState , useEffect } from "react";

export default function UseEffect2() {

  const [name, setName] = useState("");
  
  useEffect(() => {
    console.log("The component is updating.")
  })
  
  return (
    <div>
      <input type="text" value={name} onChange = {event => {
        setName(event.target.value)
      }} />
    </div>
  );
}
