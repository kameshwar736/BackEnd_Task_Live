import React from 'react'
import Navbar8 from '../components/Navbar8'
import { Outlet } from 'react-router-dom'

const Layout8 = () => {
  return (
    <>
        <Navbar8/>
        <Outlet/>
    </>
  )
}

export default Layout8