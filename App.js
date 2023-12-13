import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LoginD from './pages/LoginD'
import Form from './pages/form'

export default function App() {
  return (
    
    <div>
      
     <BrowserRouter>
     <Routes>

  
      {/* <Route path='/' element={<Form/>} ></Route> */}
      <Route path='/' element={<LoginD/>} ></Route>

     </Routes>
     </BrowserRouter>

     
    </div>
  )
}
