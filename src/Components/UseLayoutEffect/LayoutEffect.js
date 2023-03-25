import React , {useEffect , useLayoutEffect} from 'react'

export default function LayoutEffect() {

    useEffect(() => {
      
        console.log("I AM THE FIRST USE-EFFECT")

    }, [])

    useLayoutEffect(() => {
      
        console.log("I AM THE SECOND USE-LAYOUT-EFFECT")

    }, [])

    useEffect(() => {
      
        console.log("I AM THE THIRD USE-EFFECT")

    }, [])
    
  return (
    <div>
      
    </div>
  )
}
