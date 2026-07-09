import React from 'react'
import Navbar18 from '../component/Navbar18'
import { Outlet } from 'react-router-dom'
import InputProvider from '../provider/InputProvider'

const Layout18 = () => {
  return (
    <>
   <InputProvider>
    <Navbar18/>
    <Outlet/>
   </InputProvider>
    </>
  )
}

export default Layout18