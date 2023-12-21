import React from 'react'
import '../Style_css/Main.css'
import bag from '../Assests/bag.png'

export default function Purchase() {
  return (
    <div className='q1'>
      <div className='rec'>
        <div className='q3'>
          <h3>Item 1</h3>
          <hr/>
        </div>
        <div className='q2'>
          <img src={bag} className='z12'></img>
          <h5>Company Name :</h5>
          <h5>Delivery Date :</h5>
          <h5>Number of Item :</h5>
          <h5>Price of Item :</h5>
          <h5>Total Amount : </h5>
          <h5>Payment Type :</h5>
        </div>
      </div>
    </div>
  )
}
