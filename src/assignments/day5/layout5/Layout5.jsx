import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar5 from '../component5/NavBar5'

const Layout5 = () => {
  return (
   <>
   <NavBar5/>
   <Outlet/>
   </>
  )
}

export default Layout5