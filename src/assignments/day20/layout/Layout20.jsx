import React from 'react'
import Navbar20 from '../component/Navbar20'
import { Outlet } from 'react-router-dom'

const Layout20 = () => {
  return (<>

  <Navbar20/>
  <Outlet/>
  
  </> 
  )
}

export default Layout20