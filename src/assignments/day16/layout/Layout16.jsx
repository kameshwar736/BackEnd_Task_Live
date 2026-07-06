import React from 'react'
import Navbar16 from '../component/Navbar16'
import { Outlet } from 'react-router-dom'

const Layout16 = () => {
  return (
   <>
   
   <Navbar16/>
   <Outlet/>
   </>
  )
}

export default Layout16