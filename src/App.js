import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import LoginD from './pages/LoginD'
import Form from './pages/form'
import MainPage from './pages/MainPage'
import Shipment from '../src/pages/Dood/MainShipment'
import Deliver1 from '../src/pages/Dood/MainDeliver'
import Billing from '../src/pages/Dood/MainBill'
import Type from './pages/Dood/About'
import MainPur from './pages/Dood/MainPurchase'
import ContactUsPage from './pages/Contact/contact'

export default function App() {
  return (
    
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginD/>} ></Route>
        <Route path='form-sign' element={<Form/>} ></Route>
        <Route path='mainPage' element={<MainPage/>} ></Route>
        <Route path='/1ship' element={<Shipment/>} ></Route>
        <Route path='/1deli' element={<Deliver1/>} ></Route>
        <Route path='/1bill' element={<Billing/>} ></Route>
        <Route path='/1abo' element={<Type/>} ></Route>
        <Route path='/1pur' element={<MainPur/>} ></Route>
        <Route path='/con' element={<ContactUsPage/>} ></Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}
