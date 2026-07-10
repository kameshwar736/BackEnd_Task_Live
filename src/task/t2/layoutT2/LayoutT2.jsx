import React from 'react'
import NavbarT2 from '../componentT2/NavbarT2'
import { Outlet } from 'react-router-dom'

const LayoutT2 = () => {
  return (
   <>
   <NavbarT2/>
   <Outlet/>
   </>
  )
}

export default LayoutT2