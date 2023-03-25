import React , {useState} from 'react'

export default function UseState2() {

    const [name, setName] = useState({firstName : '' , secondName : ''})


  return (
    <div>

        <input type="text" value={name.firstName} onChange = {(event) => {
            setName({firstName : event.target.value})
        }}/>

        <input type="text" value={name.secondName} onChange = {(event) => {
            setName({secondName : event.target.value})
        }}/>  

        <h1>First Name : {name.firstName}</h1>
        <h1>Last Name : {name.secondName}</h1>
    </div>
  )
}
