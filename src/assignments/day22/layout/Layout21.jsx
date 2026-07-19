import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar21 from '../component/Navbar21'

const Layout21 = () => {
  return (
    <>
      <Navbar21/>
    <Outlet/>
  
    </>
  )
}

export default Layout21