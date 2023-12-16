import React,{useState} from 'react'
export default function StateHoldObject()
{
    const[college,setCollege]=useState({cid:1,cname:"Skct",year:2023})
    const changeYear = () => setCollege({ ...college, year: 2024 });

    return (
        <div>
            <h1> College Id is {college.cid}</h1>
            <h1>My College Name is {college.cname}</h1>
            <h1>The Current year iam Studying is {college.year}</h1>
            <button onClick={changeYear}>year</button>
        </div>

    )
}