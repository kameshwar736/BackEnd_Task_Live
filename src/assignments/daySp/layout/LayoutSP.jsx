import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarSp from '../component/NavbarSp'

const LayoutSP = () => {
  return (
    <>
    <Outlet/>
    <NavbarSp/>
    </>
  )
}

export default LayoutSP