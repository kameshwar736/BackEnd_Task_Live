import React from 'react'
import Navbar11 from '../component11/Navbar11'
import { Outlet } from 'react-router-dom'

const Layout11 = () => {
  return (
   <>
   <Navbar11/>
   <Outlet/>
   </>
  )
}

export default Layout11