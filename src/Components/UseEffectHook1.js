import React , {useState , useEffect} from 'react'

export default function UseEffectHook1() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    /* document.title = `Value = ${count}` */

    console.log("Use Effect is running")
  } , [count])
  

  return (
    <div>

      {<input type="text" value={name} onChange = {event => {
        setName(event.target.value)
      }} />}
      <button onClick={() => {
        setCount(count + 20)
      }} >The value of the counter - {count}</button>
    </div>
  )
}
