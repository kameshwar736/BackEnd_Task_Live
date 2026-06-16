import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const LayoutFour = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   
   </>
  )
}

export default LayoutFour