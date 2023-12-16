import React, {useState} from "react";
export default function TwoWayBinding()
{
    const[name,setname]=useState("");

    const changeName=(event)=>setname(event.target.value)
    return(
        <div>TwoWayBinding
                <input onChange={changeName} value={name}></input>
                <p>The Name is {name}</p>
        </div>
    )
}