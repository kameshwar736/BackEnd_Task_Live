import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar26 from '../component/Navbar26'

const Layout26 = () => {
  return (
    <>
    <Navbar26/>
    <Outlet/>
  
    </>
  )
}

export default Layout26