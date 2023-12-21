import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../pages/Style_css/Content.css';
import { LuPackageCheck } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { FaFileInvoice } from "react-icons/fa6";
import SIL123 from './Image123';
import ShipMent from './Bottom/ShipMent';
import ExecuPat from './Bottom/ExecuPat';
import DeliPat from './Bottom/DeliPat';
import Footer from './Bottom/Footer';

export default function Content() {
  
  const navigate = useNavigate();

  const quantityInHand = 108090;
  const quantityToBeReceived = 420; 
  return (

    <div className='tree'>
      <div className='h2'>
        <h2>Sales Activity</h2>
        <h2 className='h3'>Inventory Summary</h2>
      </div>
      <div className='png'>
        <LuPackageCheck className='img' title='To be delivered' onClick={()=>navigate('/1deli')}/>
        <FaShippingFast className='img' title='To be Shipped'  onClick={()=>navigate('/1ship')}/>
        <GrCompliance className='img' title='To be Shipped' onClick={()=>navigate('/1bill')}/>
        <FaFileInvoice className='img' title='To be Shipped' />
        <div>
            <h2>OUANTITY IN HAND:   {quantityInHand}</h2>
            <h2>OUANTITY TO BE RECIVED: {quantityToBeReceived}</h2>
        </div>
      </div>
              <div className='s21'>
                <div className='r4t'>
                  <div  className='r5'>
                    <h3>Pooduct Detials</h3>
                    <h5>Low Stock Items</h5>
                    <h5>All Item Groups</h5>
                    <h5>All Item </h5>
                    <h5>Unconfirmed Items</h5>
                  </div>
                  <div className='r6'>
                    <h5>77</h5>
                    <h5>100</h5>
                    <h5>120</h5>
                    <h5>35</h5>
                  </div>
                </div>
                  <div className='r4'>
                    <div className='a12'>
                        <h3>Top Selling Items</h3>
                        <SIL123/>
                    </div>
                  </div>
              </div>

              <div className='x12'>
                <ShipMent onClick={()=>navigate('/1bill')} />
                <ExecuPat/>
                <DeliPat/>
              </div>
          <div>
            <Footer/>
          </div>
    </div>
  );
}
