import React , {useDebugValue, useEffect , useState} from 'react'

export default function UseDebug() {

    const [name, setName] = useState("")

    useDebugValue(name)
    useEffect(() => {
     console.log(name) 
    } , [name])
    
  return (
    <div>
        <input type="text" onChange={event => setName(event.target.value)} />  
    </div>
  )
}
