import React , {useEffect , useState} from 'react'

export default function UseEffect3() {

    const [name, setName] = useState("")

    useEffect(() => {
     console.log("Use effect is running once only") 
    }, [])
    
  return (
    <div>
        <input type="text" value={name} onChange = {event => {
            setName(event.target.value)
        }}/>
      <h1>Name - {name}</h1>
    </div>
  )
}
