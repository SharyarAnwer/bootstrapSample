import React , {useState , useEffect, useRef} from 'react'

export default function HookTImer() {
  
  const [timer, setTimer] = useState(0)

  let counter = useRef(null)

  useEffect(() => {
    
    counter.current = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000);

  }, [])
  
  return (
    <div>
      {timer}

      <button onClick={() => {
        clearInterval(counter.current)
      }}>Stop The Timer</button>    
    </div>
  )
}
