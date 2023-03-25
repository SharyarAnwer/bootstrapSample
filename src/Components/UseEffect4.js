import React, { useState , useEffect } from "react";

export default function UseEffect4() {

  const [windowSize, setWindowSize] = useState(window.screen.width);
  
  const actualWidth = () => {
    console.log(window.innerWidth)
    setWindowSize(window.innerWidth)
  }
  useEffect(() => {
    
    window.addEventListener('resize' , actualWidth)

    return () => {
        window.removeEventListener('resize' , actualWidth)
    }
  })
  
  return (
    <div>
      <h1>Size of the window</h1>
      <h1>{windowSize}</h1>
    </div>
  );
}
