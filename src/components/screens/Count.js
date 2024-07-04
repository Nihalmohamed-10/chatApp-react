import React,{useState} from 'react';

function Count() {
   
    const[icount, setIcount]= useState(0)

  return (
    <div>
        <h1>Counter:{icount}</h1>
        <button type='button' onClick={()=>setIcount(icount+1)}>increment</button>
        <button type='submit' onClick={()=>setIcount(icount-1)}>decrement</button>

    </div>
  )
}

export default Count;