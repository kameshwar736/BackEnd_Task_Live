import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarThree from '../component/NavbarThree'

const LayoutThree = () => {
  return (
    <>
    <NavbarThree/>
    <Outlet/>
    </>
  )
}

export default LayoutThree