import React, { forwardRef , useImperativeHandle } from 'react'

function Child(prop , ref) {

    useImperativeHandle(
      ref,
      () => {
        return {
            hi : () => sayHello()
        }
      }
    )
    const sayHello = () => {
        alert("Hello Everyone")
    }

  return (
    <div>
      I AM THE CHILD COMPONENT
    </div>
  )
}

export default forwardRef(Child)