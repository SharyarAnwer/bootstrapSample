import React , {useState} from 'react'
import profileContext from './ProfileContext'

export default function ProfileState(prop) {

    const [name, setName] = useState({firstName : "React Js" , lastName : 'JavaScript'})

    const update = () => {
        setInterval(() => {
            setName({
                firstName: "Node.js",
                lastName: "Python"
            })
        }, 2000);
    }

    const displayAlert = () => {
        alert("I AM AN ALERT FROM PROFILE")
    }

  return (
    
    <profileContext.Provider value={{name , update , displayAlert , setName}}>
        {prop.children}
    </profileContext.Provider>
  )
}
