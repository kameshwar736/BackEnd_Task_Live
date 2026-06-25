import React from 'react'
import Navbar10 from '../component/Navbar10'
import { Outlet } from 'react-router-dom'

const Layout10 = () => {
  return (
    <>
    <Navbar10/>
    <Outlet/>
    </>
  )
}

export default Layout10