import React , {useState , useEffect , useLayoutEffect} from 'react'

export default function LayoutEffect2() {

    const [num, setNum] = useState(0)

    useLayoutEffect(() => {

        if (num === 0 ) 
        {
            setNum(10 + Math.random() * 50)    
        }

        console.log(num)
    }, [num])
    
  return (
    <div>
        <h2>{num}</h2>

        <button onClick={() => {
            setNum(0)
        }} >Check</button>      
    </div>
  )
}
