import React, { useEffect, useRef, useState } from 'react'

function MutableRef() {
    const[timer,setTimer]=useState(0);
    const timerRef=useRef<number | undefined>(undefined);

    const stopTimer=()=>{
        window.clearInterval(timerRef.current)
    }
    useEffect(()=>{
        timerRef.current=window.setInterval(()=>{
setTimer((timer)=>timer + 1)
        },1000)

        return ()=>{
            stopTimer();
        }
    },[])
  return (
    <div>
      <h1>Hook timer :{timer}</h1>
      <button onClick={()=>stopTimer()}>stop Timer</button>
    </div>
  )
}

export default MutableRef
