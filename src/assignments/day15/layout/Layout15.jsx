import React from 'react'
import Navbar15 from '../component/Navbar15'
import { Outlet } from 'react-router-dom'

const Layout15 = () => {
  return (
    <>
    <Navbar15/>
    <Outlet/>
    </>
  )
}

export default Layout15