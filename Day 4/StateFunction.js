import { useState } from "react"
export default function StateFunction ()
{
    
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return (
        <div>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>Incteament</button>
            <button onClick={decrCount}>Decrement</button>
        </div>
    )
}

// const[carName,setCarName]=useState("GTR");
// const changeCar=()=>setCarName("Nissans GTR")
            /* <h1>My dad has a {carName}</h1>
            <button onClick={changeCar}>Click!!</button> */