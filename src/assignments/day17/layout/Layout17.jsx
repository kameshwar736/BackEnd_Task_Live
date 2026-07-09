import React from 'react'
import Navbar17 from '../component/Navbar17'
import { Outlet } from 'react-router-dom'

const Layout17 = () => {
  return (
  <>
   <Navbar17/>
   <Outlet/>
  </>
  )
}

export default Layout17