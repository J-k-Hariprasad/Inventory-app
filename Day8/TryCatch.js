import React from "react";

export default function TryCatch({fruit})
{
    try{
        if(fruit === "Onion")
        {
            throw new Error ("Not a fruit")
        }
    }
    catch(error)
    {
        console.log(error)
        document.write(" Not a fruit  " + error +"    ")
    }
    finally{
        document.write("  Hello Naruto always executed")
    }
    return(
        <div>
            {fruit}
        </div>
    )
}