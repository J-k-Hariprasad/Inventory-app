import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';
import './Style_css/Navi.css'
import { VscAccount } from "react-icons/vsc";
import { ImSearch } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

import { TbShoppingCartPlus } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import Content from './Content';

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function Navi()
{
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          <button className='msr'onClick={()=> navigate('/1pur')} ><BiSolidPurchaseTag />Purchase</button>
          <button className='msr'><RiBillLine />Bills</button>
            <div className='foot'>
              <hr/>
                <button className='ms' onClick={()=>navigate('/con')}>Queries</button>
                <button className='ms' onClick={()=> navigate('/1abo')}>About ?</button>
              <hr/>
                <h4>Follow Us</h4>
                <div>
                    <FaFacebookSquare className='ccc'/>
                    <FaInstagram className='ccc' />
                    <FaXTwitter className='ccc'/>
                    <IoLogoYoutube className='ccc'/>
                </div>
            </div>
        </div>

    </div>

      <div className="ma">
      <Button><PiClockCounterClockwiseBold /></Button> 

        <ImSearch className='se'/><input text='search' placeholder='Search'></input>
        <div className='mbu'>
        <Button><IoSettingsOutline /></Button>
        <Button onClick={handleProfileClick}><VscAccount /></Button>
        </div>
        <div>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
            <MenuItem onClick={()=> navigate('/')}>Logout</MenuItem>
          </Menu>
        </div>
    </div>
    <Content/>
    </div>
  )
}
export default Navi;