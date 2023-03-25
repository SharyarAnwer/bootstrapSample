import React , {useState} from 'react'

export default function UseStateHook2() {

    const [count, setCount] = useState(0)

    function incrementBy5() {
        for (let i = 0; i < 5; i++) 
        {
            setCount(previous => previous + 1)
            console.log(count)    
        }
    }

  return (
    <div>
      
      <button>{count}</button>
      
      <button onClick={() => {setCount(previous => previous + 1)}}>Increment By 1</button>
      
      <button onClick={() => {setCount(previous => previous + 1)}}>Decrement By 1</button>

      <button onClick={incrementBy5}>Increment By 5</button>
    </div>
  )
}
