import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar24 from '../component/Navbar24'

const Layout24 = () => {
  return (
    <>
    <Navbar24/>
    <Outlet/>
  
    </>
  )
}

export default Layout24