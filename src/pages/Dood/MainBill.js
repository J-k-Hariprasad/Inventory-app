import * as React from 'react';
import { TbShoppingCartPlus } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import '../Style_css/Navi.css'
import ToBill from '../MainPage/ToBill';

function Billing()
{
  return(
    <div className='mit'>

    <div className='side'>
      <h1>Inventory</h1>
      <hr/>
        <div>
          <button className='msr'><TbShoppingCartPlus /> Items</button>
          <button className='msr'><GoPackage />Packages </button>
          <button className='msr'><FaFileInvoiceDollar />Invoice</button>
          <button className='msr'><GiReturnArrow /> Return</button><br/><br/><br/>
          <button className='msr'><BiSolidPurchaseTag />Purchase</button>
          <button className='msr'><RiBillLine />Bills</button>
        </div>
        <div className='foot'>
              <hr/>
              <button className='ms'>Contact Us</button>
              <button className='ms'>Need Help </button>
              <button className='ms'>About ?</button>
              <hr/>
          </div>
    </div>
    <div className='q12'>
    <h1>--------BILLING-DETAILS-------</h1>
       <ToBill/>
    </div>
    </div>
  )
}
export default Billing;


