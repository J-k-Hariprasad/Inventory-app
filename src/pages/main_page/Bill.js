import React from 'react'
import '../Style_css/Main.css'

export default function Bill({shopname,nop,noi}) {
  return (
    <div className='q1'>
      <div className='rec'>
        <div className='q3'>
          <h3>BILL 1</h3>
          <hr/>
        </div>
        <div className='q2'>
          <h5>Customer Name:</h5>
          <h5>Shop Name:</h5>
          <h5>Shipment Date:</h5>
          <h5>Delivery Date:</h5>
          <h5>Amount: </h5>
          <h5>GST% :</h5>
          <h5>Total Bill Amount :</h5>
          <h5>Payment Status :</h5>
          <h5>Payment Type :</h5>
        </div>
      </div>
    </div>
  )
}
