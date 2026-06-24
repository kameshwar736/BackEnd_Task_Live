import React from 'react'
import Navbar7 from '../component7/Navbar7'
import { Outlet } from 'react-router-dom'

const Layout7 = () => {
  return (
  <>
  <Navbar7/>
  <Outlet/>
  </>
  )
}

export default Layout7