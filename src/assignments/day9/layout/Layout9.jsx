import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

const Layout9 = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default Layout9