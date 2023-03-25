import React , {useRef} from 'react'
import Child from './Child'

export default function Parent() {

  const greetings = useRef(null)
  return (
    <div>
      I AM THE PARENT COMPONENT

      <Child ref = {greetings}/>

      <button onClick={() => {
        greetings.current.hi()
      }}>Click Me To Greet</button>
    </div>
  )
}
