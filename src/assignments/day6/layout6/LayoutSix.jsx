import React from 'react'
import NavbarSIx from '../component/NavbarSIx'
import { Outlet } from 'react-router-dom'

const LayoutSix = () => {
  return (
   <>
   <NavbarSIx/>
   <Outlet/>
   </>
  )
}

export default LayoutSix