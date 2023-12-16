// import React from "react";

// export default function ListDemmo()
// {
//     const college=[{id:1, stuName:"john",age:35},
//     {id:2, stuName:"wick",age:45},{id:3, stuName:"hulk",age:25}]

//     const display=college.map((col)=> <li  key={col.id}> {col.age} {col.stuName}</li>)

//     return(
//         <div style={{background:"green"}}>
//             <h1>List of Student</h1>
            
//             {display}
//         </div>
//     )
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}



