import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [cnt,setcnt] = useState(20);

    const change = ()=>{
        setcnt(cnt+10);
    }

    useEffect(()=>{
     console.log("hello , count : ", cnt );   
    })

  return (
    <div>
        <button onClick={change}>Increment</button>
    </div>
  )
}

export default UseEffect