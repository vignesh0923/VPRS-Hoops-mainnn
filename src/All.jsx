import React from 'react'
import App from './App'
import Registrations from "./Registrations/Registrations";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const All = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/registration' element={<Registrations/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default All
