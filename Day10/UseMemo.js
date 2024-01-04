import React,{useState,useMemo} from 'react';

export default function Usememo() {

    const[count,setCount]=useState(0);
    const[evenNum,setevenNum]=useState(2);

    const memoHook=useMemo(function evenNumDouble()
    {
        console.log('Double');
        return evenNum *2;},[evenNum])

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Even Number: {evenNum}</h2>
      <h2>even Number Double Value: {memoHook}</h2>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={()=>setevenNum(evenNum+2)}>Even Number</button>
    </div>
  )
}
