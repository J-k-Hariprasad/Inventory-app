import React, { useState } from "react";

export default function DynamicRendring()
{
    const[x,setx]=useState(12)
    return(
        x>10 ? <p>the value is Greater</p> : <p>the value is Less</p>
    )
}