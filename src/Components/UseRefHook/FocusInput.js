import React , {useEffect , useRef} from 'react'

export default function FocusInput() {
  
    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
    return (
    <div>
        <input type="text" placeholder='I AM NOT FOCUSED'/>    
        <input ref={inputRef} type="text" placeholder='I AM FOCUSED'/>    
    </div>
  )
}
