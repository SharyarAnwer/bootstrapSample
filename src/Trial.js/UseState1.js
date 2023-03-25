import React , {useState} from 'react'

export default function UseState1() {

    const [count, setCount] = useState(0)

    const decrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prev => prev + 1)
        }
    }
  return (
    <div>
        <button onClick={() =>{
            setCount(count - 1)
        }}>decrement By 1</button>

        <h1>{count}</h1>      
        
        <button onClick={() => {
            setCount(count + 1)
        }} >Increment By 1</button> 


        <button onClick={decrementBy5}>Increment by 5</button>     
    </div>
  )
}
