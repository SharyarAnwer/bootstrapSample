import React , {useState} from 'react'

export default function HookCounter3() {
    
    const [name, setName] = useState({firstName : '' , lastName : ''})
    
    return (
    <div>

      <input type="text" value={name.firstName} onChange = {event => {setName({...name , firstName : event.target.value})}}/>
      {/* Replicate the name object and alter the firstName attribute in it */}

      <input type="text" value={name.lastName} onChange = {event => {setName({...name , lastName : event.target.value})}}/>
      {/* Replicate the name object and alter the lastName attribute in it */}

      <h2>First Name = {name.firstName}</h2>
      <h2>Last Name = {name.lastName}</h2>

      <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}
