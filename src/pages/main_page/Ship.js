import React from 'react'
import SIL from './image'
import '../Style_css/Main.css'

export default function Shipment({no,shopname,nop,noi,add}) {
  return (
    <div className='q1'>
      <div className='rec'>
        <div className='q3'>
          <h3>CUSTOMER  {no}</h3>
          <hr/>
          <h6>Products Ordered</h6>
        </div>
        <center className='ce'><SIL/></center>
        <div className='q2'>
          <h5>Shop Name : {shopname}</h5>
          <h5>Number of Products : {nop} </h5>
          <h5>Number of Items    : {noi}</h5>
          <h5>Address : {add}</h5>
        </div>
      </div>
    </div>
  )
}
