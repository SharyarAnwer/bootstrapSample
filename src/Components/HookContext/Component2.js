import React , {useContext , useEffect} from 'react'
import profileContext from './ProfileContext'

export default function Component2() {

    let details = useContext(profileContext)

    /* useEffect(() => {
        details.update()
    }, []) */
    

  return (
    <div>
      I am the child component - {details.name.firstName}
      Last Name - {details.name.lastName}

      <button onClick={() => {
        details.displayAlert()
      }}>Click</button>

      <button onClick={() => {
        details.setName(
            {
                firstName : "HTML" ,
                lastName : 'CSS'
            }
        )
      }}>Change State</button>
    </div>
  )
}
