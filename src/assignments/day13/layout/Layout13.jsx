import React from 'react'
import Navbar13 from '../component/Navbar13'
import { Outlet } from 'react-router-dom'

const Layout13 = () => {
  return (
   <>
   <Navbar13/>
   <Outlet/>
   </>
  )
}

export default Layout13